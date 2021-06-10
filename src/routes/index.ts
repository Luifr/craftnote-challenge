import express from 'express';
import { directionRouter } from './direction';

export const router = express.Router();

// Map each router to a path

router.use('/direction', directionRouter);
// router.use('/abc', abcRouter);
