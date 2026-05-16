import "./Comment.scss";

export const CommentBlock = ({ name, stars, comment }) => {
  return (
    <div className="comment__components">
      <div className="comment__cart">
        <div className="cart__list">
          {Array.from({ length: stars }).map((_, index) => (
            <img key={index} src="/public/Star.svg" className="list__star" alt="star" />
          ))}
        </div>
        <p className="cart__title">
          <img src="/public/Vector (2).svg" alt="" />
          <span className="title__text">{name}</span>
        </p>
        <div className="cart__subtitle">
          "{comment}”
        </div>
      </div>
    </div>
  );
};