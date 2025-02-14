import { useState } from "react"
import { Button, Form, Input } from "antd"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuthStatus } from "./redux/authSlice"


const Login = ({ auth }) => {
  const [apiStatus, setApiStatus] = useState("init");
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const onSubmitForm = async (loginInfo) => {
    setApiStatus("pending");
    const { succes } = await auth.loginUser(loginInfo);
    if (succes) {
      dispatch(updateAuthStatus(true));
      navigate("/home");
    }
    else setApiStatus("error")
  }


  return (
    <div className="form">
      <Form onFinish={onSubmitForm} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter valid email" },
            { required: true, message: "Please enter email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            {
              //   pattern: passwordRegexp,
              message: "Inavlid password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button
          loading={apiStatus === "pending"}
          htmlType="submit"
          type="primary"
          block
        >
          Login
        </Button>
      </Form>
      <p>
        Don't have an account ?{" "}
        <Link className="link" to="/signup">
          Signup here
        </Link>
      </p>
    </div>

  )

}

export default Login