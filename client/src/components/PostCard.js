import React, { useState } from "react";
import { Skeleton, Card, Avatar, Button } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const { Meta } = Card;

const PostCard = ({
  post: {
    body,
    createdAt,
    id,
    userName,
    likeCount,
    commentCount,
    likes,
    commments,
  },
  loading,
}) => {
  const likePost = () => {
    console.log("like");
  };
  const commentPost = () => {
    console.log("comment");
  };
  return (
    <Card
      actions={[
        <>
          <Button
            shape="circle"
            icon={<HeartOutlined />}
            onClick={likePost}
            aria-label="like button"
          ></Button>
          <span style={{ padding: ".3rem" }}>{likeCount}</span>
        </>,
        <>
          <Button
            shape="circle"
            icon={<CommentOutlined />}
            onClick={commentPost}
            aria-label="comment button"
          ></Button>
          <span style={{ padding: ".3rem" }}>{commentCount}</span>
        </>,
      ]}
    >
      <Link to={`/posts/${id}`}>{dayjs().to(dayjs(createdAt))}</Link>
      <Skeleton loading={loading} avatar active>
        <Meta
          style={{ marginTop: "10px" }}
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={userName}
          description={body}
        />
      </Skeleton>
    </Card>
  );
};

export default PostCard;
