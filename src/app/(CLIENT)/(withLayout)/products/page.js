'use server'
import { Item } from "@/components/Item/Item";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {getProducts} from "@/util/serverActions";
import {postFavorite} from "@/util/serverActions";
import {postCart} from "@/util/serverActions";
import ProudectLoading from "@/components/skeletons/ProudectLoading";

export default async function products() {

  const prod = getProducts();
  const res = await Promise.all([prod]);
  const products = res[0].products;
  console.log(products)
    return (
    <div className="mt-44">
      <div className="container grid xl:grid-cols-5 md:grid-cols-5 md:gap-1 sm:grid-cols-2 sm:gap-2 sm:p-0 sm:mx-auto mt-5 overflow-hidden">
        {products?.map((product) => (
            <div key={product.id}>
              <Item
                id={product.id}
                title={product.name}
                price={product.price}
                brand={product.brand}
                image={product.image[0]}
                category={product.category}
                description={product.description}
                stock={product.stock}
                storeName={product.storeName}
                storeImages={product.storeImages}
                isLiked={product.isLiked}
                postFavorite={postFavorite}
                postCart={postCart}
                inCart={product.inCart}
                />
            </div>
        ))}
      </div>
      <div className="flex justify-center p-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}