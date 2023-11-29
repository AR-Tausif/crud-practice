import { Request, Response } from 'express';
import { UserSevices } from './users.services';

const createStudents = async (req: Request, res: Response) => {
  try {
    const { password, user: studentData } = req.body;
    const result = await UserSevices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      massage: 'student created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'Get error about create student!',
      error,
    });
  }
};

export const UserControllers = {
  createStudents,
};
