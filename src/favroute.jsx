import React from "react";
import {AnimatePresence,motion} from "framer-motion";



const pageTransition={
    in:{opacity:1},
    out:{opacity:0}
}

function Favroute(){
    return(
      <>
       <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

    <div className="activity_heading">
    Activity
    </div>
    <div className="activities">
        <div className="activity_time">This month</div>
      
        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>



        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>


        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>

        
        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>



        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>



        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>



        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>



        <div className="activity">
        <div className="user_pic">
            <div className="user_pic_inner"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="main_activity"><p>

            <span>username</span> mentioned you in a comment:self User 
        </p>
        </div>
        <div className="activity_post">
            <div className="post_inner"><img src="./images/mypost.jpg" alt="pic" /></div>
        </div>
        </div>






        
    </div>

    </motion.div>
      </>
    )
}


export default Favroute;