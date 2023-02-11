import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../redux/actions/Actions";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [loginValues, setLoginValues] = useState({ ...initialState });
  const [loginErrors, setLoginErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(loginErrors).length === 0 && isSubmit) {
      dispatch(setEmail(loginValues?.email));
      navigate("/home");
    }
  }, [loginErrors]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginValues(() => {
      return { ...loginValues, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(validate(loginValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!values?.email) {
      errors.email = "Please Enter Email!";
    } else if (!regex.test(values?.email)) {
      errors.email = "Enter Valid Email!";
    }
    if (!values?.password) {
      errors.password = "Please Enter Password!";
    }
    return errors;
  };
  return (
    <div className="container">
      <Container>
        <h1 className="loginCaption">Login</h1>
        <AccountContainer>
          <h3>Login With</h3>
          <div className="login-acc">
            <FaGithub className="acc-icon" />
            <AiFillGoogleCircle className="acc-icon" />
            <BsFacebook className="acc-icon" />
          </div>
        </AccountContainer>
        <LineDivider>
            <span>or</span>
        </LineDivider>
        <form onSubmit={handleSubmit}>
          <Feild>
            <div className="inputContainer">
              <ErrorIndicator>{loginErrors?.email}</ErrorIndicator>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
          </Feild>{" "}
          <Feild>
            <div className="inputContainer">
              <ErrorIndicator>{loginErrors?.password}</ErrorIndicator>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
          </Feild>
          <Feild>
            <div className="btn btn-primary" onClick={handleSubmit}>
              Login
            </div>
          </Feild>
        </form>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
  }
`;
const Feild = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  .inputContainer {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    padding: 0.5rem 1rem;
    border: solid 1px #000;
    width: min(40rem, 100%);
    height: 3rem;
    :focus {
      border: solid 1px blue;
    }
  }
`;
const AccountContainer = styled.div`
  width: 100%;
  h3 {
    text-align: center;
  }
  .login-acc {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .acc-icon {
    cursor: pointer;
    font-size: 3rem;
  }
`;

const ErrorIndicator = styled.div`
  position: absolute;
  width: max-content;
  left: 50%;
  top: -2rem;
  transform: translateX(-50%);
  color: red;
`;

const LineDivider= styled.div`
width: 100%;
height: 1rem;
margin: 1rem 0;
border-top: solid 1px #ccc;
position: relative;
span{
    position: absolute;
    left: 50%;
    top: -1rem;
    width: 6rem;
    height: 2rem;
    text-align: center;
    background: #fff;
    transform: translateX(-50%);
}
`
