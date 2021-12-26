
const router = require('express').Router();


const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// List of controller callbacks 
// Routes for all users and create user
  // ../../controllers/user-controllers
  // /api/users
  router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
  
//Routes for users by id 
  // /api/users/:id
  router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//Routes for friends schema
// /api/users/:id/friends/:friendId
  router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)


module.exports = router;
