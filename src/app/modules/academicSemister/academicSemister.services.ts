import { academicSemisterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterService = async (payload: TAcademicSemister) => {
  if (
    academicSemisterNameCodeMapper[payload.name] ===
    academicSemisterNameCodeMapper[payload.code]
  ) {
    throw new Error('Academic Semester Name and code not matched');
  }
  const result = await AcademicSemisterModel.create(payload);

  return result;
};

const getAllAcademicSemesterDataService = async () => {
  return await AcademicSemisterModel.find({});
};

const getSingleAcademicSemisterDataServic = async (id: string) => {
  return await AcademicSemisterModel.findById(id);
};

export const AcadmicSemesterServices = {
  createAcademicSemisterService,
  getAllAcademicSemesterDataService,
  getSingleAcademicSemisterDataServic,
};
