'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

  export default function pagination() {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
      // Fetch products based on the page parameter in the URL
      const fetchProducts = async (page) => {
        // Make API call to fetch products for the specified page
        // Update setProducts with the fetched products
      };

      const urlParams = new URLSearchParams(window.location.search);
      const page = parseInt(urlParams.get("page")) || 1; // Get page number from URL parameter (default to 1)

      fetchProducts(page);
    }, []);

    const handlePageChange = (page) => {
      history.push(`?page=${page}`); // Update URL parameter when page changes
      fetchProducts(page); // Fetch products for the new page
    };

    return  (
        <>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
    )
  }

