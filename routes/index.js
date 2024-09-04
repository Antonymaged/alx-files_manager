import express from 'express';
import AppController from '../controllers/AppController.js';
import UsersController from '../controllers/UsersController.js';
import { getUserFromXToken, getUserFromAuthorization } from '../utils/auth.js';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.get('/users/me', xTokenAuthenticate, UsersController.getMe);

export default router;
