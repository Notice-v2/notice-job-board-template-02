export const DEFAULT_COLOR = '#3182CE'

import { theme } from '@chakra-ui/pro-theme'
import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

export function createTheme() {
	const proTheme = extendTheme(theme)

	const extension = {
		colors: { ...proTheme.colors, brand: proTheme.colors.blue },
		fonts: {
			heading: `-apple-system, BlinkMacSystemFont, sans-serif`,
			body: `-apple-system, BlinkMacSystemFont, sans-serif`,
		},
		styles: {
			global: {
				'html, body': {
					bg: '#fff1eb',
				},
			},
		},
		components: {
			Code: codeTheme,
		},
	}

	return extendTheme(extension, proTheme)
}

const notice = defineStyle({
	borderRadius: '4px',
	fontSize: 'sm',
	padding: '1px',
	fontWeight: 600,
	color: '#b44437',
	background: 'rgba(250,239,240,.78)',
})

export const codeTheme = defineStyleConfig({
	variants: { notice: notice },
})
