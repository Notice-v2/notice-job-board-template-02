'use client'

import { useSelectedTag } from '@/providers/selectedTagProvider'
import { Box, Flex, Tag } from '@chakra-ui/react'
import { useMemo } from 'react'
import { Hero } from './Hero'
import { JobListing } from './JobListing'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	const { selectedTag, setSelectedTag } = useSelectedTag()

	const tags: string[] = useMemo(
		() => data?.pages.reduce((acc: any, page: any) => [...acc, ...(page?.tags ?? [])], []),
		[data?.pages]
	)

	const duplicateTags = useMemo(
		() =>
			tags.filter((item, pos) => {
				return tags.indexOf(item) == pos
			}),
		[tags]
	)

	return (
		<Box>
			<Box as="section">
				<Hero
					meta={data?.metadata ?? []}
					project={data?.project}
					pages={data?.pages}
					accentColor={data?.project?.accentColor}
				/>
			</Box>
			<Box
				position="relative"
				mt={{ base: '30px', lg: '24px' }}
				px={{ base: '20px', md: '80px', lg: '140px' }}
				w="100%"
				as="section"
			>
				<Flex direction="column">
					<Box w="90%" mb="20px" h="fit-content" overflow="scroll">
						{duplicateTags.map((tag: string) => {
							return (
								<Tag
									key={tag}
									as="button"
									onClick={() => setSelectedTag(tag)}
									px={4}
									py={2}
									mx={2}
									my={2}
									borderRadius="full"
									bg={selectedTag === tag ? data?.project?.accentColor : '#B5E1F7'}
									color={selectedTag === tag ? 'white' : 'black'}
									transition="all 0.2s"
									_hover={{ bg: data?.project?.accentColor, color: 'white' }}
								>
									{tag}
								</Tag>
							)
						})}
					</Box>

					<JobListing pages={data?.pages} accentColor={data?.project?.accentColor} />
				</Flex>
			</Box>
		</Box>
	)
}
