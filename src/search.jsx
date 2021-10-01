import React from "react";
import {AnimatePresence,motion} from "framer-motion";


const pageTransition={
    in:{opacity:1},
    out:{opacity:0}
}


function Search(){
    return(<>
     <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

    <div className="search_container">
    <i class="fa fa-search"></i> 
    <input type="text" placeholder="Search" id="search"/>
    </div>


    <div className="suggestion">
        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>

        <div className="row">
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
            <div className="column"><img src="./images/search.png" alt="pic" /></div>
        </div>



    </div>
    
    </motion.div>
    </>
    )
}


export default Search;