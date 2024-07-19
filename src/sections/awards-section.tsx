import { styles } from '../constants/style-constants';
import { awardsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { Icon } from '../components/icon/icon.component';
import { Slider } from '../components/slider/slider.component';

export const AwardsSection = () => {
	const { header, cards } = awardsSection;

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<div className="3xl:grid grid-cols-awards hidden gap-10">
				{cards.map(award => (
					<AwardCard key={award.title} title={award.title} subtitle={award.subtitle} icon={award.icon} />
				))}
			</div>
			<Slider
				infinite={true}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				variableWidth={true}
				className={`3xl:hidden block max-h-[20rem]`}
			>
				{cards.map(item => (
					<AwardCard key={item.title} {...item} />
				))}
			</Slider>
		</section>
	);
};

type AwardCardProps = {
	title: string;
	subtitle: string;
	icon: { src: string; description?: string };
};

const AwardCard = ({ title, subtitle, icon }: AwardCardProps) => {
	return (
		<div className="3xl:w-auto 3xl:h-[16.5rem] border-brand-grey box-border flex h-[16.25rem] w-[14rem] flex-col justify-between gap-8 rounded-xl border px-8 pb-8 pt-12 lg:h-[14.5rem] xl:gap-9">
			<Icon icon={icon} styles="w-max" />
			<div className="gap-px">
				<h4 className="text-base font-semibold">{title}</h4>
				<span className="text-xxs text-brand-grey-tertiary">{subtitle}</span>
			</div>
		</div>
	);
};
