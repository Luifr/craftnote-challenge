import express from 'express';
import { getDirection } from '../direction/directionController';

export const directionRouter = express.Router();

directionRouter.get('/', getDirection);
