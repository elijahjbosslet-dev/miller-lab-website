import Image from "next/image";
import Container from "./Container";

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
      <Container
        className={`grid items-center gap-10 lg:grid-cols-2 ${
          imageSide === "left" ? "" : ""
        }`}
      >
        <div className={imageSide === "left" ? "lg:order-2" : ""}>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
        </div>
        <div
          className={`relative h-72 overflow-hidden rounded-2xl sm:h-96 ${
            imageSide === "left" ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
