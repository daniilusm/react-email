import { Img, Text } from "@react-email/components";
import React from "react";

const ImageBlock = ({alt, src,height,width,objectFit}) => {

    return  <Img
      alt={alt}
      height={height}
      width={width}
      src={src}
      style={{ borderRadius: 12, margin: "0 auto 16px", objectFit }}
    />;
};

ImageBlock.defaultProps = {
    alt: 'simple alt',
    src:"https://react.email/static/stagg-eletric-kettle.jpg",
    height:250,
    width: 'auto',
    objectFit: 'cover',
};

export default ImageBlock;