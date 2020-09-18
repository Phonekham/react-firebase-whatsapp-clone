import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./Sidebar.css";
import SidebarChat from "../Sidebar Chat/SidebarChat";

const Sidebar = () => {
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
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
