import React from 'react';
import notFount from "../../images/404NotFound.png"

const NotFound = () => {
    return (
        <div className="App bg-info py-5">
            <img style={{width:"30%"}} src={notFount} alt="" />
        </div>
    );
};

export default NotFound;