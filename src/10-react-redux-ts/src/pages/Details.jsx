import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import axios from 'axios';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      Details {name}
    </div>
  );
};

export default Details;
