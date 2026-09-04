import AboutHero from "@/components/AboutHero";
import VisionMissionSection from "@/components/VisionMissionSection";
import JourneySection from "@/components/JourneySection";
import LeadershipSection from "@/components/LeadershipSection";

import AboutStatsSection from "@/components/AboutStatsSection";
import AboutContactCTA from "@/components/AboutContactCTA";
export default function AboutPage() {
    return (
        <main>

            <AboutHero />
            <VisionMissionSection />
            <LeadershipSection />
            <JourneySection />

            <AboutStatsSection />
            <AboutContactCTA />
        </main>
    );
}