import React from "react";
import Flickity from 'react-flickity-component';



function Post(props){
    return (
        <>
 <div className="post_container">
    <div className="post_top">
        <div className="user_profile">
            <div className="user_photo"><img src={props.imageSrc} alt="" /></div>
            <div className="user_name">{props.username}</div>
        </div>
   
    </div>
    <div className="post_main"><img src="./images/post.jpg" alt="pic" /></div>
    <div className="post_action">
        <div className="action_left">
        <i class="fa fa-heart"></i>
        <i class="fa fa-comments"></i>
        <i class="fa fa-share"></i>
        </div>
        <div className="bookmark">
	
        <i class="fa fa-bookmark"></i>
        </div>
    </div>
    <div className="like_details">{`${props.likes} likes`}</div>
    <div className='post_caption'>{props.username} <span>{props.caption}</span></div>
    <div className="post_comments">{`view all ${props.comment} comments`}</div>
    <div className="comment_here">
        <div className="my_comment_profile"><img src={props.imageSrc2} alt="" /></div>
        <input placeholder="Add a commment . . ." type="text" />
    </div>
    <div className="activeness">{`${props.active} hour ago`}</div>



    </div>


        </>
    )
}



export default Post;