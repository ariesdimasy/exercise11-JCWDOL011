import { useEffect } from "react";
import { fetchTweets, postTweet } from "../../app/features/tweet/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardHeader, CardBody, Center, 
  Container, Flex, Heading,  FormControl, FormLabel, 
  Textarea } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup"

const PostSchema = Yup.object().shape({
  tweet:Yup.string().required().min(5).max(50)
})

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
        <Formik
          initialValues={{
            tweet:""
          }}
          onSubmit={(values) => {+
            console.log("ini jalan")
            dispatch(postTweet({
              tweet:values.tweet,
              "user_id": 1,
              "name": "Aries Dimas",
            }))
             console.log("ini jalan")
          }}
          
          validationSchema={PostSchema}
        >
          {({values, handleChange, handleBlur }) => (<Form>
            <FormControl>
              <FormLabel> Tweet: </FormLabel>
              <Textarea name="tweet" onChange={handleChange} onBlur={handleBlur}  ></Textarea>
              <ErrorMessage name="tweet" component={"div"} style={{color:'red'}}  />
               <div>{values.tweet.length} / 50</div>
               <Button type='submit'> Submit </Button>
            </FormControl>
          </Form>)}
         
        </Formik>
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
