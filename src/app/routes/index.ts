import { Router } from 'express';
import { StudentRoutes } from '../modules/students/students.routes';
import { UsersRouter } from '../modules/users/users.routes';
import { AcademicSemisterRoutes } from '../modules/academicSemister/academicSemister.routes';

const router = Router();

const modulePatternRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UsersRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemisterRoutes,
  },
];
router.use('/users', UsersRouter);

modulePatternRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
