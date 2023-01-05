import express from 'express';
import { createCourse } from '../controllers/UserInforController';

const router = express.Router();
router.post('/user', createCourse);

export default router;