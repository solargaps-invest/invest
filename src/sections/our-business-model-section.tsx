import { SectionHeader } from '../components/section-header/section-header.component';
import { ourBusinessModelSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';
import { LuDot } from 'react-icons/lu';

export const OurBusinessModelSection = () => {
	const { header, img, bulletItems, cards } = ourBusinessModelSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<div className={` ${styles.sectionFlex} xl:gap-[4%]`}>
				<div className={`${styles.section48} border-brand-grey relative rounded-2xl border pb-[14.25rem] pl-12 pt-12`}>
					<ul className="flex flex-col gap-4">
						{bulletItems.map(bulletItem => (
							<BulletItem key={bulletItem.title} textStyles={styles.h6} {...bulletItem} />
						))}
					</ul>
					<img src={img.src} alt="" className="absolute bottom-0 right-0 max-h-[196px] w-full object-cover" />
				</div>
				<div className={`${styles.section48} flex gap-[4%]`}>
					{cards.map(card => (
						<BusinessModelCard key={card.title} {...card} />
					))}
				</div>
			</div>
		</section>
	);
};

type BulletItemProps = {
	title: string;
	textStyles: string;
};
const BulletItem = ({ title, textStyles }: BulletItemProps) => {
	return (
		<li className="flex items-center gap-4">
			<LuDot size={16} />
			<span className={textStyles}>{title}</span>
		</li>
	);
};

type CategoryCardProps = {
	title: string;
	paragraph1: string;
	paragraph2: string;
	paragraph3: string;
	paragraph4: string;
	paragraph5: string;
	subTitle: string;
};

const BusinessModelCard = ({ title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, subTitle }: CategoryCardProps) => {
	return (
		<div className="bg-custom-radial flex-48 flex flex-col items-center justify-between gap-4 rounded-2xl pt-12">
			<h4 className={`${styles.h4} text-brand-yellow`}>{title}</h4>
			<h6 className={styles.h6}>{paragraph1}</h6>
			<h6 className={styles.h6}>{paragraph2}</h6>
			<h6 className={styles.h6}>{paragraph3}</h6>
			<h6 className={`${styles.h6} text-brand-yellow`}>{paragraph4}</h6>
			<h6 className={styles.h6}>{paragraph5}</h6>
			<h4 className={`${styles.h4} bg-dark-yellow w-full rounded-b-2xl py-8 text-center`}>{subTitle}</h4>
		</div>
	);
};
