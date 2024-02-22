import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ZoomInIcon: FC<Props> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M14.8 16c-.3 0-.6-.1-.9-.4l-3.3-3.3c-1.1.8-2.5 1.2-3.8 1.2-3.8 0-6.8-3-6.8-6.7C0 3 3 0 6.8 0c3.7 0 6.8 3 6.8 6.8 0 1.4-.4 2.7-1.2 3.8l3.3 3.3c.2.2.4.5.4.9-.1.7-.6 1.2-1.3 1.2zm-8-13.5c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-2-4.3-4.3-4.3z"
			/>
			<path
				fill="#FFF"
				d="M9 5.8H7.8V4.5c0-.2-.1-.3-.3-.3H6.1c-.2 0-.3.1-.3.3v1.3H4.5c-.2 0-.3.1-.3.3v1.4c0 .2.1.3.3.3h1.3V9c0 .2.1.3.3.3h1.4c.2 0 .3-.1.3-.3V7.8H9c.2 0 .3-.1.3-.3V6.1c0-.2-.1-.3-.3-.3z"
			/>
		</svg>
	);
};
