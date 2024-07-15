import { Box, Typography } from "@mui/material";

import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Rating } from "react-simple-star-rating";

const ProductCard = ({ img, title, price, rating, discount }) => {
  return (
    <Box
      p={2}
      border={1}
      borderColor={"#d4d4d4"}
      height={"100%"}
      borderRadius={2}
      position={"relative"}>
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

      <Typography
        variant="body2"
        color="white"
        position={"absolute"}
        top={0}
        right={0}
        borderRadius={1}
        p={0.5}
        bgcolor={"green"}>
        {discount}%
      </Typography>

      <Typography variant="h6" lineHeight={1.3} mb={1}>
        {title}
      </Typography>

      <Box mb={1}>
        <strong>Rating: </strong>
        <Rating
          readonly={true}
          iconsCount={5}
          allowFraction={true}
          size={16}
          initialValue={rating}
        />
      </Box>

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
