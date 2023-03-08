import React, { useEffect, useState } from 'react';
import { TravelFilterBox, TravelList } from '../components';

const categories = ['전체', '강원', '부산', '대구', '제주'];

const isInRange = (range, targetNumber) => {
  return targetNumber >= range[0] && targetNumber <= range[1];
};

const MainPage = () => {
  const [travels, setTravels] = useState([]);
  const [category, setCategory] = useState('전체');
  const [range, setRange] = useState([0, 50000]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const filteredProductList = travels.filter((product) => {
    if (category === '전체') return isInRange(range, product.price);
    return product.spaceCategory === category && isInRange(range, product.price);
  });

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  useEffect(() => {
    async function fetchTravels() {
      try {
        const response = await fetch('http://localhost:3500/travels');
        if (response.ok) {
          const data = await response.json();
          setTravels(data);
        }
      } catch (error) {
        throw new Error('Failed to load json data');
      }
    }

    fetchTravels();
  }, []);

  let content;

  if (travels) {
    content = (
      <div>
        <TravelFilterBox
          categories={categories}
          category={category}
          handleCategoryChange={handleCategoryChange}
          range={range}
          handleRangeChange={handleRangeChange}
        />
        <TravelList travels={filteredProductList} />
      </div>
    );
  }

  return content;
};

export default MainPage;
