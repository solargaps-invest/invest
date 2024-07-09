import { useState } from 'react';
import { styles } from '../../constants/style-constants';
import { navLinks } from '../../constants/content-constants';
import { Drawer, IconButton } from '@mui/material';
import { IoMenuSharp, IoClose } from 'react-icons/io5';
import { AnchorButton } from '../anchor-button/anchor-button.component';

type NavbarProps = {
	window?: () => Window;
};

// TODO: remove Drawer?
// TODO: mobile icon to left? 
export const Navbar = ({ window }: NavbarProps) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<nav>
			<div className={`${styles.navBarMob} bg-brand-grey-secondary`}>
				<IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className="block xl:hidden">
					<IoMenuSharp />
				</IconButton>
				<MobileMenu container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
			</div>
			<div className={styles.navBarDesk}>
				{navLinks.map(({ id, title }) => (
					<AnchorButton key={id} href={`#${id}`} className={styles.navLink}>
						<span className="text-xxs font-extrabold tracking-widest">{title.toUpperCase()}</span>
					</AnchorButton>
				))}
			</div>
		</nav>
	);
};

type MobileMenuProps = {
	container: (() => HTMLElement) | undefined;
	mobileOpen: boolean;
	handleDrawerToggle: () => void;
};

const MobileMenu = ({ container, mobileOpen, handleDrawerToggle }: MobileMenuProps) => {
	return (
		<Drawer
			container={container}
			variant="temporary"
			open={mobileOpen}
			onClose={handleDrawerToggle}
			anchor="top"
			ModalProps={{
				keepMounted: true,
			}}
			disableScrollLock={true}
			sx={{
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					width: '100%',
					backgroundColor: '#111111',
					color: '#ffffff',
					textAlign: 'start',
					paddingLeft: '0.75rem',
					paddingTop: '1.05rem',
					paddingBottom: '1.05rem',
				},
			}}
		>
			<IoClose
				onClick={handleDrawerToggle}
				className="text-light-primary hover:text-brand-yellow absolute right-[2rem] top-[1.8rem] text-3xl transition-all duration-300 ease-in-out"
			/>
			{navLinks.map(({ id, title }) => (
				<AnchorButton key={id} href={`#${id}`} className={`${styles.navLink} max-w-[75%]`} onClick={handleDrawerToggle}>
					<span className="text-xxs font-extrabold tracking-widest">{title.toUpperCase()}</span>
				</AnchorButton>
			))}
		</Drawer>
	);
};
