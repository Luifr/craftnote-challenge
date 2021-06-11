import express from 'express'; // import express

import request from 'supertest';
import { directionRouter } from './direction';

const app = express();
app.use('/direction', directionRouter);

describe('Direction', () => {
	describe('Validation', () => {
		test('heading parameter is missing', async () => {
			const response = await request(app).get('/direction');
			expect(response.body.error).toBe(`Missing heading parameter`);
			expect(response.statusCode).toBe(400);
		});

		test('heading parameter is not a number', async () => {
			const response = await request(app).get('/direction?heading=a');
			expect(response.body.error).toBe(`Parameter heading is not a number`);
			expect(response.statusCode).toBe(400);
		});

		test('heading parameter is out of bounds', async () => {
			const response = await request(app).get('/direction?heading=1233');
			expect(response.body.error).toBe(
				`Parameter heading value is invalid, it should be between 0 and 359`,
			);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is missing', async () => {
			const response = await request(app).get('/direction?heading=12');
			expect(response.body.error).toBe(`Missing target parameter`);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is not a number', async () => {
			const response = await request(app).get('/direction?heading=12&target=a');
			expect(response.body.error).toBe(`Parameter target is not a number`);
			expect(response.statusCode).toBe(400);
		});

		test('target parameter is out of bounds', async () => {
			const response = await request(app).get('/direction?heading=12&target=1233');
			expect(response.body.error).toBe(
				`Parameter target value is invalid, it should be between 0 and 359`,
			);
			expect(response.statusCode).toBe(400);
		});
	});

	describe('Request', () => {
		test('test', () => {
			expect(true).toBe(true);
		});
	});
});
