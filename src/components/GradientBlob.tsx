// Soft, slowly-drifting gradient shape used behind sections to break up
// flat white/navy fields with color and depth. Multi-stop, multi-layer
// gradients (not a single flat circle) so it reads as atmosphere rather
// than a color swatch. Pure CSS animation (see globals.css .blob-drift)
// so this stays a server component.
export default function GradientBlob({
  className = "",
  tone = "green",
}: {
  className?: string;
  tone?: "green" | "navy" | "mixed" | "aurora";
}) {
  const gradients: Record<string, string> = {
    green:
      "radial-gradient(circle at 28% 26%, rgba(58,219,112,0.55), rgba(58,219,112,0.18) 45%, rgba(0,177,64,0) 72%)," +
      "radial-gradient(circle at 68% 72%, rgba(0,177,64,0.35), rgba(0,177,64,0) 60%)",
    navy:
      "radial-gradient(circle at 60% 35%, rgba(27,41,66,0.9), rgba(16,26,48,0.35) 50%, rgba(16,26,48,0) 75%)",
    mixed:
      "radial-gradient(circle at 32% 32%, rgba(58,219,112,0.5), rgba(58,219,112,0) 58%)," +
      "radial-gradient(circle at 68% 68%, rgba(10,17,32,0.65), rgba(10,17,32,0) 62%)",
    aurora:
      "radial-gradient(circle at 22% 20%, rgba(58,219,112,0.5), rgba(58,219,112,0) 45%)," +
      "radial-gradient(circle at 78% 30%, rgba(0,177,64,0.35), rgba(0,177,64,0) 50%)," +
      "radial-gradient(circle at 50% 80%, rgba(16,26,48,0.55), rgba(16,26,48,0) 55%)",
  };

  return (
    <div
      aria-hidden="true"
      className={`blob-drift pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ backgroundImage: gradients[tone] }}
    />
  );
}
