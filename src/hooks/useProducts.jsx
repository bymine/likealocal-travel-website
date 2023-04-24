import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../apis';
import {
  DEFAULT_SPACE,
  MAX_PRICE,
  MIN_PRICE,
  QUERY_STRING,
} from '../constants';
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
      searchParams.set(QUERY_STRING.SPACE, DEFAULT_SPACE.join(','));
    }

    if (!searchParams.has('price')) {
      searchParams.set(QUERY_STRING.PRICE, `${MIN_PRICE},${MAX_PRICE}`);
    }

    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const spaceCategory = (searchParams.get(QUERY_STRING.SPACE) ?? '').split(',');
  const priceCategory = (searchParams.get(QUERY_STRING.PRICE) ?? '').split(',');

  const product = data.filter((product) => {
    return (
      spaceCategory.includes(product.spaceCategory) &&
      isInRange(priceCategory, product.price)
    );
  });

  return { product };
};

export default useProducts;
