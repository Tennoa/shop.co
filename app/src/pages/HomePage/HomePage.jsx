import "./HomePage.scss";
import Section from "../../components/Section/Section.jsx";
import TopBar from "../../components/TopBar/TopBar";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer.jsx";


function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <TopBar />
          <Nav />
        </div>
      </header>
      <div className="main">
        <div className="main__inner">
          <img
            src="./app/src/assets/svg/Vector.svg"
            alt="star"
            className="hero__svg hero__svg_left"
          />
          <img
            src="./app/src/assets/svg/Vector.svg"
            alt="star"
            className="hero__svg hero__svg_right"
          />
          <div className="main__text">
            <h1 className="text__title">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text__subtitle">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="text__button">Shop Now</button>
            <div className="statistics__container">
              <div className="statistics__item statistics__item--border">
                <h2 className="counter">200+</h2>
                <p className="label">International Brands</p>
              </div>
              <div className="statistics__item">
                <h2 className="counter">2,000+</h2>
                <p className="label">High-Quality Products</p>
              </div>
              <div className="statistics__item">
                <h2 className="counter">30,000+</h2>
                <p className="label">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section/>
      <Footer />
    </>
  );
}

export default HomePage;
