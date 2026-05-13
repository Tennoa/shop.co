import "./Top.scss";

function Top() {
    return (
        <section className="Top">
            <div className="Top__inner">
                <div className="Top__title">
                    top selling
                </div>
                <div className="Top__list">
                    <div className="list__item">
                        <img src="/public/Frame 30.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            VERTICAL STRIPED SHIRT
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                5.0/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $212  
                                </div>
                                <div className="item__pay item__pay--old">
                                    $232
                                </div>
                                <div className="sale">-20%</div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 29.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            SKINNY FIT JEANS
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                4.0/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $145  
                                </div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 28.png" alt="SLEEVE STRIPED T-SHIRT" />
                        <div className="item__title">
                            CHECKERED SHIRT
                        </div>
                        <div className="item__stars">
                            <div className="stars__fill">
                                <span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">★</span><span className="stars__fill">☆</span><span className="stars__fill">☆</span>
                            </div>
                            <div className="stars__text">
                                3.0/5
                            </div>
                        </div>
                            <div className="list__pay">
                                <div className="item__pay item__pay--sale">
                                    $80  
                                </div>
                            </div>
                    </div>
                    <div className="list__item">
                        <img src="/public/Frame 27.png" alt="SLEEVE STRIPED T-SHIRT" />
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
                                    $210  
                                </div>
                            </div>
                    </div>
                </div>
                
                <button className="Top__btn">
                    View All
                </button>
            </div>
        </section>
    )
}
export default  Top;
