import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

import Paragraph from "./components/Paragraph";
import TitleParagraph from "./components/TitleParagraph";
import ImageBlock from "./components/ImageBlock";
import ProductList from "./components/ProductList";
import ButtonBlock from "./components/ButtonBlock";
import Footer from "./components/Footer";

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

  const productData = {
    sections:['Product','Price'],
    items: [
      {imgUrl:"https://react.email/static/braun-analogue-clock.jpg", name:'Analogue Clock', price:'200$'},
      {imgUrl:"https://react.email/static/braun-analogue-clock.jpg", name:'Analogue Clock', price:'200$'},
      {imgUrl:"https://react.email/static/braun-analogue-clock.jpg", name:'Analogue Clock', price:'200$'},
    ]
  };

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

            <ImageBlock
              alt="Stagg Electric Kettle"
              height={150}
              width='100%'
              src="/static/logo.png"
              objectFit='contain'
            />

            <ImageBlock
              alt="Stagg Electric Kettle"
              height={250}
              width='100%'
              src="https://react.email/static/stagg-eletric-kettle.jpg"
            />
           
            <ProductList buttonText='checkout' data={productData}/>

            <TitleParagraph text='This is the actual content that the accented text above refers to.' title='Amazing content'/>

            <Paragraph text='A simple paragraph'/>

            <ButtonBlock text='get' link={null} />

            <Footer text='footer' />

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
