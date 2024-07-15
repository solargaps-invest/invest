import { styles } from '../constants/style-constants';
import { competitionSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const CompetitionSection = () => {
	const { header } = competitionSection;
	return (
		<section className={styles.sectionLayout}>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
		</section>
	);
};
