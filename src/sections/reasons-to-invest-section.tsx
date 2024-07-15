import { Icon } from '../components/icon/icon.component';
import { SectionHeader } from '../components/section-header/section-header.component';
import { reasonsToInvestSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';

export const ReasonsToInvestSection = () => {
	const { header, cards } = reasonsToInvestSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<div
				className={`bg-custom-radial grid grid-cols-2 grid-rows-3 gap-[5rem] rounded-2xl px-24 py-12 xl:grid-cols-3 xl:grid-rows-2`}
			>
				{cards.map(card => (
					<CategoryCard key={card.title} title={card.title} icon={card.icon} />
				))}
			</div>
		</section>
	);
};

// TODO: fix these types and props and use Icons
type CategoryCardProps = {
	title: string;
	icon: { src: string; description?: string };
};

const CategoryCard = ({ title, icon }: CategoryCardProps) => {
	return (
		<div className="flex flex-col gap-4 xl:gap-8">
			<Icon icon={icon} styles="w-14 h-14 xl:w-16 xl:h-16" />
			<span className="text-base font-semibold xl:text-xl">{title}</span>
		</div>
	);
};
