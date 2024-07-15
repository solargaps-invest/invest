import { IoArrowForward } from 'react-icons/io5';
import { styles } from '../constants/style-constants';
import { heroSection } from '../constants/content-constants';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';
import { VideoAboutUs } from '../components/video-about-us/video-about-us.component';

// TODO: text content to style
// TODO:  text yellow

export const HeroSection = () => {
	const { header, paragraph, button, videoUrl } = heroSection;
	return (
		<section className={`bg-background-hero`}>
			<div className={`${styles.sectionHero} flex`}>
				<div className={` ${styles.section44} text-start"`}>
					<h1 className={styles.h1}>{header}</h1>
					<p>{paragraph}</p>

					<div className="mt-10 flex gap-x-6">
						<AnchorButton href="#contact-us" className={styles.button}>
							<span>{button.toUpperCase()}</span>
							<IoArrowForward size={24} className={`transition-primary-300 group-hover:translate-x-2`} />
						</AnchorButton>
					</div>
				</div>
				<div className={styles.section48}>
					<VideoAboutUs videoUrl={videoUrl} />
				</div>
			</div>
		</section>
	);
};
