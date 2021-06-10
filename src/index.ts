import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import listEndpoints from 'express-list-endpoints';
import { router } from './routes';

const port = +(process.env?.['PORT'] || '3000');
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/', router);

app.listen(port, () => {
	console.log(`🚀  listening on port ${port}!`);
	console.log(listEndpoints(app));
});
