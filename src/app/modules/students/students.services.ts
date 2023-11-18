import { StudentsModel } from '../students.model';
import { Students } from './students.interface';

const createStudentIntoDB = async (student: Students) => {
  const result = await StudentsModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentsModel.find();
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
};
