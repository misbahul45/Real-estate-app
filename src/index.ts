import express, { Express, Request, Response } from 'express';
import productRouter from './router/productRouter';
import { PORTENV } from './lib/env.lib';


const app: Express = express();
const port = PORTENV

//setup
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Application is running',
  });
});

//routes
app.use('/api/products', productRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
