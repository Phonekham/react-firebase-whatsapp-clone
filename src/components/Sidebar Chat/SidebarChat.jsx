import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

import "./sidebar-chat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter name");
    if (roomName) {
      //   do
    }
  };

  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar></Avatar>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}>Add New Chat</div>
  );
};

export default SidebarChat;
