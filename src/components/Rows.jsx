import React from 'react'
import "./Rows.css"
import Proptypes from "prop-types";
 const MiddleRow = ({logo , first_row_text , square,circle,second_row_text}) => {
    return (

            <div className="container"> 
            
                <div className={`${circle} ${square}`}>
                    <a href="#" /* target="_blank" */ /* className={squer} */>

                    <img src={logo} alt="" className="img"/> 
                        <div className="text">
                            {second_row_text}
                         </div>
                    </a>

            </div>

            <div className="text">
                {first_row_text}
            </div>
            </div>

    )
}
MiddleRow.prototype={
    first_row_text: Proptypes.string,
    second_row_text: Proptypes.string
}

export default MiddleRow;