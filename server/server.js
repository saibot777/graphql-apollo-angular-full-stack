import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';

import schema from './schema';

const app = express();

mongoose.connect('mongodb://admin:admin@ds119150.mlab.com:19150/graphql-angular')

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(4000, () => console.log('Express server is running on port 4000'));
