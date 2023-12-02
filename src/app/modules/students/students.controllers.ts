import { StudentServices } from './students.services';
import sendResponds from '../../utils/sendResponds';
import CatchAsync from '../../utils/catchAsync';

const getAllStudents = CatchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponds(res, 'Students are retrieved successfully', result);
});

const getSingleStudent = CatchAsync(async (req, res) => {
  const { studentId } = req.params;
  const user = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponds(res, 'Student retrieved succesfully', user);
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
