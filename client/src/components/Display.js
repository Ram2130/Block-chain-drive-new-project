import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import BasicExample from "./Card/CardDisplay";
import Modal from './Modal';
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [modalOpen,setModalOpen]=useState(false)
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <>
          {/* <a href={item} key={i} target="_blank"> */}
            {/* <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            /> */}
            {/* <h1>image</h1>  */}
             
            
    
            {/* <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image  key={i} src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} rounded />
        </Col>
      </Row>
     
    </Container> */}
          {/* </a> */}
          <BasicExample item={item} i={i}/>
          </>
           
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
    <h1 className="text-center" >Enter Your Account Number</h1>
    
      
      <Form.Control className="mx-10 address" style={{marginLeft:"25%",width:"50%"}} type="text" placeholder="Enter Account Number" />
      <Button onClick={getdata} style={{marginLeft:"40%" ,marginTop:"10px",width:"20%"}} variant="dark">GetD@ta</Button>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      {/* <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input> */}
      {/* <button className="center button" onClick={getdata}>
        Get Data
      </button> */}
      <div  >
      <div style={{ display:"flex"}} className="image-list" >{data}</div>
      </div>
    </>
  );
};
export default Display;