import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userSchema } from "../../userSchema/userSchema";

const FillForm = () => {
  const emailValue = useSelector((state) => state.email);
  const onSubmit = (values, actions) => {
    console.log("submitted");
    alert("Form Submitted")
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        company: "Creative Code INC",
        username: "",
        email: emailValue,
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        country: "",
        postalcode: "",
        aboutme: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });
  return (
    <div className="container">
      <Container>
        <h1 className="loginCaption">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <FeildContainer>
            <Feild>
              <label className="label-feild">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={values?.company}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
                className={
                  errors?.company && touched.company ? "input-error" : ""
                }
                required
              />
            </Feild>
            <Feild>
              <label className="label-feild">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values?.username}
                onChange={handleChange}
                className={
                  errors?.username && touched.username ? "input-error" : "helo"
                }
                required
              />
            </Feild>
            <Feild>
              <label className="label-feild">Email Address</label>
              <input
                type="text"
                name="email"
                value={values?.email}
                disabled
                placeholder="Email"
                className={errors?.email && touched.email ? "input-error" : ""}
                // onChange={handleChange}
                required
              />
            </Feild>
          </FeildContainer>
          <FeildContainer>
            <Feild>
              <label className="label-feild">First Name</label>
              <input
                type="text"
                name="firstname"
                value={values?.firstname}
                placeholder="First Name"
                onChange={handleChange}
                className={
                  errors?.firstname && touched.firstname ? "input-error" : ""
                }
                required
              />
            </Feild>
            <Feild>
              <label className="label-feild">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={values?.lastname}
                placeholder="Last Name"
                onChange={handleChange}
                className={
                  errors?.lastname && touched.lastname ? "input-error" : ""
                }
                required
              />
            </Feild>
          </FeildContainer>
          <FeildContainer>
            <Feild>
              <label className="label-feild">Address</label>
              <input
                type="text"
                value={values?.address}
                name="address"
                placeholder="Address"
                onChange={handleChange}
                className={
                  errors?.address && touched.address ? "input-error" : ""
                }
                required
              />
            </Feild>
          </FeildContainer>
          <FeildContainer>
            <Feild>
              <label className="label-feild">City</label>
              <input
                type="text"
                name="city"
                value={values?.city}
                placeholder="City"
                onChange={handleChange}
                className={errors?.city && touched.city ? "input-error" : ""}
                required
              />
            </Feild>
            <Feild>
              <label className="label-feild">Country</label>
              <input
                type="text"
                name="country"
                value={values?.country}
                placeholder="Country"
                onChange={handleChange}
                className={
                  errors?.country && touched.country ? "input-error" : ""
                }
                required
              />
            </Feild>
            <Feild>
              <label className="label-feild">Postal Code</label>
              <input
                type="text"
                name="postalcode"
                value={values?.postalcode}
                placeholder="Postal Code"
                onChange={handleChange}
                className={
                  errors?.postalcode && touched.postalcode ? "input-error" : ""
                }
                required
              />
            </Feild>
          </FeildContainer>
          <FeildContainer>
            <Feild>
              <label className="label-feild">About Me</label>
              <textarea
                type="text"
                name="aboutme"
                rows="8"
                cols="50"
                value={values?.aboutme}
                placeholder="Here Can be your description..."
                onChange={handleChange}
                className={
                  errors?.aboutme && touched.aboutme ? "input-error" : ""
                }
                required
              />
            </Feild>
          </FeildContainer>
          <FeildContainer className="submit-button">
            <div className="btn btn-primary" onClick={handleSubmit}>Update Profile</div>
          </FeildContainer>{" "}
        </form>
      </Container>
    </div>
  );
};

export default FillForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
  }
  .submit-button{
    justify-content: flex-end;
    margin: 1rem 0;
  }
  @media (max-width: 800px) {
    .submit-button{
        justify-content: center;
        align-items: center;
    }
  }
`;

const FeildContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 0.8rem;
  }
`;
const Feild = styled.div`
  flex: 1 0 10rem;
  @media (max-width: 800px) {
    width: 100%;
    flex: 1 1 5rem;
  }
  .label-feild {
    display: block;
  }
  input {
    padding: 0.5rem 1rem;
    border: solid 1px #ccc;
    height: 3rem;
    width: 100%;
    :focus {
      border: solid 1px blue;
    }
  }
  .input-error {
    border: solid 1px red;
  }
  textarea {
    border: solid 1px #000;
    width: 100%;
    font-size: 1.5rem;
    :focus {
      border: solid 1px blue;
    }
  }
`;
