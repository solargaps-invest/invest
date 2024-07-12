import { Icon } from '../components/icon/icon.component';
import { SectionHeader } from '../components/section-header/section-header.component';
import { featuredOnSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';

export const FeaturedOnSection = () => {
	const { header, cards } = featuredOnSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.h3PaddingSm}`} />
			<div className="grid grid-cols-2 gap-4 xl:grid-cols-5 xl:grid-rows-2 xl:gap-6">
				{cards.map(card => {
					return <CategoryCard key={card.description} {...card} />;
				})}
			</div>
		</section>
	);
};

type CategoryCardProps = {
	src: string;
	description?: string;
};

const CategoryCard = (icon: CategoryCardProps) => {
	return (
		<div className="bg-brand-grey-secondary flex flex-col items-center justify-center gap-4 rounded-xl py-[1.875rem] xl:gap-8">
			<Icon icon={icon} styles="w-full h-16" />
		</div>
	);
};
