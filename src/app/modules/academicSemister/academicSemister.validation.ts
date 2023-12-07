import { z } from 'zod';
import {
  academicSemisterCodes,
  academicSemisterMonths,
  academicSemisterNames,
} from './academicSemister.constant';

const createAcademicSemisterValidation = z.object({
  name: z.enum([...academicSemisterNames] as [string, ...string[]]),
  year: z.string(),
  code: z.enum([...academicSemisterCodes] as [string, ...string[]]),
  startMonth: z.enum([...academicSemisterMonths] as [string, ...string[]]),
  endMonth: z.enum([...academicSemisterMonths] as [string, ...string[]]),
});

export const AcademicSemisterValidations = {
  createAcademicSemisterValidation,
};
