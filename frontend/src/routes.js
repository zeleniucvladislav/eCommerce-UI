import React from "react";
import { Route } from "react-router-dom";
import ItemsList from "./components/itemsList";
import ItemsDetail from "./components/itemsDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ItemsList} />
    <Route path="/:itemID" component={ItemsDetail} />
  </div>
);

export default BaseRouter;
