import * as userService from "../services/users";

/**
 * //controller to get all the users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function getAllUsers(req, res, next) {
  userService
    .getAllUsers()
    .then(data => res.json(data))
    .catch(err => next(err))
}
  // try {
  //   const data = userService.getAllUsers();
  //   res.json(data);
  // } catch (err) {
  //   next(err);
  // }


/**
 * //controller to get a particular user by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function getUserById(req, res, next) {
  userService
    .getUserById(+req.params.userId)
    .then(data => res.json(data))
    .catch(err => next(err))
  // try {
  //   const data = userService.getUserById(+req.params.userId);
  //   res.json(data);
  // } catch (err) {
  //   // console.log(err);
  //   next(err);
  // }
}

/**
 * //controller to create new users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function createUser(req, res, next) {
  const params = req.body;

  try {
    const data = userService.createUser(params);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * //controller to remove existing users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function deleteUser(req, res, next) {
  const userId = +req.params.userId;

  try {
    const data = userService.deleteUser(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * //controller to update the details of  users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function updateUser(req, res, next) {
  const params = req.body;
  const userId = +req.params.userId;

  try {
    const data = userService.updateUser(userId, params);

    res.json(data);
  } catch (err) {
    next(err);
  }
}
