import { Alert, AlertIcon, AlertTitle, Box, HStack, Spinner } from "@chakra-ui/react";
import LoginForm, { User } from "./LoginForm";
import axios from "axios";
import { useState } from "react";

const LoginBox = () => {
    const [response, setResponse] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const createUser = (data: User) => {
        setLoading(true);
        axios.post('http://signup-env.eba-dxpaxfbz.ap-south-1.elasticbeanstalk.com/api/users', { data })
            .then(() => {
                setLoading(false);
                setResponse(true);
                setTimeout(()=> setResponse(false), 5000)
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
                setTimeout(() => setError(''), 5000)
            });
    }

    return (
        <HStack justifyContent="space-between">
            <Box></Box>
            <Box padding={5} border="1px" borderColor="white">
                {error && <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{error}</AlertTitle>
                </Alert>}
                {response && <Alert status='success'>
                    <AlertIcon />
                    Data uploaded to the server!
                </Alert>}
                {isLoading && <Spinner/>}
                <LoginForm onSubmit={(data) => createUser(data)}/>
            </Box>
            <Box></Box>
        </HStack>
    )
}

export default LoginBox;