import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const MainHome = ({ numero }) => {
  const [num, setNum] = useState(numero);

  const handleSumar = () => {
    setNum(num + 10);
  };

  const handleRestar = () => {
    setNum(num - 10);
  };

  useEffect(() => {
    handleSumar;
  }, []);

  useEffect(() => {
    handleRestar;
  }, []);

  return (
    <>
      <Button className='mx-3' type='button' onClick={handleSumar}>
        Sumar 10
      </Button>
      <Button className='mx-3' type='button' onClick={handleRestar}>
        Restar 10
      </Button>
      <h1>numero = {num}</h1>
    </>
  );
};

export default MainHome;
