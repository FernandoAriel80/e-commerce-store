import { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import "../assets/dashboardProducts.css";
import Pagination from "../../../components/Pagination";
import BtnTable from "../../../components/BtnTable";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import Modal from "./Modal";

export default function DashboardProducts() {
  const { products } = useContext(ProductContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCreate, setIsCreate] = useState(false);

  const openImage = (productImage, productTitle) => {
    setSelectedImage({ image: productImage, title: productTitle });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const openCreate = () => {
    setIsCreate(isCreate === false ? true : false);
  };

  return (
    <>
      <div className="list-product-container">
        <button onClick={openCreate} title="crear producto">
          <IoIosCreate />
        </button>
        <h4>Lista de productos</h4>
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
                <td>{product.title}</td>
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
                  <BtnTable text="actualizar">
                    <GrUpdate />
                  </BtnTable>
                  <BtnTable color="red" text="eliminar">
                    <FaRegTrashCan />
                  </BtnTable>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <Modal isOpen={isCreate} closeModal={openCreate}>
          Cosas
        </Modal>
        <Pagination />
      </div>
    </>
  );
}
