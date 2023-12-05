import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { resetPasswordAction } from "../../redux/auth/userAction";

const inputs = [
  {
    label: "Email *",
    name: "email",
    type: "text",
    placeholder: "xyz@abc.com",
    required: true,
  },
];

function ForgetPassword() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email } = formData;
    dispatch(resetPasswordAction(email));
  };
  return (
    <div>
      <Header />
      <div className="main p-5">
        <Form
          onSubmit={handleOnSubmit}
          className="form-color login-form mt-3 mb-3 border p-5 shadow-lg rounded"
        >
          {inputs.map((input) => {
            return <CustomInput {...input} onChange={handleOnChange} />;
          })}
          <div className="d-flex justify-content-end">
            <Button
              className="mt-2 ml-auto"
              variant="outline-success"
              type="submit"
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
