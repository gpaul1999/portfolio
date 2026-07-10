import { skillGroups } from "@/data/site";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border-soft bg-surface p-6"
          >
            <h3 className="mb-4 font-serif text-lg font-medium">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border-soft bg-background px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
