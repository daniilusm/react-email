import { Text } from "@react-email/components";
import React from "react";

const TitleParagraph = ({title,text}) => {

    return (
        <>
            <Text
                style={{
                    fontSize: 24,
                    lineHeight: "32px",
                    fontWeight: 600,
                }}
            >
                {title}
            </Text>
            <Text>
                {text}
            </Text>
        </>
    );
};


TitleParagraph.defaultProps = {
    title:'title',
    text: 'simple text',
};

export default TitleParagraph;