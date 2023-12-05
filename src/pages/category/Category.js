import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Form } from 'react-bootstrap';
import NewCategory from '../../components/category/NewCategory';
import CategoryTable from '../../components/category/CategoryTable';

function Category() {
  return (
    <AdminLayout title={"Category"}>
      <div>
        <NewCategory />
        <CategoryTable/>
      </div>
    </AdminLayout>
  );
}

export default Category