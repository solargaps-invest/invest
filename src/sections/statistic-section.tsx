import { statisticSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';

export const StatisticSection = () => {
	const { cards } = statisticSection;
	return (
		<section className={` ${styles.sectionLayout} grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4`}>
			{cards.map(statistic => (
				<StatisticCard key={statistic.title} {...statistic} />
			))}
		</section>
	);
};

type StatisticCardProps = {
	title: string;
	value: string;
};

const StatisticCard = (statistic: StatisticCardProps) => {
	const { title, value } = statistic;
	return (
		<div className="bg-custom-radial border-dark-grey flex flex-col items-center justify-center gap-1 rounded-2xl border py-4">
			<span className={`${styles.cardSpan}`}>{title}</span>
			<h3 className={`${styles.h3} text-brand-yellow`}>{value}</h3>
		</div>
	);
};
