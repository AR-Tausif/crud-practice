import { TUser } from './users.interface';
import { TStudents } from '../students/students.interface';
import config from '../../config';
import { UserModel } from './users.model';
import { StudentsModel } from '../students/students.model';
import { AcademicSemisterModel } from '../academicSemister/academicSemister.model';
import { generateUserId } from './users.utils';

// Created student
const createStudentIntoDB = async (
  password: string,
  StudentData: TStudents,
) => {
  //create a user object
  const userData: Partial<TUser> = {};

  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }
  // set a user role & id embaded
  userData.role = 'student';

  // Find academic semester with id
  const academicSemister = await AcademicSemisterModel.findById(
    StudentData.addmissionSemester,
  );

  userData.id = await generateUserId(academicSemister);
  const createUser = await UserModel.create(userData);

  if (Object.keys(createUser).length) {
    StudentData.userId = userData.id;
    StudentData.user = createUser._id;

    const createNewStudent = await StudentsModel.create(StudentData);
    return createNewStudent;
  }
};

export const UserSevices = {
  createStudentIntoDB,
};
