import { useEffect } from "react";

import {
  Button,
  Center,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useToast
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addUser } from "../../app/features/user/userSlice";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup"

const UserSchema = Yup.object().shape({
  name:Yup.string().required().min(5),
  email:Yup.string().required().email(),
  password:Yup.string().required()
})

export default function UserRegister() {

  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(() => {

  },[])

  return (
    <div>
      <Container maxW='container.lg'>
        <Center>
          <Heading margin={"20px 0"} as={"h3"}> User Register </Heading>
        </Center>
        <Formik
          initialValues={{
            name:"",
            email:"",
            password:""
          }}
          onSubmit={(values) => {
            
              dispatch(addUser({
                name:values.name,
                email:values.email,
                password:values.password
              }))
              toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
            

          }}
          validationSchema={UserSchema}

        >
          {({ values, handleChange, handleBlur }) => (<Form>
            <FormControl>
              <FormLabel> Name </FormLabel>
              <Input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name}></Input>
              <ErrorMessage component={"div"} name="name" style={{color:'red'}}></ErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel> Email </FormLabel>
              <Input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}></Input>
              <ErrorMessage component={"div"} name="email" style={{color:'red'}}></ErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel> Password </FormLabel>
              <Input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}></Input>
              <ErrorMessage component={"div"} name="password" style={{color:'red'}}></ErrorMessage>
            </FormControl>
            <Button type="submit" bgColor={"#1D5D9B"} color={"white"} > Submit </Button>
          </Form>)}
        </Formik>
      </Container>
    </div>
  );
}
