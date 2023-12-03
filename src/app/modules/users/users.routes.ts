import express from 'express';
import { UserControllers } from './users.controllers';
import { studentValidations } from '../students/student.zode.validation';
import zodValidation from '../../middlewares/validations/zodValidations';

const router = express.Router();
// router.post('/create-admin', UserControllers.createStudents);
// router.post('/create-faculty', usersController.createStudents);
router.post(
  '/create-student',
  zodValidation(studentValidations.TCreateStudentsValidationSchema),
  UserControllers.createStudents,
);

export const UsersRouter = router;
