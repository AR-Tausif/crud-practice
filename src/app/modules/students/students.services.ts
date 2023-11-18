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

const getSingleStudentFromDB = async (studentId: string) => {
  return await StudentsModel.find({ id: studentId });
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
