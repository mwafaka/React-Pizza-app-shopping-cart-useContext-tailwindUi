// Details.js

import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Details Page</h2>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default Details;
