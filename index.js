const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    greet: String
  }
`);

// rootValue
const rootValue= {
  hello: () => 'Hello',
  greet: () => 'This is a greet'
};

// execute
graphql(schema, '{ greet }', rootValue)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
