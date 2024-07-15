import { styles } from '../constants/style-constants';
import { pressAboutUsSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { FC } from 'react';

export const PressAboutUsSection = () => {
	const { header, cards } = pressAboutUsSection;

	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPadding}`} />

			<div className="grid grid-cols-1">
				{cards.map(card => (
					<PressCard key={card.subtitle} card={card} />
				))}
			</div>
		</section>
	);
};

// TODO: Cards flex: 1 1 auto;
type PressCardProps = {
	card: {
		title: string;
		subtitle: string;
		button: string;
		date: string;
		img: {
			src: string;
			description: string;
		};
		linkHref: string;
	};
};

// TODO: update font size
// TODO: update padding pr-16 to gap between elements

const PressCard: FC<PressCardProps> = ({ card }) => {
	const { title, subtitle, button, date, img, linkHref } = card;
	return (
		<div className="border-brand-grey flex flex-col justify-center border-y py-8 lg:flex-row">
			<div className="flex-32 flex flex-col gap-3 xl:flex-row xl:gap-0 xl:pr-16">
				<span className="flex-20 text-brand-grey-tertiary text-sm">{date}</span>
				<div className="bg-light-primary max-w-[18.75rem] flex-1 rounded-lg px-7 pb-9 pt-[53px]">
					<img src={img.src} alt={img.description} className="max-h-[5.7rem] w-full max-w-[14.75rem]" />
				</div>
			</div>
			<div className="flex-59 flex flex-col gap-5 pt-5 xl:pt-0">
				<h4 className={styles.h4}>{title}</h4>
				<span className="text-brand-grey-tertiary text-base font-semibold xl:text-xl">{subtitle}</span>
				<a href={linkHref} className="text-brand-yellow text-base font-semibold xl:pt-3" target="_blank" rel="noopener noreferrer">
					{button}
				</a>
			</div>
		</div>
	);
};
