import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

import "./sidebar-chat.css";
import db from "../../firebase";

const SidebarChat = ({ addNewChat, name }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar></Avatar>
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebar-chat" onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SidebarChat;
