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

const getAllAcademicSemesterDataController: RequestHandler = CatchAsync(
  async (req, res) => {
    const result =
      await AcadmicSemesterServices.getAllAcademicSemesterDataService();
    sendResponds(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All academic semester data retrieved succesfully!',
      data: result,
    });
  },
);

const getSingleAcademicSemisterDataController: RequestHandler = CatchAsync(
  async (req, res) => {
    const result =
      await AcadmicSemesterServices.getSingleAcademicSemisterDataServic(
        req.params.id,
      );
    sendResponds(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Single Data is Retrieved',
      data: result,
    });
  },
);
export const AcademicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemesterDataController,
  getSingleAcademicSemisterDataController,
};
