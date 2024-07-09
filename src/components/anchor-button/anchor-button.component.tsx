import { PropsWithChildren } from 'react';

type AnchorButtonProps = PropsWithChildren<{ href: string; className?: string; onClick?: () => void }>;

export const AnchorButton = ({ href, ...rest }: AnchorButtonProps) => {
	return <a href={href} {...rest} />;
};
