import express from 'express';
import { json } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';
import * as config from './config';
import clientRouter from './resources/client/client.router';

export const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.use('/api/client', clientRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
