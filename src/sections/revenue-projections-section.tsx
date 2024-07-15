import { revenueSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';
import { SubHeader } from '../components/sub-header/sub-header.component';

export const RevenueSection = () => {
	const { img, subTitle } = revenueSection;

	return (
		<section className={`${styles.sectionLayout}`}>
			<SubHeader subHeader={subTitle} subHeaderStyles={`${styles.subHeaderPadding}`} />
			<div className="bg-custom-radial rounded-2xl px-[7.8rem] py-12">
				<img src={img.src} alt={img.description} className="h-full max-h-[35rem] w-full rounded-xl object-cover object-center" />
			</div>
		</section>
	);
};
