import "./Comment.scss";
import { CommentBlock } from "./CommentBlock";

function Comment() {

  return (
    <section className="comment">
      <div className="comment__inner">
        <div className="comment__title">
          OUR HAPPY CUSTOMERS
        </div>
        <div className="comment__btn__list">
          <button className="comment__arrow_back">
            <img src="/public/back.svg" alt="button__back" />
          </button>
          <button className="comment__arrow_next">
            <img src="/public/next.svg" alt="button__next" />
          </button>
        </div>
        <div className="comment__list">
          <CommentBlock name={"Sarah M."} stars={5} comment={`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`} />
          <CommentBlock name={"Sarah M."} stars={4} comment={`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`} />
          <CommentBlock name={"Sarah M."} stars={3} comment={`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`} />
          <CommentBlock name={"Sarah M."} stars={2} comment={`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`} />
          <CommentBlock name={"Sarah M."} stars={5} comment={`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`} />
        </div>
      </div>
    </section>
  );
}

export default Comment;