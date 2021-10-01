import React from "react";
import {AnimatePresence,motion} from "framer-motion";



const pageTransition={
    in:{opacity:1},
    out:{opacity:0}
}

function Chats(){
    return(
        <>
         <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

    <div className="chats_heading">
    <div className="leftArrow"><i class="fa fa-arrow-left"></i></div>
        <div className="userEdit">username <i class="fa fa-angle-down"></i></div>

      <div className="right_chatLogos">
      <i class="fa fa-list"></i>
      </div>  
    </div>


    <div className="search_container_chat">
    <i class="fa fa-search"></i> 
    <input type="text" placeholder="Search" id="search_chat"/>
    	
     <i class="fa fa-filter"></i>
    </div>


    <div className="chat_container">
        
        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username704</div>
            <div className="timing">active 10m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>

        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username24</div>
            <div className="timing">sent 23m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>

        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username12</div>
            <div className="timing">active 3h ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username52</div>
            <div className="timing">active 1 day ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 10m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username53</div>
            <div className="timing">sent 50m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


        <div className="chating_box">
        <div className="chat_user">
            <div className="inner_chat_profile"><img src="./images/profile2.png" alt="pic" /></div>
        </div>
        <div className="main_chat">
            <div className="userName_second">username</div>
            <div className="timing">sent 34m ago</div>
        </div>
        <div className="chat_camera">
        <i class="fa fa-camera"></i>
        </div>
        </div>


    </div>

 </motion.div>
        </>
    )
}


export default Chats;