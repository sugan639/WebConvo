import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import './SidebarChat.css'

function SidebarChat({addNewChat}){

    const createChat = () =>{
        const roomName = prompt("Enter room name: ");
        if(roomName){
            //db add
        }
    };
   
    return !addNewChat? (
        <div className="sidebarChat">
        <Avatar src="https://api.dicebear.com/7.x/lorelei/svg"/>
            <div className="sidebarchat_info">
                <h2>Hello</h2>
                <p>Last Mesage...</p>
            </div>
        </div>
    ) :
    (
        <div onClick={createChat} className= "sidebarChat">
        <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;