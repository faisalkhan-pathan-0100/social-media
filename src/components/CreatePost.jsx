import { useContext, useState } from "react";
import { AllPostList } from "../store/post-list-store";

const CreatePost = () => {
  const postContext = useContext(AllPostList);

  const [post, setPost] = useState({
    id: new Date(),
    title: "",
    body: "",
    reaction: "",
    tags: [],
    userId: "",
  });
  const postSubmitHandler = (e) => {
    e.preventDefault();
    console.log(post + "in hadner");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        body: post.body,
        reaction: post.reaction,
        tags: post.tags.split(" "),
        userId: post.userId,
      }),
    })
      .then((res) => res.json())
      .then((res) => postContext.createNewPost(post));
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
            onChange={(e) => setPost({ ...post, title: e.target.value })}
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
            onChange={(e) => setPost({ ...post, body: e.target.value })}
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
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
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
            onChange={(e) => setPost({ ...post, userId: e.target.value })}
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
            onChange={(e) => setPost({ ...post, reaction: e.target.value })}
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
