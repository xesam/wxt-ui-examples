import { Box, Flex, Text } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider.tsx";
import { Button } from "@/components/ui/button.tsx";
import "./App.css";

function App() {
  return (
    <Provider>
      <Box w={56} p={12}>
        <Text p={4} textStyle="xl" color={"red"}>chakra ui</Text>
        <Flex direction={'column'} gap={4}>
          <Button>Button</Button>
          <Button variant={"subtle"}>Button</Button>
          <Button variant={"outline"}>Button</Button>
        </Flex>
      </Box>
    </Provider>
  );
}

export default App;
