import { z } from 'zod';

export const TGuardianValidationSchema = z.object({
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

export const TCreateStudentsValidationSchema = z.object({
  body: z.object({
    student: z.object({
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
      guardian: TGuardianValidationSchema,
      localGuardian: TLocalGuardianValidationSchema,
      addmissionSemester: z.string(),
      profiileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  TCreateStudentsValidationSchema,
};
