import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { RiDeleteBinLine } from "react-icons/ri";
import { AllPostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const context = useContext(AllPostList);
  console.log(context);
  const deletePostHandler = () => {
    context.deletepost(post.id);
  };
  return (
    <div className="card" style={{ width: "30rem", margin: "15px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={deletePostHandler}
          >
            <RiDeleteBinLine />
          </span>
        </h5>
        <p className="card-text">{post.description}</p>
        <span>
          <FcLike
            style={{
              fontSize: "25px",
              marginBottom: "5px",
              marginRight: "5px",
            }}
          />
          {post.reaction} <br></br>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary tag">{tag}</span>
          ))}
        </span>
        <br></br>
        <button type="button" className="btn btn-warning ">
          Like
        </button>
      </div>
    </div>
  );
};
export default Post;
