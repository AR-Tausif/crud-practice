import { NextFunction, Request, Response } from 'express';
import { UserSevices } from './users.services';

const createStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password, student: studentData } = req.body;

  try {
    const result = await UserSevices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      massage: 'student created succesfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudents,
};
