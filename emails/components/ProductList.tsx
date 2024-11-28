import { Button, Column, Heading, Img, Row, Section, Text } from "@react-email/components";
import React from "react";
import ButtonBlock from "./ButtonBlock";

const ProductList = ({title, buttonText, data}) => {

    return (
        <Section style={{ paddingTop: 16, paddingBottom: 16, textAlign: "center" }}>
            <Heading
            as="h1"
            style={{
              fontSize: 30,
              lineHeight: "36px",
              marginBottom: "0px",
              fontWeight: 600,
            }}
          >
            {title}
            </Heading>
            <Section
              style={{
                padding: 16,
                paddingTop: "0px",
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgb(229,231,235)",
              }}
            >
              <table style={{ marginBottom: 16 }} width="100%">
                <tr>
                  <th
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderWidth: "0px",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(229,231,235)",
                    }}
                  >
                    &nbsp;
                  </th>
                  {data.sections.map(section => (
                  <th
                    key={section}
                    align="left"
                    colSpan={6}
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      color: "rgb(107,114,128)",
                      borderWidth: "0px",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(229,231,235)",
                    }}
                  >
                    <Text style={{ fontWeight: 600 }}>{section}</Text>
                  </th>
                ))}
                </tr>
                {data.items.map(item => (
                <tr key={item.name}>
                  <td
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderWidth: "0px",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(229,231,235)",
                    }}
                  >
                    <Img
                      alt="Braun Classic Watch"
                      height={110}
                      src={item.imgUrl}
                      style={{
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </td>
                  <td
                    align="left"
                    colSpan={6}
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderWidth: "0px",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(229,231,235)",
                    }}
                  >
                    <Text>{item.name}</Text>
                  </td>
                  <td
                    align="left"
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderWidth: "0px",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgb(229,231,235)",
                    }}
                  >
                    <Text>{item.price}</Text>
                  </td>
                </tr>))}
              </table>
              <Row>
                <Column align="center">
                <ButtonBlock text={buttonText} link={null} />
                </Column>
              </Row>
            </Section>
        </Section>
    );
};

ProductList.defaultProps = {
    title: 'simple text',
};

export default ProductList;