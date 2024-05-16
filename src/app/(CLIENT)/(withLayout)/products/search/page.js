'use client'
import React, { useEffect, useState } from "react";
import { getSearch, postCart, postFavorite } from "@/util/serverActions";
import { useSearchParams } from "next/navigation";
import { Item } from "@/components/Item/Item";

async function SearchPage() {
    const query = useSearchParams().get('q');
    const [searchResults, setSearchResults] = useState([]);
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const results = await getSearch(query);
                setSearchResults(results.products);
                console.log('searchResults', results.products);
            } catch (error) {
                console.error('Error fetching', error);
            }
        };

        const fetchPostCart = async () => {
            try {
                const cart = await postCart();
                setCart(cart);
            } catch (error) {
                console.error('Error fetching', error);
            }
        };

        const fetchPostFavorite = async () => {
            try {
                const fav = await postFavorite();
                setFav(fav);
            } catch (error) {
                console.error('Error fetching', error);
            }
        };

        fetchSearch();
        fetchPostCart();
        fetchPostFavorite();
    }, [query]);

    return (
        <div className="my-44 px-3 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((product) => (
                <div key={product.id}>
                    <Item
                        id={product.id}
                        title={product.name}
                        price={product.price}
                        storeName={product.store.storeName}
                        storeImages={product.store.storeImages}
                        image={product.image[0]}
                        postCart={postCart}
                        postFavorite={postFavorite}
                    />
                </div>
            ))}
        </div>
    );
}

export default SearchPage;
