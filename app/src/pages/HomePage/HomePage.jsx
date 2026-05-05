import "./HomePage.scss";
import TopBar from "../../components/TopBar/TopBar";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";


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
            src="./Vector.svg"
            alt="star"
            className="hero__svg hero__svg_left"
          />
          <img
            src="./Vector.svg"
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
            <div className="text__statistics">
              <div className="statistics__brands">
                <h2 className="statistics__title">200+</h2>
                <p className="statistics__subtitle">International Brands</p>
              </div>
              <div className="statistics__products">
                <h2 className="statistics__title">2000+</h2>
                <p className="statistics__subtitle">High-Quality Products</p>
              </div>
              <div className="statistics__customers">
                <h2 className="statistics__title">30,000+</h2>
                <p className="statistics__subtitle">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__inner">
          <img className="section__img" src="/Group.png" alt="" />
          <img className="section__img" src="/Group-4.png" alt="" />
          <img className="section__img" src="/Group-2.png" alt="" />
          <img className="section__img" src="/Group-3.png" alt="" />
          <img className="section__img" src="/Group-1.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
    
  );
}

export default HomePage;
