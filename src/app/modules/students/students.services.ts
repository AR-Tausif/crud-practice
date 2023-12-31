import { StudentsModel } from './students.model';

const getAllStudentsFromDB = async () => {
  const result = await StudentsModel.find();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  return await StudentsModel.find({ userId: studentId });
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
