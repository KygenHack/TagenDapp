import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  darkTheme,
} from "@thirdweb-dev/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/globals.css";
import Root from "./routes/root";

import ErrorPage from "./error-page";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import NFT from "./pages/NFT";
import StakeNFT from "./pages/StakeNFT";
import StakeToken from "./pages/StakeToken";
import Tokenomics from "./pages/Tokenomics";
import News from "./pages/News";
import NFTPass from "./pages/NFTPass";
import EarnCTX from "./pages/EarnCTX";
import Airdrop from "./pages/Airdrop";
import CollectToken from "./pages/CollectToken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tokenomics",
    element: <Tokenomics />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nft-pass",
    element: <NFTPass />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/earn-ctx",
    element: <EarnCTX />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/claim-airdrop",
    element: <Airdrop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/collect-free-token",
    element: <CollectToken />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/nft-membership",
        element: <NFT />,
      },

      {
        path: "/portal",
        element: <Portal />,
      },
      {
        path: "/stakeNFT",
        element: <StakeNFT />,
      },

      {
        path: "/stakeTRC",
        element: <StakeToken />,
      },

    ],
  },

]);


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        embeddedWallet({ recommended: true }),
        trustWallet({ recommended: true }),
      ]}
    >
    <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
