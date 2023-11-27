import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="flex flex-col border-[#f1e5bc] border-2  bg-[#fdf7e2] p-4">
      <h4 className="text-lg font-bold mb-2">Watched tags</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center">
            <span className=" font-bold mr-1">•</span>
            <p className="">{tag}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default WidgetTags;
