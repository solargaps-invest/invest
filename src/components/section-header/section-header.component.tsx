import { styles } from '../../constants/style-constants';

export const SectionHeader = ({ header, headerStyles }: { header: string; headerStyles?: string }) => {
	return <h3 className={`text-center ${styles.h3} ${headerStyles}`}>{header}</h3>;
};
