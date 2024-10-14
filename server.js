import bodyParser from 'body-parser';
import cors from 'cors';
import errorhandler from 'errorhandler';
import express from 'express';

import apiRouter from './api/api.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

export default app;
