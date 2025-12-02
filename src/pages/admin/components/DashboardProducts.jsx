import { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import "../assets/dashboardProducts.css";
import Pagination from "../../../components/Pagination";
import BtnTable from "../../../components/BtnTable";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../../components/Modal";
import ProductForm from "./ProductForm";
import ConfirmModal from "../../../components/ConfirmModal";
import AlertMessage from "../../../components/AlertMessage";
import InputSearch from "../../../components/InputSearch";

export default function DashboardProducts() {
  const {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
    setFilterTitle,
    filterTitle,
  } = useContext(ProductContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentUpdateProduct, setCurrentUpdateProduct] = useState(null);
  const [currentid, setCurrentid] = useState(null);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
  };

  const openImage = (productImage, productTitle) => {
    setSelectedImage({ image: productImage, title: productTitle });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const openOrCloseCreate = () => {
    setIsCreate(isCreate === false ? true : false);
  };

  const openOrCloseUpdate = (data) => {
    if (data) {
      const payload = {
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
        image: data.image,
      };
      setCurrentUpdateProduct(payload);
      setCurrentid(data.id);
      setIsUpdate(isUpdate === false ? true : false);
    } else {
      setCurrentUpdateProduct(null);
      setCurrentid(null);
      setIsUpdate(isUpdate === false ? true : false);
    }
  };

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = (id) => {
    setShowConfirm(true);
    setCurrentid(id);
  };

  const confirmDelete = () => {
    const result = deleteProduct(currentid);
    setShowConfirm(false);
    if (result) {
      showAlert("success", "Producto eliminado exitosamente ✔️");
    } else {
      showAlert("error", "Ocurrió un error al eliminado el producto ❌");
    }
  };

  return (
    <>
      <AlertMessage
        visible={alert.visible}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert((prev) => ({ ...prev, visible: false }))}
      />
      <div className="list-product-container">
        <div className="search-container">
          <InputSearch search={filterTitle} setSearch={setFilterTitle} />
        </div>
        <div className="btn-create-container">
          <button onClick={openOrCloseCreate} title="crear producto">
            Crear producto
          </button>
          <h4>Lista de productos</h4>
        </div>
        <div className="table-scroll-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td className="table-title-product">{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td className="img-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      width="30"
                      height="30"
                      onClick={() => openImage(product.image, product.title)}
                    />
                  </td>
                  <td className="action-btn">
                    <div onClick={() => openOrCloseUpdate(product)}>
                      <BtnTable color="green" text="actualizar">
                        <GrUpdate />
                      </BtnTable>
                    </div>
                    <div onClick={() => handleDelete(product.id)}>
                      <BtnTable color="red" text="eliminar">
                        <FaRegTrashCan />
                      </BtnTable>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal closeModal={closeImage} isOpen={!!selectedImage}>
          {selectedImage && (
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              width="900"
              height="600"
            />
          )}
        </Modal>
        <Modal
          isOpen={isCreate}
          closeModal={openOrCloseCreate}
          title="Crea tu producto"
        >
          <ProductForm operator={createProduct} textBtn="Crear" />
        </Modal>
        <Modal
          isOpen={isUpdate}
          closeModal={openOrCloseUpdate}
          title="Actualizar tu producto"
        >
          <ProductForm
            data={currentUpdateProduct}
            id={currentid}
            operator={updateProduct}
            textBtn="Actualizar"
          />
        </Modal>
        <ConfirmModal
          visible={showConfirm}
          message={"¿Seguro que deseas eliminar el producto?"}
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmDelete}
        />
        <Pagination />
      </div>
    </>
  );
}
