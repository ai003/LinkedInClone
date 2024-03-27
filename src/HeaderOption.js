import React from 'react'
import "./HeaderOption.css"
import { Avatar, IconButton } from '@mui/material'

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            <h3 className='headerOption_title'>{title}</h3>
            {avatar && (
                <Avatar className='headerOption_icon' src={avatar} />

            )}
        </div>
    )
}

export default HeaderOption
