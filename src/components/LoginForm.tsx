import { Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";

const LoginForm = () => {
    return (
        <FormControl>
            <Heading mb={3}>Sign Up</Heading>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <Button mt={3} colorScheme="blue">Submit</Button>
        </FormControl>
    )
}

export default LoginForm;