import { Router } from 'express';

import UserController from '../controllers/user';
import SessionController from '../controllers/session';

const routes = Router();

const userController = new UserController();
const sessionController = new SessionController();

routes.post('/session', sessionController.create);
routes.post('/users', userController.create);

export default routes;