import express from 'express';
import { StudentControllers } from './students.controllers';

const router = express.Router();
router.post('/create-student', StudentControllers.createStudents);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
