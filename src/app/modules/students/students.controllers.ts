import { StudentServices } from './students.services';
import sendResponds from '../../utils/sendResponds';
import CatchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const getAllStudents = CatchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponds(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved succesfully',
    data: result,
  });
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
