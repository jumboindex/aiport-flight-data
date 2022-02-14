import React from "react";
import TableView from "../table/Table";
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import './container.css'

const Container = ({ title, data, loading, error}) => {

    if (loading) {
        return ( 
        <section>
            <Badge className="badge" bg="secondary"><h1>Gibraltar (GIB) {title}</h1></Badge>
            <div className="loader">  
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div> 
        </section>       
        )
    }

    if (error) {
        return (
            <Alert variant='warning'>
                Error loading flight data 
            </Alert>
        )
    }

   return (
        <section>
            <Badge className="badge" bg="secondary"><h1>Gibraltar (GIB) {title}</h1></Badge>  
            {data.map((item, index) => {
               return ( 
                <div key={index}> 
                    <Accordion defaultActiveKey={['0']} alwaysOpen flush >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{item.data[0].value.date}</Accordion.Header>
                                <Accordion.Body>
                                    <TableView 
                                        data={item.data[0].value.events}
                                        title={title}
                                    />
                                </Accordion.Body>
                        </Accordion.Item>           
                    </Accordion>          
                </div> )                 
            })}
        </section>
    ) 
}

export default Container;