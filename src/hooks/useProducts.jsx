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
      const querystring = '서울,강원,부산,대구,제주';
      searchParams.set('space', querystring);
    }

    if (!searchParams.has('price')) {
      const querystring = '0,30000';
      searchParams.set('price', querystring);
    }

    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const spaceCategory = (searchParams.get('space') ?? '').split(',');
  const priceCategory = (searchParams.get('price') ?? '').split(',');

  const product = data.filter((product) => {
    return (
      spaceCategory.includes(product.spaceCategory) &&
      isInRange(priceCategory, product.price)
    );
  });

  return { product };
};

export default useProducts;
