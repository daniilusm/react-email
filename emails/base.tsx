import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="rounded my-[40px] mx-auto p-[20px] max-w-[465px]">

            <Img
              alt="Stagg Electric Kettle"
              height={250}
              src="https://react.email/static/stagg-eletric-kettle.jpg"
              style={{ borderRadius: 12, margin: "0 auto" }}
            />
           
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
                You left something in your cart
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
                      <th
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
                        <Text style={{ fontWeight: 600 }}>Product</Text>
                      </th>
                      <th
                        align="center"
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
                        <Text style={{ fontWeight: 600 }}>Quantity</Text>
                      </th>
                      <th
                        align="center"
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
                        <Text style={{ fontWeight: 600 }}>Price</Text>
                      </th>
                    </tr>
                    <tr>
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
                          src="https://react.email/static/braun-classic-watch.jpg"
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
                        <Text>Classic Watch</Text>
                      </td>
                      <td
                        align="center"
                        style={{
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderWidth: "0px",
                          borderBottomWidth: 1,
                          borderStyle: "solid",
                          borderColor: "rgb(229,231,235)",
                        }}
                      >
                        <Text>1</Text>
                      </td>
                      <td
                        align="center"
                        style={{
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderWidth: "0px",
                          borderBottomWidth: 1,
                          borderStyle: "solid",
                          borderColor: "rgb(229,231,235)",
                        }}
                      >
                        <Text>$210.00</Text>
                      </td>
                    </tr>
                    <tr>
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
                          alt="Braun Analogue Clock"
                          height={110}
                          src="https://react.email/static/braun-analogue-clock.jpg"
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
                        <Text>Analogue Clock</Text>
                      </td>
                      <td
                        align="center"
                        style={{
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderWidth: "0px",
                          borderBottomWidth: 1,
                          borderStyle: "solid",
                          borderColor: "rgb(229,231,235)",
                        }}
                      >
                        <Text>1</Text>
                      </td>
                      <td
                        align="center"
                        style={{
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderWidth: "0px",
                          borderBottomWidth: 1,
                          borderStyle: "solid",
                          borderColor: "rgb(229,231,235)",
                        }}
                      >
                        <Text>$40.00</Text>
                      </td>
                    </tr>
                  </table>
                  <Row>
                    <Column align="center">
                      <Button
                        href="https://react.email"
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          paddingLeft: 12,
                          paddingRight: 12,
                          borderRadius: 8,
                          textAlign: "center",
                          backgroundColor: "rgb(79,70,229)",
                          paddingTop: 12,
                          paddingBottom: 12,
                          fontWeight: 600,
                          color: "rgb(255,255,255)",
                        }}
                      >
                        Checkout
                      </Button>
                    </Column>
                  </Row>
                </Section>
              </Section>

              <Text
                style={{
                  color: "rgb(129,140,248)",
                  fontSize: 24,
                  lineHeight: "32px",
                  fontWeight: 600,
                }}
              >
                Amazing content
              </Text>
              <Text>
                This is the actual content that the accented text above refers to.
              </Text>

              <Text>A simple paragraph</Text>

              <Section style={{ marginTop: 16, marginBottom: 16 }}>
                <Row>
                  <Text
                    style={{
                      margin: "0px",
                      fontSize: 20,
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "rgb(17,24,39)",
                    }}
                  >
                    Timing Products
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "rgb(107,114,128)",
                    }}
                  >
                    Dieter Rams consistently implemented his design principles over the
                    course of over three decades as the Braun design leader.
                  </Text>
                </Row>
                <Row style={{ marginTop: 16 }}>
                  <Column
                    style={{
                      textAlign: "left",
                      paddingRight: 4,
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}
                  >
                    <Img
                      alt="Braun Analogue Clock"
                      height={180}
                      src="https://react.email/static/braun-analogue-clock.jpg"
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 24,
                        fontSize: 20,
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      Analogue Clock
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 16,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "rgb(107,114,128)",
                      }}
                    >
                      Thoughtful and simply designed.
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      $40.00
                    </Text>
                    <Button
                      href="https://react.email"
                      style={{
                        marginTop: 16,
                        borderRadius: 8,
                        backgroundColor: "rgb(79,70,229)",
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                        paddingBottom: 12,
                        fontWeight: 600,
                        color: "rgb(255,255,255)",
                      }}
                    >
                      Buy
                    </Button>
                  </Column>
                  <Column
                    style={{
                      textAlign: "left",
                      paddingRight: 4,
                      paddingLeft: 4,
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}
                  >
                    <Img
                      alt="Braun Wall Clock"
                      height={180}
                      src="https://react.email/static/braun-wall-clock.jpg"
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 24,
                        fontSize: 20,
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      Wall Clock
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 16,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "rgb(107,114,128)",
                      }}
                    >
                      The original easy to read dial layout.
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      $45.00
                    </Text>
                    <Button
                      href="https://react.email"
                      style={{
                        marginTop: 16,
                        borderRadius: 8,
                        backgroundColor: "rgb(79,70,229)",
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                        paddingBottom: 12,
                        fontWeight: 600,
                        color: "rgb(255,255,255)",
                      }}
                    >
                      Buy
                    </Button>
                  </Column>
                  <Column
                    style={{
                      paddingTop: 16,
                      paddingBottom: 16,
                      paddingLeft: 4,
                      textAlign: "left",
                    }}
                  >
                    <Img
                      alt="Braun Classic Watch"
                      height={180}
                      src="https://react.email/static/braun-classic-watch.jpg"
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 24,
                        fontSize: 20,
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      Classic Watch
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 16,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "rgb(107,114,128)",
                      }}
                    >
                      Functional, classic, and built to last.
                    </Text>
                    <Text
                      style={{
                        margin: "0px",
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: 600,
                        color: "rgb(17,24,39)",
                      }}
                    >
                      $210.00
                    </Text>
                    <Button
                      href="https://react.email"
                      style={{
                        marginTop: 16,
                        borderRadius: 8,
                        backgroundColor: "rgb(79,70,229)",
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                        paddingBottom: 12,
                        fontWeight: 600,
                        color: "rgb(255,255,255)",
                      }}
                    >
                      Buy
                    </Button>
                  </Column>
                </Row>
              </Section>

              <Button
                href="https://react.email"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: 12,
                  fontWeight: 600,
                  borderRadius: 8,
                  textAlign: "center",
                  backgroundColor: "rgb(79,70,229)",
                  color: "rgb(255,255,255)",
                }}
              >
                Get started
              </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
