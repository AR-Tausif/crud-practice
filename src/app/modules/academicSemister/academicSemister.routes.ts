import express from 'express';
import zodValidation from '../../middlewares/validations/zodValidations';
import { AcademicSemisterValidations } from './academicSemister.validation';
import { AcademicSemisterController } from './academicSemister.controllers';

const router = express.Router();
router.post(
  '/create-academic-semester',
  zodValidation(AcademicSemisterValidations.createAcademicSemisterValidation),
  AcademicSemisterController.createAcademicSemister,
);

router.get(
  '/academic-semester',
  AcademicSemisterController.getAllAcademicSemesterDataController,
);
router.get(
  '/academic-semester/:id',
  AcademicSemisterController.getSingleAcademicSemisterDataController,
);
export const AcademicSemisterRoutes = router;
