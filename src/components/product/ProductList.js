import React from "react";
import Modal from "./../../Modal";
import { useModal } from "./../../hooks/useModal";

const ProductList = ({ data, onHandleIncrement, onHandleDecrement }) => {
  const state = {
    title: ""
  };

  const { toggle, visible, fields } = useModal(state);

  return (
    <div className="content m-5">
      <React.Fragment>
        {data && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Product Photo</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Weight</th>
                <th scope="col" width="200px">
                  Product Quantity
                </th>
                <th scope="col">Order</th>
              </tr>
            </thead>
            <tbody>
              {data.map(product => {
                return (
                  <tr key={product.productID}>
                    <td>{product.productID}</td>
                    <td>
                      <img
                        className="img-product"
                        src={`${product.productImage}`}
                      />
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productWeight}</td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={e => onHandleDecrement(e)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                          <input
                            id="form1"
                            type="number"
                            className="form-control active"
                            min="0"
                            name="quantity"
                            defaultValue="1"
                            onChange={e => console.log(e.target.value)}
                          />
                        </div>

                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={e => onHandleIncrement(e)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#showModal"
                        onClick={() =>
                          toggle(product.productID, product.productName)
                        }
                      >
                        <li
                          className="fas fa-cart-plus"
                          aria-hidden="true"
                        ></li>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {visible && (
          <Modal
            modalTitle="Checkout Summary"
            modalForm={true}
            visible={visible}
            toggle={toggle}
            modalId="showModal"
          >
            <div className="col-md-12">
              <div className="card mb-12">
                <div className="card-header py-3">
                  <h5 className="mb-0">Product Items</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      {fields.title}
                      <span>50.00 {/* Display price */}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Quantity
                      <span>
                        2 {/* Display the total number of quantities */}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping Charge
                      <span>0.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>
                          50.00 {/* Display the total price of quantities */}
                        </strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </React.Fragment>
    </div>
  );
};

export default ProductList;
