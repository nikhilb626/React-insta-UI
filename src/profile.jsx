import React, { Profiler } from "react";
import {AnimatePresence,motion} from "framer-motion";




const pageTransition={
    in:{opacity:1},
    out:{opacity:0}
}

function Profile(){
 


    return(
        <>
         <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

      <div className="chats_heading">

        <div className="userEdit">username <i class="fa fa-angle-down"></i></div>

      <div className="right_chatLogos">
      <i class="fa fa-plus"></i>
      <i class="fa fa-bars"></i>
      </div>  
    </div>

    
    <div className="profile_top">
        <div className="top_profile_photo">
            <div className="profiling"><img src="./images/profile3.jpg" alt="pic" /></div>
        </div>
        <div className="post_count">
            <div className="counting">10</div>
            <div className="naming">Posts</div>
        </div>
        <div className="following">
        <div className="counting">2345</div>
            <div className="naming">Following</div>
        </div>
        <div className="follower">
        <div className="counting">4125</div>
            <div className="naming">Followers</div>
        </div>
    </div>

    <div className="userName_under">username</div>
    <div className="userName_bio">full stack developer</div>

    <div className="profile_buttons">
        <div className="edit_profile">
            <button className="btn">Edit Profile</button>
        </div>
        <div className="promotions">
            <button className="btn">Promotions</button>
        </div>
        <div className="insights">
            <button className="btn">Insights</button>
        </div>
        
    </div>


    <div className="tabs_profile">
        <div className="box"><i class="fa fa-th"></i></div>
        <div className="tv"><i class="fa fa-play-circle"></i></div>
        <div className="pro"><i class="fa fa-user"></i></div>
    </div>


    <div className="box_content">
        <div className="content_rows">
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />

            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
        </div>

        <div className="content_rows">
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />

            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
        </div>



        <div className="content_rows">
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />

            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
        </div>


        <div className="content_rows">
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />

            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
            <div className="content_column"><img src="./images/mypost.jpg" alt="pic" />
                
            </div>
        </div>



    </div>



    </motion.div>

        </>
        )
}


export default Profile;