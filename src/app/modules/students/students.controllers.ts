import { Request, Response } from 'express';
import { StudentServices } from './students.services';

const createStudents = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      massage: 'student created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      massage: 'Students retrieved succesfully',
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudents,
  getAllStudents,
};
