import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

export default function UserList() {
  let users=useContext(UserContext)
  return (
    <>
      <div class="container-fluid " >
      <Link to="/usercreate" class="m-2 font-weight-bold text-danger">Create User</Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">           
            <h6 class="m-0 font-weight-bold text-primary ">
              DataTables Example
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
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    users.userList.map((obj) => {
                      return <tr>
                    <td>{obj.firstName}</td>
                    <td>{obj.lastName}</td>
                    <td>{obj.email}</td>
                    <td>{obj.password}</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <th><Link to="/useredit/1">Edit User</Link></th>
                  </tr>
                    })
                  }
                  
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                    <th><Link to="/useredit/2">Edit User</Link></th>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                    <th><Link to="/useredit/3">Edit User</Link></th>
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
