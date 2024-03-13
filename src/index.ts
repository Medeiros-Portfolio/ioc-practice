import express from 'express';
import { container } from 'tsyringe';
import DatabaseService from './service/DatabaseService';

const DEFAULT_PORT = 3001;

const port = process.env.PORT || DEFAULT_PORT;

const app = express();

app.route('/connect').get((req, res) => {
  const service = container.resolve(DatabaseService);

  const response = service.connect();
  
  res.send({
    message: response
  })
});


app.route('/disconnect').get((req, res) => {
  const service = container.resolve(DatabaseService);

  const response = service.disconnect();

  res.status(200);
  res.send({
    message: response
  })
});

app.route('/healthz').get((req, res) => {
  res.status(200).send()
});

app.use((req, res) => {
  res.status(404).send({
    message: 'Route not found'
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
