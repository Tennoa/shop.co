import "./TopBar.scss";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="TopBar__inner">
        <p className="TopBar__text">
          Sign up and get 20% off to your first order.{" "}
          <a className="TopBar__link" href="#">
            Sign Up Now
          </a>
        </p>
        <button className="TopBar__button" aria-label="Close">
          x
        </button>
      </div>
    </div>
  );
}

export default TopBar;
