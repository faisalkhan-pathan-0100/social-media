import { createContext, useReducer } from "react";
export const AllPostList = createContext({
  posts: [],
  createNewPost: () => {},
  deletepost: () => {},
});

export const PostListProvider = ({ children }) => {
  const postReducer = (posts, action) => {
    let newPosts = posts;
    if (action.type === "CREATE_POST") {
      newPosts = [
        ...posts,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          reaction: action.payload.reaction,
          tags: action.payload.tags,
          userId: action.payload.userId,
        },
      ];
    } else if (action.type === "DELETE_POST") {
      newPosts = newPosts.filter((post) => post.id !== action.payload.id);
    }
    return newPosts;
  };

  let DEFAULT_POST = [
    {
      id: 1,
      title: "Going to Home",
      description: " cant express feeling, way to home not house",
      reaction: 2,
      tags: ["vacation", "HappyHome", "Peace"],
      userid: 2,
    },
    {
      id: 2,
      title: "got placed",
      description: "at the and sabar and hardwork will give you all you want",
      reaction: 100,
      tags: ["Success", "Sabar", "BelieveInAllah"],
      userId: 9,
    },
  ];
  const [posts, postDispatcher] = useReducer(postReducer, DEFAULT_POST);

  const createPost = (
    postId,
    postTitle,
    postDescription,
    postReaction,
    postTags,
    userId
  ) => {
    console.log(
      postId,
      postTitle,
      postDescription,
      postReaction,
      postTags,
      userId
    );
    const createPostAction = {
      type: "CREATE_POST",
      payload: {
        id: postId,
        title: postTitle,
        description: postDescription,
        reaction: postReaction,
        tags: postTags,
        userId: userId,
      },
    };
    postDispatcher(createPostAction);
  };

  const deletePost = (postId) => {
    console.log(postId);
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    };

    postDispatcher(deletePostAction);
  };
  return (
    <AllPostList.Provider
      value={{
        postList: posts,
        createNewPost: createPost,
        deletepost: deletePost,
      }}
    >
      {children}
    </AllPostList.Provider>
  );
};
