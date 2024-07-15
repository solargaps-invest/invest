import { FaCircle } from 'react-icons/fa';
import { SectionHeader } from '../components/section-header/section-header.component';
import { tractionSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';
import { SubHeader } from '../components/sub-header/sub-header.component';

export const TractionSection = () => {
	const { header, cards, subTitle } = tractionSection;
	const { distributor, installations, bullets, img } = cards;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPadding}`} />
			<SubHeader subHeader={subTitle} subHeaderStyles={`${styles.subHeaderPadding}`} />

			<div className={`${styles.sectionFlex} items-center gap-[13%]`}>
				<div className={`${styles.section48} flex flex-col gap-6`}>
					<img src={img.src} alt="" className="max-h-[416px] w-full" />
					<span className="sr-only">{img.description}</span>
					<div className="flex flex-wrap items-center justify-center gap-10 gap-y-6">
						{bullets.map((bullet, index) => (
							<BulletRow key={index} bullet={bullet} />
						))}
					</div>
				</div>

				<div className={`${styles.section37} flex flex-col gap-5`}>
					<StatisticCard {...installations} />
					<StatisticCard {...distributor} />
				</div>
			</div>
		</section>
	);
};

type BulletRowType = {
	bullet: {
		title: string;
		iconColor: string;
	};
};

const BulletRow = ({ bullet }: BulletRowType) => {
	return (
		<div className="flex gap-4">
			<FaCircle className={` ${bullet.iconColor} `} size={24} />
			<span className="text-light-secondary text-base">{bullet.title}</span>
		</div>
	);
};

type StatisticCardProps = {
	title: string;
	value: string;
};

const StatisticCard = (statistic: StatisticCardProps) => {
	const { title, value } = statistic;
	return (
		<div className="bg-custom-radial border-dark-grey flex w-full flex-col items-center justify-center rounded-2xl border py-10">
			<h2 className={`${styles.h2} text-brand-yellow`}>{value}</h2>
			<h4 className={`${styles.h4}`}>{title}</h4>
		</div>
	);
};
