import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/lib/data/home";
import { assets } from "@/lib/assets";

/**
 * Origin / story — 50/50 text + motorcycle media.
 * Original uses reverse column order on tablet/mobile.
 */
export function StorySection() {
  const { story } = homeContent;

  return (
    <section className="rr-section rr-void">
      <div className="rr-container grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="order-2 max-w-[520px] lg:order-1 lg:pr-[82px]">
          <SectionHeading
            eyebrow={story.eyebrow}
            title={story.title}
            description={story.description}
          />
          <p className="rr-muted mt-4 mb-0">{story.body}</p>
          <div className="mt-8">
            <CtaButton href={story.cta.href} variant="outline">
              {story.cta.label}
            </CtaButton>
          </div>
        </div>
        <div className="rr-story-media order-1 lg:order-2">
          <Image
            src={assets.images.motorcycle}
            alt="Custom Road Renegades motorcycle"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
