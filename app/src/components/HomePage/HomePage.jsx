import "./HomePage.scss";
import Section from "../Section/Section.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import Nav from "../Nav/Nav.jsx";
import New from "../New/New.jsx";
import Top from "../Top/Top.jsx";
import Categories from "../Categories/Categories.jsx";
import Comment from "../Comment/Comment.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx"

function HomePage() {
  return (
    <>
      <TopBar />
      <Nav />
      <Main />
      <Section />
      <New />
      <Top />
      <Categories />
      <Comment />
      <Footer />
    </>
  );
}

export default HomePage;
