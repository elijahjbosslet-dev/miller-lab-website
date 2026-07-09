import type { Researcher } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ResearcherCard({ researcher }: { researcher: Researcher }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-green-400">
        {initials(researcher.name)}
      </div>
      <p className="mt-4 font-display font-semibold text-slate-900">
        {researcher.name}
        {researcher.credentials ? `, ${researcher.credentials}` : ""}
      </p>
      <p className="mt-1 text-sm text-slate-500">{researcher.program}</p>
      {researcher.focus && (
        <p className="mt-3 text-sm leading-6 text-slate-600">{researcher.focus}</p>
      )}
    </div>
  );
}
