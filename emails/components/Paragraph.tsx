import { Text } from "@react-email/components";
import React from "react";

const Paragraph = ({text}) => {

    return <Text>{text}</Text>;
};

Paragraph.defaultProps = {
    text: 'simple text',
};

export default Paragraph;