import { createContext, useReducer } from "react";
export const AllPostList = createContext({
  posts: [],
  createNewPost: () => {},
  deletepost: () => {},
  fetchAllPost: () => {},
});

export const PostListProvider = ({ children }) => {
  const postReducer = (posts, action) => {
    let newPosts = posts;
    if (action.type === "CREATE_POST") {
      newPosts = [
        ...posts,
        // {
        //   id: action.payload.id,
        //   title: action.payload.title,
        //   body: action.payload.body,
        //   reaction: action.payload.reaction,
        //   tags: action.payload.tags,
        //   userId: action.payload.userId,
        // },
        action.payload,
      ];
    } else if (action.type === "DELETE_POST") {
      newPosts = newPosts.filter((post) => post.id !== action.payload.id);
    } else if (action.type === "CREATE_ALL_POST") {
      newPosts = action.payload.posts;
    }
    return newPosts;
  };

  // let DEFAULT_POST = [
  //   {
  //     id: 1,
  //     title: "Going to Home",
  //     body: " cant express feeling, way to home not house",
  //     reaction: 2,
  //     tags: ["vacation", "HappyHome", "Peace"],
  //     userid: 2,
  //   },
  //   {
  //     id: 2,
  //     title: "got placed",
  //     body: "at the and sabar and hardwork will give you all you want",
  //     reaction: 100,
  //     tags: ["Success", "Sabar", "BelieveInAllah"],
  //     userId: 9,
  //   },
  // ];
  const [posts, postDispatcher] = useReducer(postReducer, []);

  // const createPost = (
  //   postId,
  //   postTitle,
  //   postbody,
  //   postReaction,
  //   postTags,
  //   userId
  // ) => {
  //   console.log(postId, postTitle, postbody, postReaction, postTags, userId);
  //   const createPostAction = {
  //     type: "CREATE_POST",
  //     payload: {
  //       id: postId,
  //       title: postTitle,
  //       body: postbody,
  //       reaction: postReaction,
  //       tags: postTags.split(" "),
  //       userId: userId,
  //     },
  //   };
  //   postDispatcher(createPostAction);
  // };

  const createPost = (post) => {
    // console.log(postId, postTitle, postbody, postReaction, postTags, userId);
    console.log(post);
    const createPostAction = {
      type: "CREATE_POST",
      payload: {
        post: post,
      },
    };
    postDispatcher(createPostAction);
  };

  const createAllPost = (posts) => {
    const createAllPostAction = {
      type: "CREATE_ALL_POST",
      payload: {
        posts: posts,
      },
    };
    postDispatcher(createAllPostAction);
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
        fetchAllPost: createAllPost,
      }}
    >
      {children}
    </AllPostList.Provider>
  );
};
