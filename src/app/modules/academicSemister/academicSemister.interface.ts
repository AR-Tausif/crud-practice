export type TMonths =
  | 'January'
  | 'Fabruary'
  | 'April'
  | 'May'
  | 'Jun'
  | 'July'
  | 'September'
  | 'Octobere'
  | 'November'
  | 'December';

export type TAcademicSemisterName = 'Auntmn' | 'Summer' | 'Fall';
export type TAcademicSemisterCode = '01' | '02' | '03';
export type TAcademicSemister = {
  name: TAcademicSemisterName;
  year: string;
  code: TAcademicSemisterCode;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSemisterNameCode = {
  [key: string]: string;
};
