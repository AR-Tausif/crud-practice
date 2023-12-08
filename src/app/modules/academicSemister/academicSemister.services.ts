import { academicSemisterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterService = async (payload: TAcademicSemister) => {
  console.log(payload);

  console.log(
    typeof academicSemisterNameCodeMapper[payload.name] !==
      academicSemisterNameCodeMapper[payload.code],
  );

  if (
    academicSemisterNameCodeMapper[payload.name] ===
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
