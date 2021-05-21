import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard'
import {UserProvider} from './userContext';


import{
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom"
import UserList from './userlist';
import UserCreate from './usercreate';
import UserEdit from './useredit';
import ProductCreate from './productcreate';
import ProductEdit from './productedit';
import ProductList from './productlist';
import { ProductProvider } from './productcontext';

function App() {
  return <>
   <Router>
  <div id="wrapper">
    <Sidebar></Sidebar>
    <UserProvider>
      <ProductProvider>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar></Topbar>
        <div class="container-fluid">
         
            <Switch>
              <Route path="/dashboard" component={Dashboard} exact={true}/>
              <Route path="/userlist" component={UserList} exact={true}/>
              <Route path="/usercreate" component={UserCreate} exact={true}/>
              <Route path="/useredit/:id" component={UserEdit} exact={true}/>
            
              <Route path="/productcreate" component={ProductCreate} exact={true}/>
              <Route path="/productlist" component={ProductList} exact={true}/>
              <Route path="/productedit/:id" component={ProductEdit} exact={true}/>
            </Switch>
          
        </div>
      </div>
    </div>
    </ProductProvider>
    </UserProvider>
  </div>
  </Router>
  </>
}

export default App;
