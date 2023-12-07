import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProductTable from '../../components/product/ProductTable';

function Product() {
  return (
    <AdminLayout title={"Products"}>
      <div>
        {/* Add Product button */}
        <div className="text-end me-2">
          <Link to="/product/new">
            <Button variant="outline-success">Add Product</Button>
          </Link>
        </div>
        {/* Product Table */}
        <ProductTable />
      </div>
    </AdminLayout>
  );
}

export default Product