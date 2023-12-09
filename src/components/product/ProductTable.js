import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductTable() {

  const {productList} = useSelector(state => state.product);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() =>{
    setDisplayList(productList)
  }, [productList])


  return (
    <div className="m-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Price (AUD)</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((product, i) => {
            return (
              <tr>
                <td> {i + 1}</td>
                <td>
                  <img src={product.thumbnail} alt="img" width={"80px"}></img>
                </td>
                <td>{product.status}</td>
                <td>{product.title}</td>
                <td>{product.slug}</td>
                <td>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link to="/product/edit">
                    <Button variant="outline-warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>

      </Table>
    </div>
  );
}

export default ProductTable