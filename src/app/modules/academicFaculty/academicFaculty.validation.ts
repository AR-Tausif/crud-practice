import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z.string(),
});

export const ValidationSchema = {
  academicFacultyValidationSchema,
};
