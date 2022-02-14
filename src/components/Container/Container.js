import React from "react";
import TableView from "../table/Table";

const Container = ({ title, data, loading, error}) => {


    return (
        <div>
            <h1>{title}</h1>
            {data.map((item, index) => {
               return ( 
                <div key={index}> 
                       {item.data[0].value.date}
                       <TableView 
                        data={item.data[0].value.events}
                        title={title}
                       />   
                </div> )
                          
            })}

        </div>
    )
}

export default Container;