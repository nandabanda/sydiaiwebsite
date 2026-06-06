import { WebinarHero } from "@/components/webinar/WebinarHero";
import { EventCard } from "@/components/webinar/EventCard";
import { WhyAttend } from "@/components/webinar/WhyAttend";
import { DiscussionTopics } from "@/components/webinar/DiscussionTopics";
import { FeaturedPlatform } from "@/components/webinar/FeaturedPlatform";
import { SpeakerSection } from "@/components/webinar/SpeakerSection";
import { RegistrationForm } from "@/components/webinar/RegistrationForm";
import { FinalCTA } from "@/components/webinar/FinalCTA";

export default function EnterpriseConversationsPage() {
  return (
    <>
      <WebinarHero />
      <EventCard />
      <WhyAttend />
      <DiscussionTopics />
      <FeaturedPlatform />
      <SpeakerSection />
      <RegistrationForm />
      <FinalCTA />
    </>
  );
}
