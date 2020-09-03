import usersJson from "../data/users";
import logger from "../utils/logger";

export function getAllUsers() {
  logger.info("fetching all users");

  return {
    message:"List of all users",
    data:usersJson
  };
}

export function getUserById(userId) {
  logger.info(`Fetching user information with id ${userId}`);

  const requestedUser = usersJson.find((user) => user.id === userId);

  if (!requestedUser) {
    logger.error(`cannot find the user with id ${userId}`);

    throw new NotFoundError(`cannot find the user with id ${userId}`);
    //   response.json({
    //     message: "Cannot find the user with id " + userId,
    //   });
  }

  // response.json(requestedUser);

  return {
    message: `Information about userId ${userId}`,
    data: requestedUser
  }
}
export function createUser(params) {
  const maxId = usersJson.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc;
  }, 0);

  usersJson.push({
    id: maxId + 1,
    ...params,
  });

 return{
    message: "New user added successfully",
    data: {
      id: maxId + 1,
      ...params,
    }
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

  return{
    message: "Deleted user with id " + userId,
  };
}

export function updateUser(userId, params){

  const updatedJson = usersJson.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        ...params
      };
    }

    return user;
  });

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

 return{
    message: "Updated user with id " + userId,
  };
}
