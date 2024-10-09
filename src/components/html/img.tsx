import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData | string;
  className?: string;
  priority?: boolean;
};

export default function Img({ alt, src, className, priority }: Props) {
  return (
    <Image
      alt={alt}
      width={1000}
      height={1000}
      src={src}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      className={className}
    />
  );
}
