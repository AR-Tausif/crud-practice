import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/students.routes';
const app: Application = express();
const routeV1 = '/api/v1/students';
// parser use here
app.use(express.json());
app.use(cors());

// Application routes using here
app.use(routeV1, StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

export default app;
