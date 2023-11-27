import React from "react";
// import "./RightSidebar.css";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

const RightSidebar = () => {
  return (
    <aside className="lg:flex lg:flex-col flex flex-wrap w-[350px] ml-5">
      <Widget />
      <WidgetTags />
    </aside>
  );
};

export default RightSidebar;
