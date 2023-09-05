import { useEffect } from "react";
import { fetchTweets } from "../../app/features/tweet/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardBody, Center, Container, Flex, Heading } from "@chakra-ui/react";

export default function Index() {

  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.tweet.tweetList)

  useEffect(() => {
    dispatch(fetchTweets())
  },[])

  return (
    <>
      <Container maxW={"container.lg"}>
        <Center>
          <Heading as='h3' margin={"20px 0"}> Tweet </Heading>
        </Center>
        <Flex justifyContent={"space-around"}>
          {tweets?.map((item, index) => (
          <Card w='24%' key={index}>
            <CardHeader backgroundColor={"#1D5D9B"} color={"white"}>
              <Heading as='h4' fontSize={'18px'}>{item.name}</Heading>
            </CardHeader>
            <CardBody>
              {item.tweet}
            </CardBody>
          </Card>
          ))}
        </Flex>
      </Container>
    </>
  );
}
