import React from "react";
import Table from 'react-bootstrap/Table';

const Table = ({data}) => {
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Flight Number</th>
      <th>From</th>
      <th>Operator</th>
      <th>Status</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>
}

export default Table