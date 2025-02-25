import { Box, Button, Chip, Typography } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ img, title, price, brand }) => {
  return (
    <Box
      p={2}
      border={1}
      borderColor={"#d4d4d4"}
      height={"100%"}
      borderRadius={2}>
      <LazyLoadImage
        width={"100%"}
        delayTime={100}
        wrapperClassName="prod-img"
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: "200ms" },
        }}
        src={img}
        alt={title}
      />

      <Typography variant="h6" lineHeight={1.3} mb={1}>
        {title}
      </Typography>
      <Box mb={1}>
        <Chip label={brand} variant="outlined" />
      </Box>
      {/* <Typography variant="body2" mb={1}>
        <strong>Brand: </strong>
        <Typography variant="body">{brand}</Typography>
      </Typography> */}
      <Typography display={"flex"} alignItems={"center"} lineHeight={1}>
        <span>
          <CurrencyPoundIcon />
        </span>
        <span>{price}</span>
      </Typography>
    </Box>
  );
};

export default ProductCard;
