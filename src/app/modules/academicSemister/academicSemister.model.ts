import { Schema, model } from 'mongoose';
import { TAcademicSemister } from './academicSemister.interface';
import {
  academicSemisterCodes,
  academicSemisterMonths,
  academicSemisterNames,
} from './academicSemister.constant';

export const academicSemisterSchema = new Schema<TAcademicSemister>({
  name: { type: String, enum: academicSemisterNames, required: true },
  year: { type: String, required: true },
  code: { type: String, enum: academicSemisterCodes, required: true },
  startMonth: {
    type: String,
    enum: academicSemisterMonths,
    required: true,
  },
  endMonth: { type: String, enum: academicSemisterMonths, required: true },
});

academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemisterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isExist) {
    throw new Error('your year and name already exist');
  }
  next();
});

export const AcademicSemisterModel = model<TAcademicSemister>(
  'academicSemister',
  academicSemisterSchema,
);
