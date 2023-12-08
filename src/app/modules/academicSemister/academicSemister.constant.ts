import {
  TAcademicSemisterCode,
  TAcademicSemisterName,
  TAcademicSemisterNameCode,
  TMonths,
} from './academicSemister.interface';

export const academicSemisterMonths: TMonths[] = [
  'January',
  'Fabruary',
  'April',
  'May',
  'Jun',
  'July',
  'September',
  'Octobere',
  'November',
  'December',
];
export const academicSemisterNames: TAcademicSemisterName[] = [
  'Auntmn',
  'Summer',
  'Fall',
];
export const academicSemisterCodes: TAcademicSemisterCode[] = [
  '01',
  '02',
  '03',
];

export const academicSemisterNameCodeMapper: TAcademicSemisterNameCode = {
  Autmn: '01',
  Summer: '02',
  Fall: '03',
};
