import express from 'express';
import env from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';
import { connectDB } from '../config/db';
import cors from 'cors';
env.config();

const app = express();
app.use(cors());
connectDB();

app.use('/graphql', graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
