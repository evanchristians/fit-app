import { Flex, useColorMode } from '@chakra-ui/core'

export const Container = (props: any) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'white', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      minH="100vh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
