'use server'
import { getProductsItem ,postFavorite ,postCart } from "@/util/serverActions";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

const Product = async () => {
    return (
        <>
          <ProductDetails fetchedProduct={getProductsItem} postFavorite={postFavorite} postCart={postCart}/>
        </>
    );
}
export default Product;