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
  HowItWorksSection
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
			<DownloadInvestorDeckSection />
			<FeaturedOnSection />
			<PressAboutUsSection />
			<ProblemSolutionSection />
      <HowItWorksSection />
		</div>
	);
}

export default App;
