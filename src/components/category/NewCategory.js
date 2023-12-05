import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function NewCategory() {

    const [categoryData, setCategoryData] = useState({
        status: "inactive"
    });

    const handleOnChange = (e) => {
       let {name,value, checked} = e.target;
       if (name === "status") {
         value = checked ? "active" : "inactive";
       }
       setCategoryData({
        ...categoryData, [name]: value
       })
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        


    };
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="border pt-3 pb-3 ps-1 pe-2 ms-1 me-1 shadow-lg rounded-3 form-color"
      >
        <Row>
          <Col md="2">
            <Form.Group>
              <Form.Check
                type="switch"
                label="status"
                name="status"
                onChange={handleOnChange}
                checked={categoryData?.status === "active" ? true : false}
              ></Form.Check>
            </Form.Group>
          </Col>
          <Col md="7">
            <Form.Group>
              <Form.Control
                placeholder="Category Name"
                required
                name="name"
                type="text"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="3">
            <Button type="submit" variant="outline-success">
              Add Category
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NewCategory