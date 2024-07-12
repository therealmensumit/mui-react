import { Typography, Container, Grid, Box, Button } from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./Components/Loading";
import ProductCard from "./Components/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const product_api = "https://dummyjson.com/products";
  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(product_api);
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApi();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 8); // Increment the number of visible products by 8
  };

  return (
    <>
      <Box py={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" fontSize={40}>
                MUI Products
              </Typography>
            </Grid>
            {isLoading ? (
              <>
                {[...Array(8)]?.map((e, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Loading />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {products.slice(0, visibleProducts)?.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard
                      img={product.images[0]}
                      title={product.title}
                      price={product.price}
                      brand={product.brand}
                    />
                  </Grid>
                ))}
              </>
            )}
            {visibleProducts < products.length && (
              <Grid item xs={12} align="center">
                <Button variant="outlined" onClick={handleShowMore}>
                  show more
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
