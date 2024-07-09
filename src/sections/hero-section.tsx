import { IoArrowForward } from 'react-icons/io5';
import { styles } from '../constants/style-constants';
import { heroSection } from '../constants/content-constants';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';

// TODO: text content to style
// TODO:  text yellow 

export const HeroSection = () => {
	const { header, paragraph, button } = heroSection;
	return (
		<section className={`bg-background-hero`}>
			<div className={`${styles.sectionHero} flex`}>
				<div className="lg:flex-44 w-full text-start">
					<h1 className={styles.h1}>{header}</h1>
					<p>{paragraph}</p>

					<div className="mt-10 flex gap-x-6">
						<AnchorButton href="#contact-us" className={styles.button}>
							<span>{button.toUpperCase()}</span>
							<IoArrowForward size={24} className={`transition-primary-300 group-hover:translate-x-2`} />
						</AnchorButton>
					</div>
				</div>
				<div className="lg:flex-50 w-full">Video</div>
			</div>
		</section>
	);
};
