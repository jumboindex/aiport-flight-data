import React from "react";
import Table from 'react-bootstrap/Table';

const TableView = ({data, title}) => {
    
    
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Flight Number</th>
                <th>{ title === 'Arrivals' ? 'Origin' : 'Destination'}</th>
                <th>Operator</th>
                <th>Status</th>
                <th>Time</th>
                </tr>
            </thead>
            <tbody>
            {data.map((flight, index) => {
                return (
                    <tr key={flight.code + index}>
                        <td>{flight.code}</td>
                        <td>{ title === 'Arrivals' ?  flight.from : flight.to}</td>
                        <td>{flight.operator}</td>
                        <td>{flight.status}</td> 
                        <td>{flight.time}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>)
}

export default TableView