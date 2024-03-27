import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import myPicture from "./headshotPicture.png"

function Header() {
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                    alt="" />

                <div className="header_search">
                    < SearchIcon />
                    <input type="text" />

                </div>

            </div>

            <div className="header_right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar={myPicture} title="me" />


            </div>



        </div>
    )
}

export default Header
