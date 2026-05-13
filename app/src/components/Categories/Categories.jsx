import React from 'react';
import './Categories.scss'; 
const Categories = () => {
  return (
    <section class="Categories">
      <div class="categories__inner">
        <h2 class="categories__title">BROWSE BY dress STYLE</h2>
        
        <div class="categories__list">
          <div class="categories__row">
            <div class="categories_list__item item--small">
              <img class="item__img" src="../../../../public/Casual.png" alt="" />
              <span class="item__title">Casual</span>
            </div>
            <div class="categories_list__item item--large">
              <img class="item__img" src="../../../../public/formal.png" alt="" />
              <span class="item__title">Formal</span>
            </div>
          </div>

          <div class="categories__row">
            <div class="categories_list__item item--large">
              <img class="item__img" src="../../../../public/Party.png" alt="" />
              <span class="item__title">Party</span>
            </div>
            <div class="categories_list__item item--small">
              <img class="item__img" src="../../../../public/Gym.png" alt="" />
              <span class="item__title">Gym</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Categories;
