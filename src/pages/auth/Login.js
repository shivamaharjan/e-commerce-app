import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CustomInput from "../../components/customInput/CustomInput";
import { loginAdminUser } from "../../redux/auth/userAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const inputs = [
  {
    label: "Email *",
    name: "email",
    type: "text",
    placeholder: "xyz@abc.com",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "******",
    required: true,
  },
];

function Login() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminUser(formData));
  };

  return (
    <div>
      <Header />
      <div className="main">
        <Form
          onSubmit={handleOnSubmit}
          className=" form-color login-form mt-3 mb-3 border p-5 shadow-lg "
        >
          {inputs.map((input) => {
            return (
              <CustomInput
                onChange={handleOnChange}
                {...input}
                key={input.label}
              />
            );
          })}
          <Button variant="outline-success" type="submit">
            Login
          </Button>
          <div className="mt-2">
            Forget Password? <Link to="/forget-password">Click here</Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
