import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./sidebar-chat.css";
import db from "../../firebase";

const SidebarChat = ({ addNewChat, name, id }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("Please enter name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat">
        <Avatar></Avatar>
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebar-chat" onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SidebarChat;
