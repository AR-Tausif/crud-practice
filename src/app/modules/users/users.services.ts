const createStudentIntoDB = async (student: TStudents) => {
  const result = await StudentsModel.create(student);
  return result;
};

export const UserSevices = {
  createStudentIntoDB,
};
