import { useContext, useRef, useState } from "react";
import { AllPostList } from "../store/post-list-store";

const CreatePost = () => {
  const postContext = useContext(AllPostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const postSubmitHandler = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reaction: reactions,
        tags: tags,
        userId: userId,
      }),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((final) => {
        // console.log("final");
        console.log(final);
        postContext.createNewPost(final);
      });
    // setPost({
    //   post.id : "",
    //   post.title: "",
    //   description: "",
    //   reaction: "",
    //   tags: [],
    //   userId: "",
    // });
  };
  return (
    <div className="m-3">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            // onChange={(e) => setPost({ ...post, title: e.target.value })}
            ref={postTitleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            // onChange={(e) => setPost({ ...post, body: e.target.value })}
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Add HashTags
          </label>
          <input
            type="text"
            className="form-control"
            id="hashtags"
            // onChange={(e) => setPost({ ...post, tags: e.target.value })}
            ref={tagsElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            // onChange={(e) => setPost({ ...post, userId: e.target.value })}
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Recation
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            // onChange={(e) => setPost({ ...post, reaction: e.target.value })}
            ref={reactionsElement}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={postSubmitHandler}
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
