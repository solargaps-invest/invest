import { styles } from '../constants/style-constants';
import { forHomeSection } from '../constants/content-constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slider } from '../components/slider/slider.component';
// import Slider from 'react-slick';
// import { NextArrow } from '../components/next-arrow/next-arrow.components';
// import { PrevArrow } from '../components/prev-arrow/prev-arrow.component';
import { SubHeader } from '../components/sub-header/sub-header.component';

export const ForHomeSection = () => {
	const { subHeader, id, cards } = forHomeSection;

	return (
		<section className={styles.sectionLayout} id={id}>
			<SubHeader subHeader={subHeader} subHeaderStyles={`${styles.subHeaderPadding}`} />

			<Slider
				infinite={true}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				variableWidth={true}
				className="xl:slider-container max-h-[16.25rem] lg:max-h-80 xl:block xl:max-h-fit xl:w-full"
			>
				{cards.map((item: ForHomeCardProps) => (
					<ForHomeCard key={item.title} title={item.title} img={item.img} subtitle={item.subtitle} />
				))}
			</Slider>
		</section>
	);
};

type ForHomeCardProps = {
	title: string;
	img: {
		src: string;
		description: string;
	};
	subtitle: string;
};

const ForHomeCard = ({ title, img, subtitle }: ForHomeCardProps) => {
	return (
		<div className={`relative flex max-h-[220px] min-w-[224px] flex-col pt-[11.5rem] md:max-h-[300px] xl:max-h-[39rem] xl:pt-[28rem]`}>
			<img
				src={img.src}
				alt={img.description}
				className="absolute left-0 top-0 h-[85%] max-h-[168px] w-full rounded-xl object-cover xl:max-h-fit"
			/>
			<h6 className={styles.h6}>{title}</h6>
			<span className="text-brand-grey-tertiary text-base">{subtitle}</span>
		</div>
	);
};
