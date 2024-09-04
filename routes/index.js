import express from 'express';
import AppController from '../controllers/AppController.js';
import UsersController from '../controllers/UsersController.js';
import AuthController from '../controllers/AuthController.js';
import { basicAuthenticate, xTokenAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.get('/users/me', xTokenAuthenticate, UsersController.getMe);
router.get('/connect', basicAuthenticate, AuthController.getConnect);
router.get('/disconnect', xTokenAuthenticate, AuthController.getDisconnect);

export default router;
