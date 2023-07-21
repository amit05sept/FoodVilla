import React from "react";
import ReactDOM from "react-dom/client";

/*
 * header
      -logo
      -nav list(right side)
   body
      - search bar
      - restaurant List
          - restaurantCard
                - image
                - name
                - rating
                - cousines
   footer
      -links
      - copyright

 * */

const NameFoodVilla = () => (
  <h1 id="h1" key="1">
    FOOD_VILLA
  </h1>
);

const HeaderComponent = () => {
  return (
    // prettier-ignore
    <div className="header">
      <NameFoodVilla/>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>SUPPORT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
