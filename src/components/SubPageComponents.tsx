'use client'

import { Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useMemo } from 'react'
import { NarrowArrowLeftIcon } from '../icons'
import { ApplicationForm } from './ApplicationForm'
import { Navbar } from './Navbar'
import { SocialShare } from './SocialShare'
import { PageContent } from './blocks/render-blocks'

interface Props {
	data: any
}

export const SubPageComponents = ({ data }: Props) => {
	const formattedDate = useMemo(() => dayjs(data?.createdAt).format('MMM D, YYYY'), [data?.createdAt])

	function removeFirstElement(arr: any[]) {
		const newArr = arr.slice()
		newArr.shift()
		return newArr
	}

	const filteredContent = useMemo(() => removeFirstElement(data?.content ?? []), [data])

	const homeHref = process.env.NODE_ENV === 'production' ? '/' : `/?target=${data.projectId}`

	console.log(data, 'data')

	return (
		<Box>
			<Navbar meta={data?.metadata.elements ?? []} />
			<Box as="section" mt={{ base: '30px', lg: '60px' }} w="100%" h="100%">
				<Flex position="relative" maxW="1260px" justify="center" align="flex-start" mx="auto">
					<Flex
						maxW="960px"
						margin="auto"
						w="100%"
						direction="column"
						h="fit-content"
						justify="center"
						align="flex-start"
						px={{ base: '24px', md: '12px' }}
					>
						<VStack w="100%" mb={'36px'} justify="center" align="flex-start">
							<HStack wrap="wrap" w="100%" justify="space-between" align="center">
								<VStack w="fit-content" justify="center" align="flex-start">
									<Button
										size="sm"
										variant={'outline'}
										as={Link}
										href={homeHref} // React router state holds the previous query param value inside the home
										leftIcon={<NarrowArrowLeftIcon size={16} color="black" />}
										iconSpacing={2}
										colorScheme="gray"
										my={2}
										fontWeight={500}
									>
										All Jobs
									</Button>
									<Text mb={2} fontSize="md" color="fg.muted">
										Published on {formattedDate}
									</Text>
								</VStack>
								<SocialShare />
							</HStack>
							<Heading as="h1" fontSize="42px" fontWeight={700} lineHeight={1.2}>
								{data.title}
							</Heading>
						</VStack>
						<PageContent blocks={filteredContent} />
						<HStack my="32px" justify="space-between" align="center" w="100%">
							<ApplicationForm title={data.title} projectId={data?.projectId} />
							<SocialShare />
						</HStack>
					</Flex>
				</Flex>
			</Box>
		</Box>
	)
}
