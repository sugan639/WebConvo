import React from "react";
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";

function Sidebar(){
    return(
        <div className="sidebar">
        
        <div className="sidebar_header">
        <Avatar/>   
        <div className="sidebar_headerRight">
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>
        
        <IconButton>
        <ChatIcon/>
        </IconButton>
        
        <IconButton>
        <MoreVertIcon/> 
        </IconButton>
        
        </div>
        </div>

        <div className="sidebar_search">
        <div className="sidebar_searchContainer">
        <SearchIcon/>
        <input className="searchbar_" placeholder="Start a new Chat" type='text'/>
        </div>
        </div>

        <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        </div>
        </div>
    );
}

export default Sidebar;