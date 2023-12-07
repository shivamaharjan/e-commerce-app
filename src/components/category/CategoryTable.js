import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateCategoryAction, deleteCategoryAction } from "../../redux/category/categoryAction";
import { toast } from "react-toastify";

function CategoryTable() {
  const [catToUpdate, setCatToUpdate] = useState({});
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const hanldleEdit = (cat) => {
    setCatToUpdate(cat);
  };
const handleOnChange = (e) => {
    let {name,value,checked} = e.target;
    if (name === "status"){
        value = checked ? "active" : "inactive"
    }
    setCatToUpdate({...catToUpdate, [name]: value})
    console.log(catToUpdate)

}

const handleUpdate = () => {
    dispatch(addOrUpdateCategoryAction(catToUpdate))
   
    setCatToUpdate({})
}

const handleDelete = () => {
  if (window.confirm("Do you want to delete?")) {
    dispatch(deleteCategoryAction(catToUpdate.slug));
  } else {
    setCatToUpdate({})
  }
};


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
        <tbody>
          {categoryList.map((cat, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>
                  {cat.slug === catToUpdate?.slug ? (
                    <Form.Group>
                      <Form.Check
                        type="switch"
                        label={catToUpdate?.status}
                        name="status"
                        onChange={handleOnChange}
                        checked={
                          catToUpdate?.status === "active" ? true : false
                        }
                      ></Form.Check>
                    </Form.Group>
                  ) : (
                    <span className={`${cat.status}-status`}>{cat.status}</span>
                  )}
                </td>
                <td>
                  {cat.slug === catToUpdate?.slug ? (
                    <Form.Group>
                      <Form.Control
                        onChange={handleOnChange}
                        placeholder="Name"
                        required
                        name="name"
                        type="text"
                        value={catToUpdate.name}
                      />
                    </Form.Group>
                  ) : (
                    <>{cat.name}</>
                  )}
                </td>
                <td>{cat.slug}</td>
                <td>
                  {cat.slug === catToUpdate?.slug ? (
                    <>
                      <Button
                        variant="outline-success"
                        onClick={() => handleUpdate(cat)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(cat)}
                      >
                        Delete
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline-warning"
                      onClick={() => hanldleEdit(cat)}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CategoryTable;
