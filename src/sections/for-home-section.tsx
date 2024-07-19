import { styles } from '../constants/style-constants';
import { forHomeSection } from '../constants/content-constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slider } from '../components/slider/slider.component';
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
				className="slider-container block max-h-fit w-full"
			>
				{cards.map((item: ForHomeCardProps) => (
					<ForHomeCard key={item.title} {...item} />
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
		<div className={`relative flex w-[25rem] flex-col pt-[20rem] lg:pt-[28rem]`}>
			<img
				src={img.src}
				alt={img.description}
				className="mah-h-[29rem] xl:max-[80%] absolute left-0 top-0 h-[80%] w-full rounded-xl object-cover"
			/>
			<h6 className={`${styles.h6} `}>{title}</h6>
			<span className="text-brand-grey-tertiary text-base">{subtitle}</span>
		</div>
	);
};
