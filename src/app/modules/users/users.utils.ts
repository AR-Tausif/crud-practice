import { TAcademicSemister } from '../academicSemister/academicSemister.interface';
import { UserModel } from './users.model';

const findLastUser = async () => {
  const result = await UserModel.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return result ? result?.id : undefined;
};

// Generate userId
export const generateUserId = async (payload: TAcademicSemister | null) => {
  // year, semestercode 0000
  const lastUserId = await findLastUser();
  const lastUserIdYear = lastUserId?.substring(0, 4);
  // const lastUserIdLastDigits = lastUserId?.substring(6);
  const lastUserIdCode = lastUserId?.substring(4, 6);
  let currId = (0).toString();

  if (
    lastUserId &&
    lastUserIdYear === payload?.year &&
    lastUserIdCode === payload?.code
  ) {
    currId = lastUserId.substring(6);
  }
  let increamentId = (Number(currId) + 1).toString().padStart(4, '0');
  increamentId = `${payload?.year}${payload?.code}${increamentId}`;
  console.log(increamentId);

  return increamentId;
};
