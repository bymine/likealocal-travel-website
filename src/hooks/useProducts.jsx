import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { fetchData } from '../apis';
import {
  selectPriceCategories,
  selectSpaceCategories,
} from '../redux/slices/categoriesSlice';
import { isInRange } from '../utils';

const useProducts = () => {
  const { data } = useQuery({
    queryKey: ['load'],
    queryFn: fetchData,
    suspense: true,
  });

  const spaceCategories = useSelector(selectSpaceCategories);
  const priceCategories = useSelector(selectPriceCategories);

  const product = data.filter((product) => {
    return (
      spaceCategories.includes(product.spaceCategory) &&
      isInRange(priceCategories, product.price)
    );
  });
  return { product };
};

export default useProducts;
