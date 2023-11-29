import { TUser } from "./users.interface";
import { User } from "./users.model";

const createStudentIntoDB = async (user:TUser) => {
  const result = await User.create(user);
  return result;
};

export const UserSevices = {
  createStudentIntoDB,
};
