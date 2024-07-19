import { styles } from '../constants/style-constants';
import { howItWorksSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { VideoAboutUs } from '../components/video-about-us/video-about-us.component';

export const HowItWorksSection = () => {
	const { header, paragraph, videoUrl } = howItWorksSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<div className={` ${styles.sectionFlex} xl:gap-[13%]`}>
				<div className={`${styles.section37}`}>
					<p className="text-sm font-semibold tracking-wide xl:text-base">{paragraph}</p>
				</div>
				<div className={`${styles.section48}`}>
					<VideoAboutUs videoUrl={videoUrl} />
				</div>
			</div>
		</section>
	);
};
