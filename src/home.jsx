import React from "react";
import {NavLink} from "react-router-dom";
import Flickity from 'react-flickity-component';
import Post from "./postStructure";
import Pdata from "./postData";
import {AnimatePresence,motion} from "framer-motion";




const flickityOptions = {
    initialIndex: 1,
    freeScroll: true,
    contain: true,
prevNextButtons: false,
pageDots: false,
groupCells: true

}


const pageTransition={
    in:{opacity:1},
    out:{opacity:0}
}

function Home(){
    return(
        <>
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

            <div className="home_heading">
        <div className="heading_logo">Instagram</div>

        <div className="addSign"><i class="fa fa-plus"></i></div>
        <div className="chatSign">
        <NavLink to="/chat"  activeClassName="active_class" className="links" id="chatting"><i class="fa fa-comment"></i></NavLink>
        </div>


    </div>

    {/* stories */}
    <div className='stories'>

    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="carousel-cell" id="user_story">	
<i class="fa fa-plus-circle"></i></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>
      <div className="carousel-cell"><img src="./images/profile2.png" alt="pic" /></div>

    </Flickity>

    </div>


{/* ...........posts */}
<div className="posts_container">

{Pdata.map((val)=>{
 return (<Post
 imageSrc={val.imageSrc}
 username={val.username}
 likes={val.likes} 
 caption={val.caption}
 comment={val.comment}
 imageSrc2={val.imageSrc2}
 active={val.active}    
 />)
})} 

</div>
</motion.div>

 </>
    )
}


export default Home;