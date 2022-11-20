import React from 'react';
import Typed from 'react-typed';


function AnimateText(props){
    return(
        <div className="sm:text-2xl text-lg text-fuchsia-500  text-semibold pb-3 ">
                    <Typed
                        strings={props.text}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                </div>
    )
}
export default AnimateText