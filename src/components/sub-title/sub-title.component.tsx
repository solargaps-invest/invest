import { styles } from '../../constants/style-constants';

export const SubTitle = ({ subTitle, subTitleStyles }: { subTitle: string; subTitleStyles?: string }) => {
	return <h4 className={`text-center ${styles.h4} ${subTitleStyles}`}>{subTitle}</h4>;
};
