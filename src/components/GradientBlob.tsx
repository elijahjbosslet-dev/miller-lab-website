// Soft, slowly-drifting gradient shape used behind sections to break up
// flat white/navy fields with color and depth. Pure CSS animation (see
// globals.css .blob-drift) so this stays a server component.
export default function GradientBlob({
  className = "",
  tone = "green",
}: {
  className?: string;
  tone?: "green" | "navy" | "mixed";
}) {
  const gradients: Record<string, string> = {
    green: "radial-gradient(circle at 30% 30%, rgba(0,177,64,0.55), rgba(0,177,64,0) 70%)",
    navy: "radial-gradient(circle at 60% 40%, rgba(16,26,48,0.9), rgba(16,26,48,0) 70%)",
    mixed:
      "radial-gradient(circle at 35% 35%, rgba(58,219,112,0.5), rgba(58,219,112,0) 60%), radial-gradient(circle at 65% 65%, rgba(10,17,32,0.6), rgba(10,17,32,0) 65%)",
  };

  return (
    <div
      aria-hidden="true"
      className={`blob-drift pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ backgroundImage: gradients[tone] }}
    />
  );
}
