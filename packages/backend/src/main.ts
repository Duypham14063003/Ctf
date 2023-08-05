import 'reflect-metadata';
import express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import router from './routes';
import * as functions from 'firebase-functions';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(express.json());
dotenv.config();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', router);

app.get('/api', (req, res) => {
  res.send({ message: 'hello backend' });
});

// api not found
app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Api not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});


const port = process.env.BE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
export const api = functions.https.onRequest(app);
