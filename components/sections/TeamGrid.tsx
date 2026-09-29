import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TeamMember } from "@/lib/data/about";

type TeamGridProps = {
  members: TeamMember[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function TeamGrid({
  members,
  eyebrow,
  title = "Expert. Experienced.",
  description = "Fabricators, finishers, mechanics, and designers — one crew across every stage of the build.",
}: TeamGridProps) {
  return (
    <section className="rr-section rr-void">
      <div className="rr-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article key={member.name} className="text-center">
              <div className="rr-card-media rr-aspect-team">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="pt-5">
                <h3 className="m-0 text-[24px] uppercase tracking-[0.02em]">
                  {member.name}
                </h3>
                <p className="rr-muted mt-1 mb-0 text-sm">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
