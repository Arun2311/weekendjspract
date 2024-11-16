import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ModalNew = ({modelop,setmodelop,data}) => {


  


 

  const handleOk = () => {
    setmodelop(false);
  };
  const handleCancel = () => {
    setmodelop(false);
  };
  return (
    <>
     

      {/* <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}> */}

  {/* <input value={data}/> */}


      {/* </Modal> */}
    </>
  );
};
export default ModalNew;