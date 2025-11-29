import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./assets/register.css";
import UserService from "../../services/user-service";
import { AuthContext } from "../../contexts/AuthContext";
import InputForm from "../../components/InputForm";
import BtnForm from "../../components/BtnForm";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordVerify: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { addUser } = useContext(AuthContext);

  const validateForm = () => {
    const newErros = {};
    if (!formData.name.trim()) {
      newErros.name = "El nombre es requerido.";
    } else if (formData.name.length < 4) {
      newErros.name = "El nombre tiene que tener al menos 4 caracteres";
    }

    if (!formData.email.trim()) {
      newErros.email = "El correo es requerido.";
    }

    if (!formData.password.trim()) {
      newErros.password = "La contraseña es requerida.";
    } else if (formData.password.length < 8) {
      newErros.password = "La contraseña tiene que tener al menos 8 caracteres";
    }

    if (!formData.passwordVerify.trim()) {
      newErros.passwordVerify = "La contraseña de verificación es requerida.";
    } else if (formData.passwordVerify.length < 8) {
      newErros.passwordVerify =
        "La contraseña de verificación tiene que tener al menos 8 caracteres";
    } else if (formData.passwordVerify !== formData.password) {
      newErros.passwordVerify = "Las contraseñas no coinciden";
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
  const saveUser = async (data) => {
    const response = await UserService.registerUser(data);
    return response;
  };

  const getOneUser = async (id) => {
    const response = await UserService.getUserById(id);
    return response;
  };

  const saveStorage = (data) => {
    const payload = {
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
    };
    addUser(payload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const result = await saveUser(payload);
      if (result) {
        const user = await getOneUser(result.id);
        if (user) {
          saveStorage(user);

          setFormData({
            name: "",
            email: "",
            password: "",
            passwordVerify: "",
          });
          navigate("/", {
            state: {
              message: "¡Registro exitoso! Por favor inicia sesión.",
            },
          });
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register-container">
      <div className="register-group">
        <h4>Registra el usuario</h4>
        <form onSubmit={handleSubmit} className="form-register">
          <InputForm
            data={formData.name}
            error={errors.name}
            title="Nombre"
            type="text"
            id="name"
            handleChange={handleChange}
          />
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
          <InputForm
            data={formData.passwordVerify}
            error={errors.passwordVerify}
            title="Contraseña de verificación"
            type="password"
            id="passwordVerify"
            handleChange={handleChange}
          />

          <BtnForm name="Registrarse" />
        </form>
        <div className="data-login">
          <p>Ya tenes cuenta?</p>
          <Link to="/login">Inicia Sesión</Link>
        </div>
      </div>
    </div>
  );
}
