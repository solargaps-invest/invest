import { statisticSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';

export const StatisticSection = () => {
	const { cards } = statisticSection;
	return (
		<div className={` ${styles.sectionLayout} grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4`}>
			{cards.map(statistic => (
				<StatisticCard key={statistic.title} {...statistic} />
			))}
		</div>
	);
};

type StatisticCardProps = {
	title: string;
	value: string;
};
// TODO: add gradient to card and border color change
const StatisticCard = (statistic: StatisticCardProps) => {
	const { title, value } = statistic;
	return (
		<div className="border-light-primary flex flex-col items-center justify-center rounded-2xl border bg-gradient-to-r px-[4.2rem] py-4">
			<span className={`${styles.cardSpan}`}>{title}</span>
			<h3 className={`${styles.h3} text-brand-yellow`}>{value}</h3>
		</div>
	);
};
