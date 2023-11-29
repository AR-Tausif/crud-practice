import express from 'express';
import { UserControllers } from './users.controllers';

const router = express.Router();
// router.post('/create-admin', UserControllers.createStudents);
// router.post('/create-faculty', usersController.createStudents);
router.post('/create-student', UserControllers.createStudents);

export const UsersRouter = router;
