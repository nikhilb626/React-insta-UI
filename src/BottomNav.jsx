import React from "react";
import {NavLink}  from "react-router-dom";

function BottomNav(){
    return (
        <>
    <div className="bottomNav">
        <NavLink exact to="/"  activeClassName="active_class" className="links"><i class="fa fa-home"></i></NavLink>
        <NavLink to="/search"  activeClassName="active_class" className="links"><i class="fa fa-search"></i></NavLink>
        <NavLink to="/favroute"  activeClassName="active_class" className="links"><i class="fa fa-heart"></i></NavLink>
        <NavLink to="/profile"  activeClassName="active_class" className="links"><i class="fa fa-user"></i></NavLink>

    </div>

        </>
    )
}


export default BottomNav;