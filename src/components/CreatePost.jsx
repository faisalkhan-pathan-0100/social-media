import { useContext, useState } from "react";
import { AllPostList } from "../store/post-list-store";

const CreatePost = () => {
  const postContext = useContext(AllPostList);

  const [post, setPost] = useState({
    id: 10,
    title: "",
    description: "",
    reaction: "",
    tags: [],
    userId: "",
  });
  const postSubmitHandler = (e) => {
    e.preventDefault();
    postContext.createNewPost(
      post.id,
      post.title,
      post.description,
      post.reaction,
      post.tags,
      post.userId
    );
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
            onChange={(e) => setPost({ ...post, description: e.target.value })}
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
