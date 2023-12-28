import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LoginBox from "./components/LoginBox";

const App = () => {
  return (
    <>
      <Grid templateAreas={`"header" "main"`}>
        <GridItem area={"header"}>
          <Navbar/>
        </GridItem>
        <GridItem area={"main"}>
          <LoginBox/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App;