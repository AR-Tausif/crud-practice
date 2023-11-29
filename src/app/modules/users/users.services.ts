import { TUser } from './users.interface';
import { TStudents } from '../students/students.interface';
import config from '../../config';
import { UserModel } from './users.model';
import { StudentsModel } from '../students/students.model';

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
  userData.id = '0124560001';
  const createUser = await UserModel.create(userData);

  if (Object.keys(createUser).length) {
    console.log({ inside: userData, std: StudentData });

    StudentData.userId = userData.id;
    StudentData.user = createUser._id;
    console.log({ stD: StudentData });

    const createNewStudent = await StudentsModel.create(StudentData);
    return createNewStudent;
  }
  console.log({ log: userData });
};

export const UserSevices = {
  createStudentIntoDB,
};
