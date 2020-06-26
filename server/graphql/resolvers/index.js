const postsResolvers = require("./postsResolver");
const usersResolver = require("./usersResolver");
const commentsResolver = require("./commentsResolver");

module.exports = {
  Post: {
    //any query or mutation that returns a post must go through here and add these properties
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...usersResolver.Mutation,
    ...commentsResolver.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
