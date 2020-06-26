import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const PostForm = () => {
  const [form] = Form.useForm();

  const [createPost, { error }] = useMutation(CreatePost, {
    update(_, result) {
      console.log(result);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onFinish = (values) => {
    console.log(values);
    createPost({ variables: values });
    values.body = "";
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <Form form={form} name="register" onFinish={onFinish}>
        <Form.Item
          name="body"
          label="body"
          rules={[
            {
              required: true,
              message: "you can't leave it blank",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostForm;

const CreatePost = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      userName
      likeCount
      commentCount
      likes {
        id
        userName
        createdAt
      }
      comments {
        id
        body
        userName
        createdAt
      }
    }
  }
`;
