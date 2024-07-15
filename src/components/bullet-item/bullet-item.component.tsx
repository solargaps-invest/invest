import { FaCircle } from 'react-icons/fa';

type BulletItemProps = {
	title: string;
	iconColor: string;
	textStyles?: string;
};

export const BulletItem = (bulletItem: BulletItemProps) => {
	const { title, iconColor, textStyles } = bulletItem;
	return (
		<li className="flex gap-4">
			<FaCircle className={` ${iconColor} `} size={24} />
			<span className={`text-light-secondary text-base ${textStyles}`}>{title}</span>
		</li>
	);
};
