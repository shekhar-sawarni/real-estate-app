import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Define the route in the router
router.get('/test', test);

export default router;
