import express from 'express';


const router = express.Router();
router.post('/create-admin', usersController.createStudents);
router.post('/create-faculty', usersController.createStudents);
router.post('/create-student', usersController.createStudents);

export const UsersRouter = router;
