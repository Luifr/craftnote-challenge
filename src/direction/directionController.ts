import { Request, Response } from 'express';
import { validateGetDirectionInput } from './directionValidator';

export const getDirection = (req: Request, res: Response): void => {
	try {
		validateGetDirectionInput(req.query as Record<string, string | string[]>);
	} catch (e) {
		res.status(400).json({ error: e.message });
		return;
	}

	const heading = +(req.query.heading as string);
	const target = +(req.query.target as string);

	res.status(201).json({ direction: `${heading} ${target}` });
};
