import { Box, Container, Flex, Heading, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useMetadata } from "@thirdweb-dev/react";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {

  const address = useAddress();
  const contractAddress = '0x98Ae548B5ebBDEEf6A6Fc4106b6b7151d90Ea0e8';
  const { contract } = useContract(contractAddress);
  const { data : metadata, isLoading: isLoadingMetadata } = useMetadata(contract);
  const { data : totalMinted, isLoading : isLoadingMinted} = useContractRead(contract, "totalMinted")
  

  return (
   <>
    <Container maxW={"1200px"}>
      <Flex  p={"20px"} justifyContent={"space-between"}>
      <Box>

      </Box>
      <ConnectWallet/>
      </Flex>
      
      <Flex h={"90vh"} alignItems={"center"} justifyContent={"center"} >
        <SimpleGrid columns={2} spacing={10} justifyItems={"center"}>
        <Box>
          <Skeleton isLoaded={!isLoadingMetadata}>
            <MediaRenderer
              src={(metadata as {image: string})?.image}

            />
          </Skeleton>
        </Box>
        <Flex direction={"column"} justifyContent={"center"}>
          <Stack direction={"column"} spacing={4}>
          <Skeleton isLoaded={!isLoadingMetadata}>
            <Heading>{(metadata as {name? : string})?.name}</Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoadingMetadata}>
            <Text>{(metadata as {description? : string})?.description}</Text>
          </Skeleton>

          <Skeleton isLoaded={!isLoadingMinted}>
            <p>Total Minted : {totalMinted?.toNumber()}/5</p>
          </Skeleton>
          {address ? (
             <Web3Button
                contractAddress={contractAddress}
                action={(contract) => contract.erc721.claim(1)}
             >Claim</Web3Button>
          ) : (
            <Text>Please connect your wallet</Text>
          )}
        </Stack>
        </Flex>
        </SimpleGrid>
      </Flex>
    </Container>
   </>
  );
};

export default Home;
