import React from 'react';
import '../../styles/Header.css';
import GDriveLogo from "../../media/drive-logo.png"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps'
const index=({userPhoto})=> {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={GDriveLogo} alt=""></img>
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
               
               <div className='header__searchBar'>
                    <SearchIcon/>
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMoreIcon/>
                </div> 
            </div>
            <div className='header__icons'>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="User Photo"/>
            </div>
        </div>
    )
}

export default index
