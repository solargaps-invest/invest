import { Footer } from './components/footer/footer.component';
import {
	HeaderSection,
	HeroSection,
	StatisticSection,
	ReasonsToInvestSection,
	TractionSection,
	RevenueSection,
	MilestonesSection,
	AwardsSection,
	DownloadInvestorDeckSection,
	FeaturedOnSection,
	PressAboutUsSection,
	ProblemSolutionSection,
	HowItWorksSection,
	CompetitionSection,
	MarketHugeSection,
	MarketStructureSection,
	OurBusinessModelSection,
	InstallationsSection,
	InvestorsSection,
} from './sections';

function App() {
	return (
		<div>
			<HeaderSection />
			<HeroSection />
			<StatisticSection />
			<ReasonsToInvestSection />
			<TractionSection />
			<RevenueSection />
			<MilestonesSection />
			<AwardsSection />
			<InvestorsSection />
			<DownloadInvestorDeckSection />
			<FeaturedOnSection />
			<PressAboutUsSection />
			<ProblemSolutionSection />
			<HowItWorksSection />
			<CompetitionSection />
			<MarketHugeSection />
			<MarketStructureSection />
			<DownloadInvestorDeckSection />
			<OurBusinessModelSection />
			<InstallationsSection />
			<Footer />
		</div>
	);
}

export default App;
