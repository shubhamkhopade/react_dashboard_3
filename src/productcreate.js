import { useContext, useState } from "react";
import ProductContext from "./productcontext";

export default function ProductCreate() {
  let productData = useContext(ProductContext);
  let [company_name, setcompany_name] = useState("");
  let [product_name, setproduct_name] = useState("");
  let [mfg_place, setmfg_place] = useState("");
  let [price, setprice] = useState("");

  let productSubmit = (e) => {
    e.preventDefault();
    
    productData.setproductList([...productData.productList,
      {
        company_name,
        product_name,
        mfg_place,
        price
      }])
  }
  return<>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            <h3>User Form</h3>
          </div>
        </div>
        <form onSubmit={productSubmit}>
          <div className="row">
            <diV className="col-lg-6">
              <label>Company Name</label>
              <input
                className="form-control"
                value={company_name}
                onChange={(e) => setcompany_name(e.target.value)}
              />
            </diV>
            <diV className="col-lg-6">
              <label>Product Name</label>
              <input
                className="form-control"
                value={product_name}
                onChange={(e) => setproduct_name(e.target.value)}
              />
            </diV>
          </div>

          <div className="row">
            <diV className="col-lg-6">
              <label>Mfg Place</label>
              <input
                className="form-control"
                value={mfg_place}
                onChange={(e) => setmfg_place(e.target.value)}
              />
            </diV>
            <diV className="col-lg-6">
              <label>Price</label>
              <input
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </diV>
          </div>
          <div className="row mt-3">
            <diV className="col-lg-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </diV>
          </div>
        </form>
      </div>
    </>
}