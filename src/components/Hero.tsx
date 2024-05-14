'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Navbar } from './Navbar'

interface Props {
	pages: any[]
	meta: any
	project?: any
	accentColor?: string
}

export const Hero = ({ project, pages, meta, accentColor }: Props) => {
	return (
		<Box bgImage={'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'}>
			<Navbar meta={meta ?? []} />
			<Flex
				justify="center"
				align="flex-start"
				p={{ base: '20px', md: '80px', lg: '140px' }}
				direction="column"
				w="100%"
				h="fit-content"
				maxW={{ base: '100%', md: '70%' }}
			>
				<Heading
					textAlign="start"
					as="h1"
					fontSize={{ base: '4xl', lg: '6xl' }}
					fontWeight="bold"
					lineHeight="1.2"
					mb="4"
				>
					{project?.subtitle}
				</Heading>
				<Text fontSize="lg" color="gray.500" mb="4">
					{project?.description}
				</Text>
			</Flex>
		</Box>
	)
}
