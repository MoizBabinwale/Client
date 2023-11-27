import React from "react";
// import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className=" border-2   flex flex-col">
      <h4 className="bg-[#fbf3d5] p-4 border-[#f1e5bc]">The Overflow Blog</h4>
      <div className=" flex flex-col ">
        <div className="items-center flex-row flex p-4 bg-[#fdf7e2]">
          <img src={pen} alt="pen" width="18" className="flex items-start justify-evenly" />
          <p className="pl-2">
            Observability is key to the future of software (and your DevOps career)
          </p>
        </div>

        <div className="items-center flex-row flex  p-4 bg-[#fdf7e2]">
          <img src={pen} alt="pen" width="18" className="items-start justify-evenly" />
          <p className="pl-2">Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4 className="bg-[#fbf3d5] p-4 border-[#f1e5bc]">Featured on Meta</h4>
      <div className=" flex-col flex  items-start">
        <div className="items-center flex-row flex  justify-between   p-4 bg-[#fdf7e2] ">
          <img src={comment} alt="pen" width="18" className=" flex items-start justify-evenly" />
          <p className="pl-2">Review queue workflows - Final release....</p>
        </div>
        <div className="items-center flex-row flex justify-between  p-4 bg-[#fdf7e2] ">
          <img src={comment} alt="pen" width="18" className=" flex items-start justify-evenly" />
          <p className="pl-2">
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="items-center flex-row flex  p-4 bg-[#fdf7e2]">
          <img src={blackLogo} alt="pen" width="18" className="  flex items-start justify-evenly" />
          <p className="pl-2">
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      {/* <h4>Hot Meta Posts</h4> */}
      {/* <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div> */}
    </div>
  );
};

export default Widget;
