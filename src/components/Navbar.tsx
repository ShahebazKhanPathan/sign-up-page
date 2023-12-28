import { HStack, Switch, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <HStack padding={3} justifyContent="space-between">
            <Text>Login System</Text>
            <Switch>Dark Mode</Switch>
        </HStack>
    )
}

export default Navbar;