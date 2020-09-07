import usersJson from "../data/users";
import logger from "../utils/logger";
import * as User from "../models/User";
import * as UserPhoneNumber from "../models/UserPhoneNumber";

export async function getAllUsers() {
  logger.info("fetching all users");
  const data = await User.getAll();
  return {
    data,
    message: "List of all users",
  };
}

export async function getUserById(userId) {
  logger.info(`Fetching user information with id ${userId}`);

  const result = await User.getUserById(userId);


  if (!result) {
    logger.error(`cannot find the user with id ${userId}`);

    throw new NotFoundError(`cannot find the user with id ${userId}`);
    //   response.json({
    //     message: "Cannot find the user with id " + userId,
    //   });
  }

  // response.json(requestedUser);

  return {
    message: `Information about userId ${userId}`,
    data: result,
  };
}
export async function createUser(params) {

  const { firstName, lastName, email, password, phoneNumbers } = params;

  const userInsertData = await User.createUser(
    {
      firstName, lastName, email, password
    }
  );

  const insertDataForPhoneNumbers = phoneNumbers.map(phone => ({
    userId: userInsertData.id,
    phoneNumber: phone.number,
    type:phone.type
  }))

  const phoneNumberInsertedData = await UserPhoneNumber.add(insertDataForPhoneNumbers);
  
  return {
    data:params,
    message: "New user added successfully"
  };
}

export function deleteUser(userId) {
  const doesUserExist = usersJson.find((user) => user.id === userId);

  if (!doesUserExist) {
    logger.error(`cannot find the user with id ${userId}`);
    throw new Error(`cannot find the user with id ${userId}`);
  }
  const updatedUsersList = usersJson.filter((user) => user.id !== userId);

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

  return {
    message: "Deleted user with id " + userId,
  };
}

export function updateUser(userId, params) {
  const updatedJson = usersJson.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        ...params,
      };
    }

    return user;
  });

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  return {
    message: "Updated user with id " + userId,
  };
}
