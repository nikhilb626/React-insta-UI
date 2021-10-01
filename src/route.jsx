import React from "react";
import Home from "./home";
import Search from "./search";
import Favroute from "./favroute";
import Profile from "./profile";
import Chats from "./chat";
import {Switch,Route} from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion";



function Routing(){
    return (
        <>
        <AnimatePresence exitBeforeEnter>

    <Switch>
        <Route exact path="/" component={()=><Home/>} />
        <Route path="/search" component={()=><Search/>} />
        <Route path="/favroute" component={()=><Favroute/>} />
        <Route path="/profile" component={()=><Profile/>} />
        <Route  path="/chat" component={()=><Chats/>} />

    </Switch>

        </AnimatePresence>
        </>
    )
}



export default Routing;
