import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useValidationErrors from "../../Hook/useValidationErrors";
import { AuthFrom, FormGroup } from "../../Components";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [fieldWarnings, setFieldWarnings] = useState({});
  const { validationErrors, isEmpty } = useValidationErrors(credentials);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setFieldWarnings((prev) => ({ ...prev, [e.target.id]: false }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) {
      setFieldWarnings(validationErrors);
    } else {
      console.log(credentials);
    }
  };
  return (
    <div>
      <AuthFrom
        title="Đăng Nhập"
        linkTo="/register"
        linktext="Đăng ký"
        btnText="Đăng nhập"
        onSubmit={handleSubmit}
        questions="chưa"
      >
        <FormGroup
          titleLabel="Tên đăng nhập"
          onChange={handleChange}
          id="username"
          type="text"
          textWarning="Nhập tên đăng nhập"
          warning={fieldWarnings.username}
        />
        <FormGroup
          titleLabel="Mật khẩu"
          onChange={handleChange}
          id="password"
          type="password"
          textWarning="Nhập mật khẩu"
          warning={fieldWarnings.password}
        />
      </AuthFrom>
    </div>
  );
};

export default Login;
