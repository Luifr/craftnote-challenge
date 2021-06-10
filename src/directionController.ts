import { Request, Response } from 'express';

export const getDirection = (_: Request, res: Response): void => {
	res.status(201).send('teste');
};
