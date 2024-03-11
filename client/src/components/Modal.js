import { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground" style={{marginLeft:"26%",background:'white',width:"50%",marginTop:"10%"}}>
        <div className="modalContainer" style={{textAlign:"center"}}>
          <div className="title">Share with</div>
          <div className="body">
          <Form.Control className="mx-10 address" style={{marginLeft:"25%",width:"50%"}} type="text" placeholder="Enter Account Number" />
     
            {/* <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input> */}
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
           <div style={{display:"flex", marginLeft:"30%"}}>            
           <Button  onClick={() => {
                setModalOpen(false);
              }}   id="cancelBtn" style={{marginLeft:"5%" ,marginTop:"10px",width:"20%"}} variant="dark">Cancel</Button>
          
            <Button  onClick={() => sharing()}  id="cancelBtn" style={{marginLeft:"5%" ,marginTop:"10px",width:"20%"}} variant="dark">Share</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;