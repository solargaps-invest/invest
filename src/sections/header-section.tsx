import { IoArrowForward } from 'react-icons/io5';
import { AnchorButton } from '../components/anchor-button/anchor-button.component';
import { Icon } from '../components/icon/icon.component';
import { Navbar } from '../components/navbar/navbar.component';
import { logoIcon, buttons } from '../constants/content-constants';
import { styles } from '../constants/style-constants';

export const HeaderSection = () => {
	return (
		<header className="bg-brand-grey-secondary" aria-label="Global">
			<div className={styles.header}>
				<AnchorButton href="#">
					<Icon icon={logoIcon} styles="h-8 w-auto max-w-[136px]" />
				</AnchorButton>
				<Navbar />
				<AnchorButton href="#contact-us" className={styles.buttonSm}>
					<span>{buttons.invest.toUpperCase()}</span>
					<IoArrowForward size={24} className={`transition-primary-300 group-hover:translate-x-2`} />
				</AnchorButton>
			</div>
		</header>
	);
};
