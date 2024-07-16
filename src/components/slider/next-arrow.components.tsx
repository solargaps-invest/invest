import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

export function NextArrow({ className, style, onClick }: ArrowProps) {
	return (
		<MdOutlineKeyboardArrowRight
			className={`${className} z-10 h-12 w-12 text-brand-yellow hover:text-brand-yellow-secondary `}
			style={style}
			onClick={onClick}
			size={48}
		/>
	);
}
