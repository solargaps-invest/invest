import { styles } from '../constants/style-constants';
import { investorsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { Icon } from '../components/icon/icon.component';
import { Slider } from '../components/slider/slider.component';

export const InvestorsSection = () => {
	const { header, cards } = investorsSection;

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} variableWidth={true} className={`max-h-[28rem]`}>
				{cards.map(item => (
					<InvestorCard key={item.name} {...item} />
				))}
			</Slider>
		</section>
	);
};

type InvestorCardProps = {
	avatar: { src: string; description?: string };
	feedback: string;
	icon: { src: string; description?: string };
	name: string;
};

const InvestorCard = ({ feedback, name, icon, avatar }: InvestorCardProps) => {
	return (
		<div className="border-brand-grey box-border flex h-[25rem] w-[25rem] flex-col justify-between rounded-xl border px-12 py-10">
			<div className="flex flex-col items-center gap-4">
				<Icon icon={icon} styles="rounded-2xl p-4 w-12 h-12 text-center border rounded-full border-brand-grey-secondary" />
				<span className="text-center font-light">{feedback}</span>
			</div>
			<div className="flex flex-col items-center gap-4">
				<Icon icon={avatar} styles="w-16 h-16 rounded-full object-cover" />
				<span className="font-bold">{name}</span>
			</div>
		</div>
	);
};
