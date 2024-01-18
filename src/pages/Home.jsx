import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import FounderPage from '../components/FounderPage'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ReadyForJourney from '../components/ReadyForJourney'
import SubFooter from '../components/SubFooter'
import SubHeroSection from '../components/SubHeroSection'
import WaitNo from '../components/WaitNo'

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <SubHeroSection />
            <ReadyForJourney />
            <WaitNo />
            <FounderPage />
            <Blogs />
            <Footer />
            <SubFooter />
        </>
    )
}
