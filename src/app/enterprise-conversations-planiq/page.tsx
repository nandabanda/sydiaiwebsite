import { WebinarHero } from "@/components/webinar/WebinarHero";
import { DiscussionTopics } from "@/components/webinar/DiscussionTopics";
import { WhyAttend } from "@/components/webinar/WhyAttend";
import { FeaturedPlatform } from "@/components/webinar/FeaturedPlatform";
import { SpeakerSection } from "@/components/webinar/SpeakerSection";
import { RegistrationForm } from "@/components/webinar/RegistrationForm";
import { FinalCTA } from "@/components/webinar/FinalCTA";

export default function EnterpriseConversationsPage() {
  return (
    <>
      <WebinarHero />
      <DiscussionTopics />
      <WhyAttend />
      <FeaturedPlatform />
      <SpeakerSection />
      <RegistrationForm />
      <FinalCTA />
    </>
  );
}
