import express from 'express';
import menusRouter from './menus.js';
import employeesRouter from './employees.js';

const apiRouter = express.Router();

apiRouter.use('/menus', menusRouter);
apiRouter.use('/employees', employeesRouter);

export default apiRouter;
