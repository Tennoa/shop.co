import "./Comment.scss";

function Comment() {
    return (
        <>
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
                        <div className="comment__components">
                        <div className="comment__cart">
                            <div className="cart__list">
                                <img src="/public/Star.svg" className="list__star" alt="star" />
                                <img src="/public/Star.svg" className="list__star" alt="star" />
                                <img src="/public/Star.svg" className="list__star" alt="star" />
                                <img src="/public/Star.svg" className="list__star" alt="star" />
                                <img src="/public/Star.svg" className="list__star" alt="star" />
                            </div>
                            <p className="cart__title">
                                <span className="title__text">Sarah M.</span>
                                <img className="title__star" src="/public/Vector (2).svg" alt="" />
                            </p>
                            <div className="cart__subtitle">
                                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </div>
                        </div>
                        </div>
                        <div className="comment__components">
                            <div className="comment__cart">
                                <div className="cart__list">
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                </div>
                                <p className="cart__title">
                                    <span className="title__text">Alex K.</span>
                                    <img src="/public/Vector (2).svg" alt="" />
                                </p>
                                <div className="cart__subtitle">
                                    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                                </div>
                            </div>
                        </div>
                        <div className="comment__components">
                            <div className="comment__cart">
                                <div className="cart__list">
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                    <img src="/public/Star.svg" className="list__star" alt="star" />
                                </div>
                                <p className="cart__title">
                                    <span className="title__text">James L.</span>
                                    <img src="/public/Vector (2).svg" alt="" />
                                </p>
                                <div className="cart__subtitle">
                                    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Comment;