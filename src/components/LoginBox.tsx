import { Box, HStack } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const LoginBox = () => {
    return (
        <HStack justifyContent="space-between">
            <Box></Box>
            <Box padding={5} border="1px" borderColor="white">
                <LoginForm/>
            </Box>
            <Box></Box>
        </HStack>
    )
}

export default LoginBox;