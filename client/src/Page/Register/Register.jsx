import { useState } from "react";

import useValidationErrors from "../../Hook/useValidationErrors";
import { AuthFrom, FormGroup } from "../../Components";

const Register = () => {
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
        title="Đăng Ký"
        linkTo="/login"
        linktext="Đăng nhập"
        btnText="Đăng ký"
        onSubmit={handleSubmit}
        questions="đã"
      >
        <FormGroup
          titleLabel="Tên người dùng"
          id="username"
          type="text"
          onChange={handleChange}
          textWarning="Nhập tên người dùng"
          warning={fieldWarnings.username}
        />
        <FormGroup
          titleLabel="Mật khẩu"
          id="password"
          type="password"
          onChange={handleChange}
          textWarning="Nhập mật khẩu"
          warning={fieldWarnings.password}
        />
      </AuthFrom>
    </div>
  );
};

export default Register;
