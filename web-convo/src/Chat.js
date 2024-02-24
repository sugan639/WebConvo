import React from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton}  from '@mui/material';
import { AttachFile, SearchOutlined } from '@mui/icons-material';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar/>
        <div className='chat_headerInfo'>
            <h3>Room Name</h3>
            <p>Last seen</p>
        </div>

        <div className='chat_headerRight'>
        <IconButton>
        <SearchOutlined/>
        </IconButton>

        <IconButton>
        <AttachFile/>
        </IconButton>
        
        
        <IconButton>
        <MoreVertIcon/> 
        </IconButton>

        </div>


        </div>
        <div className='chat_body'>
            
        </div>

        <div className='chat_footer'>
            
        </div>

    </div>
  )
}

export default Chat;