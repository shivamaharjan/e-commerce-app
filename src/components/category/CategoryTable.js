import React from 'react'
import { Table } from 'react-bootstrap';

function CategoryTable() {

  return (
    <div className="m-1">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default CategoryTable