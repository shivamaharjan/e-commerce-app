import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CustomInput from "../../components/customInput/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAdminUser } from "../../redux/auth/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "Sam",
    required: true,
  },
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Smith",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    placeholder: "044****",
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "xyz@xyz.com",
    required: true,
  },
  {
    label: "Password*",
    name: "password",
    type: "password",
    placeholder: "*******",
    required: true,
    minLength: 6
  },
  {
    label: "Confirm Password *",
    name: "confirmPassword",
    type: "password",
    placeholder: "*******",
    required: true,
  },
];

function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    console.log(formData)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Pass did not match");
      return;
    }
    dispatch(createAdminUser(formData, navigate));
  };

  return (
    <div>
      <Header />
      <div className="main">
        <Form onSubmit={handleOnSubmit}className="form-color login-form mt-3 mb-3 border p-5 shadow-lg" >
          {inputs.map((input) => {
            return <CustomInput {...input} key={input.label}  onChange={handleOnChange}
            />;
          })}
          <Button variant="outline-success" type="submit" >Register</Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
