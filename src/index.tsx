import React from "react";
import ReactDOM from "react-dom";
import { SnapshotOrInstance, onSnapshot, getSnapshot } from "mobx-state-tree";

import App from "./components/App";
import { Wishlist, TWishlist } from "./models/Wishlist";
import * as serviceWorker from "./serviceWorker";

let initialState: SnapshotOrInstance<TWishlist> = {
  items: [
    {
      name: "Lego City",
      price: 349.99,
      image:
        "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/351534-lego-city-mars-research-shuttle-2.jpg"
    },
    {
      name: "Yamaha RGX420",
      price: 850.0,
      image:
        "https://images.equipboard.com/uploads/item/image/17588/yamaha-rgx-420-dzii-sb-satin-black-xl.jpg"
    }
  ]
};

let wishlist = Wishlist.create(initialState);

onSnapshot(wishlist, snapshot => {
  localStorage.setItem("wishlist", JSON.stringify(snapshot));
});

const savedState = localStorage.getItem("wishlist");
if (savedState) {
  const savedStateJson = JSON.parse(savedState);
  initialState = Wishlist.is(savedStateJson) ? savedStateJson : initialState;
}

const renderApp = () =>
  ReactDOM.render(<App wishlist={wishlist} />, document.getElementById("root"));

renderApp();

if (module.hot) {
  module.hot.accept("./components/App", () => {
    renderApp();
  });

  module.hot.accept("./models/Wishlist", () => {
    const snapshot = getSnapshot(wishlist);
    wishlist = Wishlist.create(snapshot);
    renderApp();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
