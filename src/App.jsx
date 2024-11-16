import React, { useEffect, useState ,Suspense} from "react";
import CountComp from "./Component/CountComp";
import NameChange from "./Component/NameChange";
import ProductComp from "./Component/ProductComp";
import ApiCallWithBtn from "./Component/ApiCallWithBtn";
import PropsComp from "./Component/PropsComp";
import ReactForm from "./Component/ReactForm";
import HookForm from "./Component/HookForm";
import "./App.css"
import NewProComp from "./Component/NewProComp";
import AboutComp from "./Component/AboutComp";

import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import GrocerryListComp from "./Component/GrocerryListComp";
import NewPage from "./Component/NewPage";
import ModalNew from "./Component/ModalNew";
import ProductContext from "./Component/ProductContext";
import Cartcontext from "./Component/Cartcontext";

// import HomeComp from "./Component/HomeComp";


// const MyCompArun =  React.lazy(()=>  import("./Component/AboutComp"))

function App() {
  const [apidata, setapidata] = useState([]);

  const [count, setcount] = useState(0);

  const [modelop,setmodelop] =  useState(false)

  const [NewComp, setNewComp] = useState(null);


  const handleapi = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setapidata(data);
  };

  // const handleimport = async() =>{

  //   let res  = await import("./Component/HomeComp")

  //   setNewComp(()=>res.default)
  // }


  return (
    <>
      {/* <CountComp /> */}
      {/* <CountComp /> */}

      {/* <NameChange/> */}

      {/* <ProductComp/> */}
      {/* <button onClick={handlelogout}> Logout </button> */}

      {/* {islog ? <ApiCallWithBtn /> : null} */}
      {/* 

      <PropsComp   name={"Arun"} age={25} />

      <PropsComp name={"Ram"}  age={26} />

      <PropsComp name={"vicky"}   /> */}

      {/* <h1>parent = {count}</h1> */}

      {/* <PropsComp setcount={setcount} apidata={apidata} handleapi={handleapi} />

  
      <ReactForm/>

      <HookForm/> */}

      {/* <Link to="/" >Home</Link>

      <Link to="/product">Product</Link>


      <Link to="/aboutus">About</Link> */}



{/* <Routes> */}

{/* 
  <Route  path="/" element={ <HomeComp/>}/>

  <Route path="/product"  element={<NewProComp/>} />

  <Route  path="/aboutus"  element={<AboutComp/> } /> */}

{/* <NewPage/> */}

{/* <button onClick={()=>setmodelop(true)}>Edit</button> */}

{/* <ModalNew modelop={modelop} setmodelop={setmodelop} data={"sfsd"}/> */}
{/* </Routes> */}
{/* <h1>Crud</h1> */}

{/* <button onClick={handleimport}>home</button> */}

{/* <GrocerryListComp/>
{NewComp ? <NewComp/> : ""} */}

{/* <span class="loader"></span> */}
      {/* <HomeComp/> */}
      {/* <Suspense fallback={<span class="loader">lllllllllllllllllllll</span>}> */}
      {/* <MyCompArun/> */}
      {/* </Suspense> */}
      {/* <AboutComp NAME={"aRUN"}/> */}


{/* 1. CONTEXT API2018
2. REDUX   2015*/}


      {/* PROPS DRILING -> CONTEXT API -> REDUX */}

{/* <arun></arun> */}

<Cartcontext/>

<br/>
<br/>
<br/>
<br/>


<ProductContext/>

    </>
  );
}

export default App;
