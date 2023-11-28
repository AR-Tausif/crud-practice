import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/students.routes';
import { UsersRouter } from './app/modules/users/users.routes';
const app: Application = express();
const studentRouteV1 = '/api/v1/students';
const usersRouteV1 = '/api/v1/users';
// parser use here
app.use(express.json());
app.use(cors());

// Application routes using here
app.use(studentRouteV1, StudentRoutes);
app.use(usersRouteV1, UsersRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

export default app;
