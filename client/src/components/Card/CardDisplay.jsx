import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  ResponsiveExample from "../Discription/ResponsiveExample"
function BasicExample({item,i}) {
  return (
    <Card style={{ width: '15rem',marginLeft:"10px",border: "double",marginTop:"31px"}}>
        <a href={item} key={i} target="_blank">
      <Card.Img variant="top" src="bg.png" /></a>
      <Card.Body>
        <ResponsiveExample/>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;