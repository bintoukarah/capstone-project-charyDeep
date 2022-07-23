import React from "react";
import "../style/index.scss";
import UsersAvatar from "./UsersAvatar";

export default function Post() {
  return (
    <div className="post-wrapper">
      <div className="post-title">
        <UsersAvatar />
        <p>User Name</p>
      </div>
     
    </div>
  );
}
