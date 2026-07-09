import Image from "next/image";
import Container from "./Container";

export default function ImageBanner({
  src,
  alt,
  eyebrow,
  title,
  description,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative h-[26rem] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/20" />
      <Container className="relative flex h-full items-center">
        <div className="max-w-md text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-7 text-slate-200">{description}</p>
        </div>
      </Container>
    </section>
  );
}
