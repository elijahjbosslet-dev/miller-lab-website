import Image from "next/image";
import Container from "./Container";
import FramedPanel from "./FramedPanel";

export default function SplitImageSection({
  src,
  alt,
  eyebrow,
  title,
  description,
  imageSide = "right",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSide?: "left" | "right";
}) {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className={imageSide === "left" ? "lg:order-2" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
        </div>
        <FramedPanel
          className={`h-72 sm:h-96 ${imageSide === "left" ? "lg:order-1 ml-3" : "mr-3"}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="eager"
            className="object-cover"
          />
        </FramedPanel>
      </Container>
    </section>
  );
}
