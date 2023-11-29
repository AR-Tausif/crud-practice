import { Request, Response } from 'express';
import { StudentServices } from './students.services';
import TStudentsValidationSchema from './student.zode.validation';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      massage: 'Students are retrieved succesfully',
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      massage: 'Student retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
