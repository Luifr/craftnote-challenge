import express from 'express';
import { getDirection } from '../directionController';

export const directionRouter = express.Router();

directionRouter.get('/', getDirection);
