import React from "react";
import styled from "styled-components";
import { Container, Flex, Heading } from "@chakra-ui/react";
import {
  ConnectWallet,
  darkTheme,
} from "@thirdweb-dev/react";
import image from "../assets/logo.webp";

const AuthCardContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AuthCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  background-color: #1d232a;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width:60vh;
  min-width: 200px;
  border: 1px solid #ffffff;

  img {
    width: 100px;
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight:800;
    color: #d2a710;
  }

  p {
    margin-bottom: 2rem;
    color:#d2a710;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default function AuthCard() {
  return (
    <AuthCardContainer>
      <AuthCardSection className="card glass">
        <img src="https://testnet.tbcrewardcoin.online/assets/uploads/logo/favicon.png" alt="Logo" />
        <Heading as="h2" size="lg">
          Login or Signup
        </Heading>
        <p>Please Connect Your Wallet to Login/Signup.</p>
        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentText: "#ff8533",
            accentButtonBg: "#ff8533",
            primaryText: "#bfbfcf",
            accentButtonText: "#000000",
          },
        })}
        btnTitle={"Login/SignUp"}
        modalTitle={"Login/SignUp "}
        modalSize={"compact"}
        welcomeScreen={{}}
        modalTitleIconUrl={
          "https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png"
        }
      />
      </AuthCardSection>
    </AuthCardContainer>
  );
}
