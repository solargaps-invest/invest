import { ForHomeSection } from './for-home-section';
import { installationsSection } from '../constants/content-constants';
import { styles } from '../constants/style-constants';
import { SectionHeader } from '../components/section-header/section-header.component';

export const InstallationsSection = () => {
	const { header } = installationsSection;
	return (
		<div>
			<SectionHeader header={header} headerStyles={`${styles.headerPaddingSm}`} />
			<ForHomeSection />
		</div>
	);
};
