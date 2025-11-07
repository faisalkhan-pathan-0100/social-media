import { useContext, useState } from "react";
import { FcLike } from "react-icons/fc";
import { RiDeleteBinLine } from "react-icons/ri";
import { AllPostList } from "../store/post-list-store";
import { BiLike, BiSolidLike } from "react-icons/bi";

const Post = ({ post }) => {
  // console.log(post);
  const context = useContext(AllPostList);
  const [like, setLike] = useState(false);
  let [reaction, setReaction] = useState(post.reaction);
  // console.log(reaction);

  const deletePostHandler = () => {
    context.deletepost(post.id);
  };

  const likeHandler = () => {
    if (like === false) {
      setLike(true);
      setReaction((prev) => prev + 1);
    } else if (like === true) {
      setLike(false);
      setReaction((prev) => prev - 1);
    }
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
        <p className="card-text">{post.body}</p>
        <span>
          {/* <FcLike
            style={{
              fontSize: "25px",
              marginBottom: "5px",
              marginRight: "5px",
            }}
          /> */}
          {like === true ? (
            <BiSolidLike
              style={{
                fontSize: "25px",
                marginBottom: "5px",
                marginRight: "5px",
                color: "red",
              }}
              onClick={likeHandler}
            />
          ) : (
            <BiLike
              style={{
                fontSize: "25px",
                marginBottom: "5px",
                marginRight: "5px",
              }}
              onClick={likeHandler}
            />
          )}
          {reaction} <br></br>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary tag p-2">{tag}</span>
          ))}
        </span>
        <br></br>
        <button
          type="button"
          className="btn btn-warning "
          onClick={likeHandler}
        >
          Like
        </button>
      </div>
    </div>
  );
};
export default Post;
