import { academicSemisterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterService = async (payload: TAcademicSemister) => {
  // console.log(
  //   'start',
  //   academicSemisterNameCodeMapper[payload.name],
  //   academicSemisterNameCodeMapper[payload.code],
  //   'ok',
  // );
  console.log(payload);
  const names = academicSemisterNameCodeMapper;
  console.log(names);

  if (names[payload.name] !== payload.code) {
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
