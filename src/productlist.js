import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./productcontext";
export default function ProductList() {
  let products=useContext(ProductContext)
  return (
    <>
      <div class="container-fluid " >
      <Link to="/productcreate" class="m-2 font-weight-bold text-danger">Create Product</Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">           
            <h6 class="m-0 font-weight-bold text-primary ">
            Product Table
            </h6>
          </div>
          <div class="card-body ">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Product</th>
                    <th>Mfg Place</th>
                    <th>Price</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                products.productList.map((obj) => {
                      return <tr>
                    <td>{obj.company_name}</td>
                    <td>{obj.product_name}</td>
                    <td>{obj.mfg_place}</td>
                    <td>{obj.price}</td>
                    <th><Link to="/productedit/1">Edit User</Link></th>
                  </tr>
                    })
                  }
                  <tr>
                    <td>Hindustan Unilever</td>
                    <td>Dove shampoo</td>
                    <td>Hyedrabad</td>
                    <td>30</td>
                    <th><Link to="/productedit/2">Edit Product</Link></th>
                  </tr>
                  <tr>
                    <td>P&G</td>
                    <td>Gillette Mach 3 turbo</td>
                    <td>Mumbai</td>
                    <td>35</td>
                     <th><Link to="/productedit/3">Edit Product</Link></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
