import { Icon } from '../components/icon/icon.component';
import { styles } from '../constants/style-constants';
import { problemSolutionSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

// TODO: finish

export const ProblemSolutionSection = () => {
	const { header, section1, section2 } = problemSolutionSection;
	return (
		<section>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<GeneralSection section={section1} sectionStyle="bg-custom-radial" />
			<GeneralSection section={section2} sectionStyle="bg-background-yellow" flexStyle="flex-row-reverse" />
		</section>
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
			<div className={` ${styles.sectionLayout} ${styles.sectionFlex} items-center xl:gap-[13%] ${flexStyle} `}>
				<ul className={` ${styles.section37} flex flex-col gap-8 xl:gap-16`}>
					{section.bulletItems.map(bulletItem => (
						<ListItem key={bulletItem.title} {...bulletItem} />
					))}
				</ul>
				<div className={` ${styles.section48} flex flex-col gap-5`}>
					<img src={section.img.src} alt="" className="max-h-[416px] w-full object-cover" />
				</div>
			</div>
		</div>
	);
};

type ListItemProps = {
	title: string;
	icon: {
		src: string;
		description?: string;
		background: string;
	};
};

const ListItem = (bullet: ListItemProps) => {
	return (
		<li className="flex items-center gap-4">
			<Icon styles={`rounded-2xl p-4 w-16 h-16 ${bullet.icon.background}`} icon={bullet.icon} />
			<span className="text-3xl font-semibold">{bullet.title}</span>
		</li>
	);
};
