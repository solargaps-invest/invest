import { Icon } from '../components/icon/icon.component';
import { styles } from '../constants/style-constants';
import { problemSolutionSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

// TODO: finish

export const ProblemSolutionSection = () => {
	const { header, section1, section2 } = problemSolutionSection;
	return (
		<section>
			<SectionHeader header={header} headerStyles={`${styles.h3PaddingSm}`} />
			<GeneralSection section={section1} sectionStyle="bg-custom-radial" />
			<GeneralSection section={section2} sectionStyle="bg-background-yellow" flexStyle="flex-row-reverse" />
		</section>
	);
};

type BulletRowType = {
	title: string;
	icon: {
		src: string;
		description?: string;
	};
};

const BulletRow = (bullet: BulletRowType) => {
	return (
		<div className="flex items-center gap-4">
			<Icon styles="rounded-2xl p-4 bg-custom-radial" icon={bullet.icon} />
			<span className="text-3xl font-semibold">{bullet.title}</span>
		</div>
	);
};

type GeneralSectionType = {
	section: typeof problemSolutionSection.section1;
	sectionStyle?: string;
	flexStyle?: string;
};
const GeneralSection = ({ section, sectionStyle, flexStyle }: GeneralSectionType) => {
	return (
		<div className={sectionStyle}>
			<div className={` ${styles.sectionLayout} ${styles.flexSection} items-center ${flexStyle} `}>
				<div className={`${styles.section40} flex flex-col gap-8 xl:gap-16`}>
					{section.bullets.map(bullet => (
						<BulletRow key={bullet.title} {...bullet} />
					))}
				</div>
				<div className={`${styles.section60} flex flex-col gap-5`}>
					<img src={section.img.src} alt="" className="max-h-[416px] w-full" />
				</div>
			</div>
		</div>
	);
};
