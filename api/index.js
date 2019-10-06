const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
const { readFileSync } = require("fs");
const { find, filter } = require('lodash');


const data_file = readFileSync('./db.json', (err, data) => {
  if (err) throw err;
});
const db = JSON.parse(data_file);

const typeDefs = `
  type Query {
    story(id: ID!): Story
    card(id: ID!): Card
  }
  type Card {
      id: ID!
      title: String
      copy: String
      img_url: String 
  }
  type Story {
      id: ID!
      cards: [ID!]
  }
`;

const resolvers = {
    Query: {
        story(obj, args, context, info) {
          return find(db.stories, { id: args.id });
        },
        card(obj, args, context, info) {
          return find(db.cards, { id: args.id });
        },
    }
  };

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

server.listen().then(({ url }) => 
    console.log(`Server running on port ${url}`));