import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterService = async (payload: TAcademicSemister) => {
  type TAcademicSemisterNameCode = {
    [key: string]: string;
  };
  const academicSemisterNameCodeMapper: TAcademicSemisterNameCode = {
    Autmn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (
    academicSemisterNameCodeMapper[payload.name] !==
    academicSemisterNameCodeMapper[payload.code]
  ) {
    throw new Error('Academic Semester Name and code not matched');
  }
  const result = await AcademicSemisterModel.create(payload);

  return result;
};

export const AcadmicSemesterServices = {
  createAcademicSemisterService,
};
