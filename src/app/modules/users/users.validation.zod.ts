import { z } from 'zod';
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be included',
    })
    .max(20, { message: 'Password can not be more than 20 character' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
