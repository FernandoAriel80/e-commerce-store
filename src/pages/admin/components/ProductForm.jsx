import { useEffect, useState } from "react";
import InputForm from "../../../components/InputForm";
import SelectForm from "../../../components/SelectForm";
import ImageForm from "../../../components/ImageForm";
import TextAreaForm from "../../../components/TextAreaForm";
import BtnForm from "../../../components/BtnForm";
import "../assets/productForm.css";
import AlertMessage from "../../../components/AlertMessage";

export default function ProductForm({
  data = null,
  id = null,
  operator,
  textBtn = "",
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    message: "",
  });
  
  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
  };

  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || "",
        description: data.description || "",
        price: data.price || "",
        category: data.category || "",
        image: data.image || null,
      });
    }
  }, [data]);

  const validateForm = () => {
    const newErros = {};
    if (!formData.title.trim()) {
      newErros.title = "El nombre es requerido.";
    }

    if (!formData.description.trim()) {
      newErros.description = "La descripción es requerido.";
    } else if (formData.description.length <= 10) {
      newErros.description =
        "La descripción tiene que ser mayor a 10 calabras.";
    }

    if (!formData.price.trim()) {
      newErros.price = "El precio es requerida.";
    } else if (formData.price <= 0) {
      newErros.price = "El precio tiene que ser mayor a 0.";
    }

    if (!formData.category.trim()) {
      newErros.category = "La categoria es requerida.";
    }

    if (formData.image === null) {
      newErros.image = "La imagen es requerida.";
    }

    return newErros;
  };

  const handleChange = (e, isFile = false) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: isFile ? files[0] : value,
    }));
  };

  const saveProduct = async (data) => {
    if (data.id != null) {
      const result = await operator(data.formData, data.id);
      if (result) {
        showAlert("success", "Producto actualizado exitosamente ✔️");
      } else {
        showAlert("error", "Ocurrió un error al actualizado el producto ❌");
      }
      setIsDisable(false);
    } else {
      const result = await operator(data.formData);
      if (result) {
        showAlert("success", "Producto creado exitosamente ✔️");
      } else {
        showAlert("error", "Ocurrió un error al creado el producto ❌");
      }
      setIsDisable(false);
      return result;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsDisable(true);
      const result = await saveProduct({ formData, id });
      if (result) {
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          image: "",
        });
      }
    } else {
      setErrors(newErrors);
    }
  };

  const categoryArray = ["Electrónica", "Hogar", "Juguetes", "Ropa", "Otros"];

  return (
    <>
      <AlertMessage
        visible={alert.visible}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert((prev) => ({ ...prev, visible: false }))}
      />
      <form onSubmit={handleSubmit} className="form-product">
        <div className="form-input">
          <InputForm
            data={formData.title}
            error={errors.title}
            title="Nombre"
            type="text"
            id="title"
            handleChange={handleChange}
          />

          <InputForm
            data={formData.price}
            error={errors.price}
            title="Precio"
            type="number"
            id="price"
            handleChange={handleChange}
          />
          <SelectForm
            data={formData.category}
            error={errors.category}
            title="Categoría"
            id="category"
            options={categoryArray}
            handleChange={handleChange}
          />

          <TextAreaForm
            data={formData.description}
            error={errors.description}
            title="Descripción"
            id="description"
            handleChange={handleChange}
          />
        </div>
        <ImageForm
          data={formData.image}
          error={errors.image}
          id="image"
          title="Imagen del producto"
          handleChange={handleChange}
        />

        <BtnForm name={textBtn} disabled={isDisable} />
      </form>
    </>
  );
}
