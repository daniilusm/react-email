import { Button } from "@react-email/components";
import React from "react";

const ButtonBlock = ({text, link}) => {

    return <Button
        href={link}
        style={{
          width: '100%',
          boxSizing: "border-box",
          padding: 12,
          fontWeight: 600,
          borderRadius: 8,
          marginBottom: 16,
          textAlign: "center",
          backgroundColor: "#3c6e87",
          color: "rgb(255,255,255)",
        }}
    >
        {text}
    </Button>;
};

ButtonBlock.defaultProps = {
    text: 'Get started',
};

export default ButtonBlock;