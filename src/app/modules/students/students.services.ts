import { StudentsModel } from './students.model';
import { TStudents } from './students.interface';

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
