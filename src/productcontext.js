import React, { useState } from "react";
let ProductContext= React.createContext();
export default ProductContext;

//This will provide data to all its childrens
export const  ProductProvider =({children})=>{
    let [productList,setproductList]=useState([])
    return <ProductContext.Provider value={{productList,setproductList}}>
        {children}
    </ProductContext.Provider>
}