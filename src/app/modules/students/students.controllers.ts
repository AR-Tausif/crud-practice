import { Request, Response } from 'express';
import { StudentServices } from './students.services';
import TStudentsValidationSchema from './student.zode.validation';

const createStudents = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // here trying to ZOD validation
    const zodParseData = TStudentsValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      massage: 'student created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Somethig went wrong...',
      error,
    });
  }
};

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
  createStudents,
  getAllStudents,
  getSingleStudent,
};
