import React, { useEffect } from "react";

// import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Home = ({ slideIn }) => {
  return (
    <div className="lg:flex lg:p-3  p-2 lg:justify-between max-w-[1250px] min-h-fit w-full m-auto">
      <LeftSidebar slideIn={slideIn} />
      <div className="md:gap-x-3 flex flex-col lg:block">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
