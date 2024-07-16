import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface ArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}
export function PrevArrow({ className, style, onClick }: ArrowProps) {
	return (
		<MdOutlineKeyboardArrowLeft
			className={`${className} z-10 h-12 w-12 text-brand-yellow hover:text-brand-yellow-secondary`}
			size={48}
			style={style}
			onClick={onClick}
		/>
	);
}
