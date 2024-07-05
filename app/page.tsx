import HowItWorks from "@/components/howItWorks/page";
import PickYourPlan from "@/components/pickYourPlan/page";
import SocialPosts from "@/components/posts/page";
import TopSection from "@/components/topSection/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopSection />
      <PickYourPlan />
      <HowItWorks />
      <SocialPosts />
    </div>
  );
}
