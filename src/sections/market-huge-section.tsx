import { styles } from '../constants/style-constants';
import { marketHugeSection } from '../constants/content-constants';

export const MarketHugeSection = () => {
	const { header, cards } = marketHugeSection;
	return (
		<section className="bg-market-golden bg-cover">
			<div className={styles.sectionLayout}>
				<h1 className={`${styles.headerPadding} ${styles.h1} text-brand-yellow text-center`}>{header}</h1>
				<div className={`grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3`}>
					{cards.map(card => (
						<StatisticCard {...card} />
					))}
				</div>
			</div>
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
		<div className="bg-custom-radial border-dark-grey flex flex-col items-center justify-center gap-1 rounded-2xl border py-8">
			<h2 className={`${styles.h2} text-brand-yellow`}>{value}</h2>
			<h5 className={`${styles.h5}`}>{title}</h5>
		</div>
	);
};
