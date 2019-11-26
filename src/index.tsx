import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { WishList } from "./models/WishList";
import * as serviceWorker from "./serviceWorker";

const wishlist = WishList.create({
  items: [
    {
      id: "lego",
      name: "Lego City",
      price: 349.99,
      image:
        "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/351534-lego-city-mars-research-shuttle-2.jpg"
    },
    {
      id: "guitar",
      name: "Yamaha RGX420",
      price: 850.0,
      image:
        "https://images.equipboard.com/uploads/item/image/17588/yamaha-rgx-420-dzii-sb-satin-black-xl.jpg"
    }
  ]
});

ReactDOM.render(<App wishlist={wishlist} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
