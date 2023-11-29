import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/students.routes';
import { UsersRouter } from './app/modules/users/users.routes';
const app: Application = express();

  // parser use here
  app.use(express.json());
app.use(cors());

// Application routes using here
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UsersRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

export default app;
