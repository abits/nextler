const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    story: Story
    card: Card
  }
  type Card {
      id: ID!
      title: String
      copy: String
      img_url: String 
  }
  type Story {
      id: ID!
      cards: [Card!]
  }
`;

const resolvers = {
    Query: {
        story: async() => {
            return {id: 1}
        },
        card: async() => {
          return {}},
    },

    Card: {
        id: {},
        title: {},
        copy: async () => {
            let lorem = await fetch(
                "https://baconipsum.com/api/?type=all-meat&paras=1&format=text"
            ).then(res => res.text());
          return lorem  
        },
        img_url: () => {
          return "https://picsum.photos/200/300";
        }
    },

    Story: {
        id: () => { return 1 },
        cards: async() => {
            return [{id: 1, title: "card-1"}, {id: 2, title: "card-2"}, {id: 3, title: "card-3"}];
        },
    }
  };

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

server.listen().then(({ url }) => 
    console.log(`Server running on port ${url}`));