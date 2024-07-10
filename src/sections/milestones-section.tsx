import { styles } from '../constants/style-constants';
import { milestonesSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow } from '../components/next-arrow/next-arrow.components';
import { PrevArrow } from '../components/prev-arrow/prev-arrow.component';

export const MilestonesSection = () => {
	const { header, cards } = milestonesSection;

	// TODO: fix slider

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.h3Padding}`} />
			<Slider {...settings} className="max-h-[400px]">
				{cards.map(item => (
					<MilestoneCard key={item.description} {...item} />
				))}
			</Slider>
		</section>
	);
};

type MilestoneCardProps = {
	year: string;
	description: string;
};
const MilestoneCard = (card: MilestoneCardProps) => {
	const { year, description } = card;
	return (
		<div className="flex w-[14rem] flex-col gap-8 xl:gap-9">
			<h4 className="border-brand-yellow text-3.5xl w-fit border-b-4 pb-3 font-semibold">{year}</h4>

			<span className="text-brand-grey-tertiary text-base font-semibold">{description}</span>
		</div>
	);
};
