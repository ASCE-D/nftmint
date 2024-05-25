import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "etherscan-sepolia";
const customChain = {
  // Required information for connecting to the network
    chainId: 80002, // Chain ID of the network
    rpc: ["https://rpc-amoy.polygon.technology/"], // Array of RPC URLs to use
 
  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "Consensys ETH",
    symbol: "MATIC",
  },
  shortName: "amoy", // Display value shown in the wallet UI
  slug: "consensys", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "ConsenSys", // Name of the network
  name: "ConsenSys zkEVM Testnet", // Name of the network
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={"2225c0191997baa814acd65aa79485ee"}
      activeChain={customChain}
    >
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
