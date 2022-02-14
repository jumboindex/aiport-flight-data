import React from "react";

const Container = ({ title, data, loading, error}) => {


    return (
        <div>
            <h1>{title}</h1>
            {data.map((item, index) => {
               return ( 
                <div key={index}> 
                       {item.data[0].value.date}   
                </div> )
                          
            })}

        </div>
    )
}

export default Container;