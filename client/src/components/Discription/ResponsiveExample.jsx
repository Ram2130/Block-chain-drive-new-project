import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ResponsiveExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
       Click Me
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function Example() {
//   return (
//     <>
//       {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// render(<Example />);
// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function ResponsiveExample() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" className="d-lg-none" onClick={handleShow}>
//         Launch
//       </Button>

//       <Alert variant="info" className="d-none d-lg-block">
//         Resize your browser to show the responsive offcanvas toggle.
//       </Alert>

//       <Offcanvas show={show} onHide={handleClose} responsive="lg">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <p className="mb-0">
//             This is content within an <code>.offcanvas-lg</code>.
//           </p>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

export default  ResponsiveExample;
