import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="lg:flex lg:p-3  gap-2 p-2 max-w-[1250px] min-h-fit w-full m-auto">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className=" w-[100%]" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
