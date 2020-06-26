import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import PostCard from "../components/PostCard";
import { Container, CardContainer } from "../components/styles";
import { AuthContext } from "../context/auth";
import PostForm from "../components/PostForm";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data, error } = useQuery(FetchPostQuery);
  console.log(data);
  if (loading) return <p>loading</p>;
  if (error) return <p> some error occured</p>;
  const { getPosts: posts } = data;

  return (
    <Container>
      <h2>Recent Posts</h2>
      <CardContainer>
        {user && <PostForm />}
        {posts &&
          posts.map((post) => (
            <PostCard key={Math.random()} post={post} loading={loading} />
          ))}
      </CardContainer>
    </Container>
  );
};

const FetchPostQuery = gql`
  {
    getPosts {
      id
      body
      createdAt
      userName
      likeCount
      commentCount
      likes {
        userName
      }
      comments {
        id
        userName
        createdAt
        body
      }
    }
  }
`;

export default Home;
