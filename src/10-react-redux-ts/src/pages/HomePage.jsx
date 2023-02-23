import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../components/List';
import { ALL_COUNTRIES } from '../config';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              onClick={() => navigate(`country/${c.name}`)}
              key={c.name}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
