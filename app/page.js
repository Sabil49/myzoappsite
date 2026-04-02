"use client"
import Navbar from './components/Navbar'
import HeroSection from './(sections)/HeroSection'
import AboutSection from './(sections)/AboutSection'
import StatsSection from './(sections)/StatsSection'
import VideoTestimonialSection from './(sections)/VideoTestimonialSection'
import CaseStudySection from './(sections)/CaseStudySection'
import ServicesSection from './(sections)/ServicesSection'
import PricingSection from './(sections)/PricingSection'
import CTASection from './(sections)/CTASection'
import FooterSection from './(sections)/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection id="howwework" />
      <StatsSection />
      <VideoTestimonialSection id="reviews" />
      <CaseStudySection id="portfolio" />
      <ServicesSection id="services" />
      <PricingSection id="pricing" />
      <CTASection id="process" />
      <FooterSection />
    </div>
  )
}
