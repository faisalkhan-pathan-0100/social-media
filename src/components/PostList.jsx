import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AllPostList } from "../store/post-list-store";

import LoadingSpinner from "./LoadingSpinner";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, fetching } = useContext(AllPostList);
  // const [fetching, setFetching] = useState(false);
  // this code trafser in the store
  // useEffect(() => {
  //   setFetching(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       fetchAllPost(data.posts);
  //       setFetching(false);
  //     });
  // }, []);
  return (
    <>
      {fetching && <LoadingSpinner />}{" "}
      {/**fetching false mean no fetching opration so spiner loading no required and {/**jis time par fetcing true  hai  usko false banao or short circuit karo*/}{" "}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post post={post} />)}
    </>
  );
};
export default PostList;
