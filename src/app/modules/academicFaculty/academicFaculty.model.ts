import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
  },
});

export const AcademicFacultyModel = model(
  'AcademicFaculty',
  academicFacultySchema,
);
