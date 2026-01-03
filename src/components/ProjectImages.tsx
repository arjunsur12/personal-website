import NextImage from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function ProjectImages({ images }: { images: ProjectImage[] }) {
  if (!images?.length) return null;

  return (
    <div className="projImages">
      {images.map((img, idx) => (
        <figure key={`${img.src}-${idx}`} className="projFigure">
          <div className="projImgWrap">
            <NextImage
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="projImg"
              sizes="(max-width: 820px) 92vw, 420px"
              quality={95}
              priority={idx === 0}
            />
          </div>
          {img.caption ? <figcaption className="projCaption">{img.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}