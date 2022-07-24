import { useState, useEffect,Fragment } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from './category.styles';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category,categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
<<<<<<< HEAD
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
=======
      <CategoryContainer>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </CategoryContainer>
>>>>>>> f4469306054c0963b887f5aa35c4899b455c680b
    </Fragment>
  );
};

export default Category; 
