import Card from 'react-bootstrap/Card';

function BgColorExample({account}) {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
         'Dark'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem'  }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Account </Card.Title>
            <Card.Text>
              {account}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;