import "./Nav.scss";

function Nav() {
  return (
<nav className="nav">
  <div className="nav__inner">
    <img
      src="./app/src/assets/svg/SHOP.CO.svg"
      alt=""
      className="nav_logo"
    />
    <div className="nav__list">
      <a href="#" className="list__item">
        Shop
      </a>
      <a href="#" className="list__item">
        On Sale
      </a>
      <a href="#" className="list__item">
        New Arrivals
      </a>
      <a href="#" className="list__item">
        Brands
      </a>
    </div>
    <div className="nav__search">
      <svg
        className="nav__search-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="search"
        placeholder="Search for products..."
        className="nav__search-input"
      />
    </div>
    <div className="nav__icons">
      <button className="nav__icon" aria-label="Shopping cart">
        <img src="./app/src/assets/svg/Vector2.svg" alt="" />
      </button>
      <button className="nav__icon" aria-label="Account">
        <img src="./app/src/assets/svg/Vector.svg" alt="" />
      </button>
    </div>
  </div>
</nav>)
}
export default Nav;