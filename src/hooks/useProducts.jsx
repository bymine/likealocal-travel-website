import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../apis';
import { isInRange } from '../utils';

const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: ['load'],
    queryFn: fetchData,
    suspense: true,
  });
  useEffect(() => {
    if (!searchParams.has('space')) {
      searchParams.set('space', '서울');
      searchParams.append('space', '강원');
      searchParams.append('space', '부산');
      searchParams.append('space', '대구');
      searchParams.append('space', '제주');
    }

    if (!searchParams.has('price')) {
      searchParams.set('price', 0);
      searchParams.append('price', 30000);
    }

    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const spaceCategory = searchParams.getAll('space');
  const priceCategory = searchParams.getAll('price');

  const product = data.filter((product) => {
    return (
      spaceCategory.includes(product.spaceCategory) &&
      isInRange(priceCategory, product.price)
    );
  });

  return { product };
};

export default useProducts;
