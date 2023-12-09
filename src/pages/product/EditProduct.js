import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import AdminLayout from "../../components/layout/AdminLayout";
import { handleFileUpload } from "../../utils";
import slugify from "slugify";
import { addOrUpdateProductAction } from "../../redux/product/ProductAction";
import { ProgressBar } from "react-bootstrap";



function EditProduct() {
    const { slug } = useParams();

  const { categoryList } = useSelector((state) => state.category);
  const {productList} = useSelector(state => state.product)
  const [formData, setFormData] = useState({ status: "inactive" });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProduct = productList.find(
      (product) => product.slug === slug
    );
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      navigate("/product");
    }
  }, [productList]);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnImageAttached = (e) => {
    const { files } = e.target;
    const fileArr = [...files];
    setUploadedFiles(fileArr);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const promises = uploadedFiles.map((file) =>
      handleFileUpload(file, setProgress)
    );

    const urls = await Promise.all(promises);

    const slug = slugify(formData.title, {
      lower: true,
      trim: true,
    });

    const productObj = {
      ...formData,
      slug,
      images: urls,
      thumbnail: urls[0],
    };
    await dispatch(addOrUpdateProductAction(productObj));
    navigate("/product");
  };

  const productInputFields = [
    {
      label: "Product Name *",
      name: "title",
      type: "text",
      placeholder: "iPhone 6",
      required: true,
      value: formData?.title,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      value: formData?.slug,
      disabled: true,
    },
    {
      label: "SKU *",
      name: "sku",
      type: "text",
      placeholder: "IP_IDNI_5",
      required: true,
      value: formData?.sku,
      disabled: true,
    },
    {
      label: "Price *",
      name: "price",
      type: "number",
      placeholder: "1999",
      required: true,
      value: formData?.price,
    },
    {
      label: "Quantity *",
      name: "quantity",
      type: "number",
      placeholder: "10",
      required: true,
      value: formData?.quantity,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "1599",
      value: formData?.salesPrice,
    },
    {
      label: "Sales Start At",
      name: "salesStartAt",
      type: "date",
      value: formData?.salesStartAt,
    },
    {
      label: "Sales End At",
      name: "salesEndAt",
      type: "date",
      value: formData?.salesEndAt,
    },
    {
      label: "Product Description *",
      name: "description",
      type: "text",
      as: "textarea",
      row: 5,
      required: true,
      placeholder: "Product Desc...",
      value: formData?.description,
    },
  ];

  return (
    <div>
      <AdminLayout title="Edit Product">
        <Link to="/product">
          <Button variant="outline-success"> &lt; Go Back</Button>
        </Link>
        <Form
          onSubmit={handleOnSubmit}
          className="border p-3 mt-3 shadow rounded form-color"
        >
          <Form.Group className="mb-2 mt-1">
            <Form.Label>Select Category *</Form.Label>
            <Form.Select
              name="parentCategory"
              required
              onChange={handleOnChange}
            >
              <option>Select the category for the product</option>
              {categoryList.map((cat) => {
                return (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2 mt-1">
            <Form.Check
              type="switch"
              label="Status"
              name="status"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            {productInputFields.map((input) => {
              return (
                <CustomInput
                  onChange={handleOnChange}
                  key={input.label}
                  {...input}
                />
              );
            })}
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              onChange={handleOnImageAttached}
              accept="image/png, image/jpeg, image/webp, image/avif"
              type="file"
              name="images"
              multiple
            />
            <ProgressBar animated now={progress} label={`${progress}%`} />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="m-4" variant="outline-success" type="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </AdminLayout>
    </div>
  );
}

export default EditProduct;
