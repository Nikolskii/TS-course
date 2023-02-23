import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();

  return <div>Details {params.name}</div>;
};

export default Details;
