
import React from "react";
import './Preloader.css';

const Preloader = ()=>{
    return(<div className={`SpinningPreloader_comp`}>
        
        <div className={`Loading`}>
            <div className={`circle`}></div>
        </div>

    </div>)
};

export default Preloader;