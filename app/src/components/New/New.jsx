import "./New.scss";

function New() {
    return (
        <section className="New">
            <div className="New__inner">
                <div className="New__title">
                    NEW ARRIVALS
                </div>
                <div className="New__list">
                    <div className="list__item">
                        <img src="/public/Frame 32.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            T-SHIRT WITH TAPE DETAILS
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                4.5/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $120  
                                </div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 33.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            SKINNY FIT JEANS
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                3.5/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $240  
                                </div>
                                <div className="item__pay item__pay--old">
                                    $260
                                </div>
                                <div className="sale">-20%</div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 34.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            CHECKERED SHIRT
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                4.5/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $180  
                                </div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 38.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            SLEEVE STRIPED T-SHIRT
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                4.5/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $130  
                                </div>
                                <div className="item__pay item__pay--old">
                                    $160
                                </div>
                                <div className="sale">-30%</div>
                            </div>
                    </div>
                </div>
                
                <button className="New__btn">
                    View All
                </button>
            </div>
        </section>
    )
}
export default New;
