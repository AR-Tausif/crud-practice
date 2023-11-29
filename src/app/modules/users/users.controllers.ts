import { Request, Response } from "express";
import { UserSevices } from "./users.services";

const createStudents = async (req: Request, res: Response) => {
    try {
      const { user:userData } = req.body;
      const result = await UserSevices.createStudentIntoDB(userData);
  
      res.status(200).json({
        success: true,
        massage: 'student created succesfully',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  