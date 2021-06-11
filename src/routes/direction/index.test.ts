import express from 'express'; // import express
import request from 'supertest';
import { Direction } from '../../direction/directionController';

import { directionRouter } from '.';

const app = express();
app.use('/direction', directionRouter);
const mockedRequest = request(app);

const testDirectionsResult = (testValues: [number, number][], direction: Direction) => {
	for (const [heading, target] of testValues) {
		test(`Heading=${heading}, Target=${target}`, async () => {
			const response = await mockedRequest.get(`/direction?heading=${heading}&target=${target}`);
			expect(response.statusCode).toBe(200);
			expect(response.body.direction).toBe(direction);
		});
	}
};

describe('Direction', () => {
	describe('Validation', () => {
		test('heading parameter is missing', async () => {
			const response = await mockedRequest.get('/direction');
			expect(response.body.error).toBe(`Missing heading parameter`);
			expect(response.statusCode).toBe(400);
		});

		test('heading parameter is not a number', async () => {
			const response = await mockedRequest.get('/direction?heading=a');
			expect(response.body.error).toBe(`Parameter heading is not a number`);
			expect(response.statusCode).toBe(400);
		});

		test('heading parameter is out of bounds', async () => {
			const response = await mockedRequest.get('/direction?heading=1233');
			expect(response.body.error).toBe(
				`Parameter heading value is invalid, it should be between 0 and 359`,
			);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is missing', async () => {
			const response = await mockedRequest.get('/direction?heading=12');
			expect(response.body.error).toBe(`Missing target parameter`);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is not a number', async () => {
			const response = await mockedRequest.get('/direction?heading=12&target=a');
			expect(response.body.error).toBe(`Parameter target is not a number`);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is out of bounds', async () => {
			const response = await mockedRequest.get('/direction?heading=12&target=1233');
			expect(response.body.error).toBe(
				`Parameter target value is invalid, it should be between 0 and 359`,
			);
			expect(response.statusCode).toBe(400);
		});
	});

	describe('Request', () => {
		describe('Should be Right', () => {
			// Array of Heading, Target
			const testValues: [number, number][] = [
				[10, 11],
				[350, 351],
				[340, 40],
				[200, 0],
			];
			testDirectionsResult(testValues, 'right');
		});

		describe('Should be Left', () => {
			// Array of Heading, Target
			const testValues: [number, number][] = [
				[11, 10],
				[351, 350],
				[40, 340],
				[0, 200],
			];
			testDirectionsResult(testValues, 'left');
		});

		describe('Should be Straight', () => {
			// Array of Heading, Target
			const testValues: [number, number][] = [
				[11, 11],
				[351, 351],
				[40, 40],
			];
			testDirectionsResult(testValues, 'straight');
		});
	});
});
