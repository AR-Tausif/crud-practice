import { z } from 'zod';

export const TGaurdianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

export const TUserNameValidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

export const TLocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const TStudentsValidationSchema = z.object({
  id: z.string(),
  name: TUserNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  gaurdian: TGaurdianValidationSchema,
  localGuardian: TLocalGuardianValidationSchema,
  profiileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
});

export default TStudentsValidationSchema;
