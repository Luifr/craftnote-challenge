import { Request, Response } from 'express';
import { validateGetDirectionInput } from './directionValidator';

export type Direction = 'straight' | 'left' | 'right';

export const getDirection = (req: Request, res: Response): void => {
	try {
		validateGetDirectionInput(req.query as Record<string, string | string[]>);
	} catch (e) {
		res.status(400).json({ error: e.message });
		return;
	}

	const heading = +(req.query.heading as string);
	const target = +(req.query.target as string);

	let direction: Direction = 'straight';
	const angleDiff = heading - target;

	if (angleDiff >= 180 || (angleDiff > -180 && angleDiff < 0)) {
		direction = 'right';
	} else if (angleDiff <= -180 || (angleDiff > 0 && angleDiff < 180)) {
		direction = 'left';
	}

	res.status(200).json({ direction });
};
