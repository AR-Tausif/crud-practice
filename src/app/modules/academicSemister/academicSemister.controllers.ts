import { Request, RequestHandler, Response } from 'express';
import CatchAsync from '../../utils/catchAsync';
import { AcadmicSemesterServices } from './academicSemister.services';
import sendResponds from '../../utils/sendResponds';
import httpStatus from 'http-status';

const createAcademicSemister: RequestHandler = CatchAsync(
  async (req: Request, res: Response) => {
    const result = await AcadmicSemesterServices.createAcademicSemisterService(
      req.body,
    );
    res.status(200).json({
      success: true,
      massage: 'semester created succesfully',
      data: result,
    });
  },
);

export const AcademicSemisterController = {
  createAcademicSemister,
};
