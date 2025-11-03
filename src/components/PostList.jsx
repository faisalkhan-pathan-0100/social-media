import { useContext } from "react";
import Post from "./Post";
import { AllPostList } from "../store/post-list-store";

const PostList = () => {
  const postContext = useContext(AllPostList);
  console.log(postContext.postList);
  return (
    <>
      {postContext.postList.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};
export default PostList;
