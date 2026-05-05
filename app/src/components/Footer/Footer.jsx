import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__newsletter">
          <h5 className="newsletter__title">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h5>
          <div className="newletter__list">
            <img src="/Vector22.svg" alt="" className="newletter__img" />
            <input
              className="newletter__input"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="newletter__button">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <div className="footer__list">
          <div className="footer_list__inner">
            <div className="list__logo">
              <img
                className="logo__title"
                src="./app/src/assets/svg/SHOP.CO.svg"
                alt=""
              />
              <p className="logo__subtitle">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="logo__messenger">
                <img src="/1.svg" alt="logo" className="network" />
                <img src="/2.svg" alt="logo" className="network" />
                <img src="/3.svg" alt="logo" className="network" />
                <img src="/4.svg" alt="logo" className="network" />
              </div>
            </div>
            <div className="list__colums">
              <h6 className="list__title">COMPANY</h6>
              <a className="list__subtitle">About</a>
              <a className="list__subtitle">Features</a>
              <a className="list__subtitle">Works</a>
              <a className="list__subtitle">Career</a>
            </div>
            <div className="list__colums">
              <h6 className="list__title">HELP</h6>
              <a className="list__subtitle">Customer Support</a>
              <a className="list__subtitle">Delivery Details</a>
              <a className="list__subtitle">Terms & Conditions</a>
              <a className="list__subtitle">Privacy Policy</a>
            </div>
            <div className="list__colums">
              <h6 className="list__title">FAQ</h6>
              <a className="list__subtitle">Account</a>
              <a className="list__subtitle">Manage Deliveries</a>
              <a className="list__subtitle">Orders</a>
              <a className="list__subtitle">Payments</a>
            </div>
            <div className="list__colums">
              <h6 className="list__title">RESOURCES</h6>
              <a className="list__subtitle">Developement Tutorial</a>
              <a className="list__subtitle">Free eBooks</a>
              <a className="list__subtitle">How to - Blog</a>
              <a className="list__subtitle">Youtube Playlist</a>
            </div>
          </div>
          <div className="footer__cart">
            <span className="cart__rights">
              Shop.co © 2000-2021, All rights reserved
            </span>
            <div className="cart__group">
              <img src="/Badge-5.png" alt="cart" className="cart__img" />
              <img src="/Badge-1.png" alt="cart" className="cart__img" />
              <img src="/Badge-2.png" alt="cart" className="cart__img" />
              <img src="/Badge-3.png" alt="cart" className="cart__img" />
              <img src="/Badge-4.png" alt="cart" className="cart__img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;