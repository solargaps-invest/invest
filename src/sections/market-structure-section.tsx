import { styles } from '../constants/style-constants';
import { marketStructureSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

import { BulletItem } from '../components/bullet-item/bullet-item.component';

export const MarketStructureSection = () => {
	const { header, bulletItems, img } = marketStructureSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<div className={` ${styles.sectionFlex} items-center gap-[13%]`}>
				<div className={`${styles.section37}`}>
					<img src={img.src} alt="" className="max-h-[465px] w-full object-contain" />
				</div>
				<ul className={`${styles.section48} bg-custom-radial flex flex-col gap-12 rounded-2xl px-16 py-14`}>
					{bulletItems.map(bulletItem => (
						<BulletItem key={bulletItem.title} textStyles={styles.h5} {...bulletItem} />
					))}
				</ul>
			</div>
		</section>
	);
};
