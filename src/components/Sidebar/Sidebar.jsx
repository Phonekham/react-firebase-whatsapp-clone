import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./Sidebar.css";
import SidebarChat from "../Sidebar Chat/SidebarChat";
import db from "../../firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  console.log(rooms);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__header-right">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <SpeakerNotesIcon></SpeakerNotesIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search-container">
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat></SidebarChat>
        {rooms &&
          rooms.map((room) => (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.data.name}
            ></SidebarChat>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
