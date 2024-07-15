import { styles } from '../../constants/style-constants';

export const SubHeader = ({ subHeader, subHeaderStyles }: { subHeader: string; subHeaderStyles?: string }) => {
	return <h4 className={`text-center ${styles.h4} ${subHeaderStyles}`}>{subHeader}</h4>;
};
