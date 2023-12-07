import express from 'express';
import zodValidation from '../../middlewares/validations/zodValidations';
import { AcademicSemisterValidations } from './academicSemister.validation';
import { AcademicSemisterController } from './academicSemister.controllers';

const router = express.Router();
router.post(
  '/create-academic-semester',
  AcademicSemisterController.createAcademicSemister,
);

export const AcademicSemisterRoutes = router;
