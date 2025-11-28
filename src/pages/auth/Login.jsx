import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./assets/login.css";

import UserService from "../../services/user-service";
import { AuthContext } from "../../contexts/AuthContext";
import InputForm from "../../components/InputForm";
import BtnForm from "../../components/BtnForm";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { addUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErros = {};

    if (!formData.email.trim()) {
      newErros.email = "El correo es requerido.";
    }

    if (!formData.password.trim()) {
      newErros.password = "La contraseña es requerida.";
    } else if (formData.password.length < 8) {
      newErros.password = "La contraseña tiene que tener al menos 8 caracteres";
    }

    return newErros;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginUser = async (data) => {
    const id = localStorage.getItem("id");
    const response = await UserService.loginUser({ ...data, id });
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const payload = {
        email: formData.email,
        password: formData.password,
      };
      const result = await loginUser(payload);
      if (result) {

        if (
          payload.password == result.password &&
          payload.email == result.email
        ) {
          addUser(result);
          setFormData({
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          alert("Las contraseñas o el correo son invalidos");
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-group">
          <h4>Inicia Sesión</h4>
          <form onSubmit={handleSubmit} className="form-register">
            <InputForm
              data={formData.email}
              error={errors.email}
              title="Correo"
              type="email"
              id="email"
              handleChange={handleChange}
            />
            <InputForm
              data={formData.password}
              error={errors.password}
              title="Contraseña"
              type="password"
              id="password"
              handleChange={handleChange}
            />

            <BtnForm name="Inicia Sesión" />
          </form>
          <div className="data-register">
            <p>Aun no tenes cuenta?</p>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
