import React from "react";
import Avatar from '@mui/material/Avatar';
import './SidebarChat.css'

function SidebarChat(){
    return (
        <div className="sidebarChat">
        <Avatar src="https://api.dicebear.com/7.x/lorelei/svg"/>
            <div className="sidebarchat_info">
                <h2>Hello</h2>
                <p>Last Mesage...</p>
            </div>
        </div>
    );
}

export default SidebarChat;