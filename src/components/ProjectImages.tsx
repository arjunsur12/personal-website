import NextImage from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function ProjectImages({ images }: { images: ProjectImage[] }) {
  if (!images?.length) return null;

  const single = images.length === 1;

  return (
    <div className={`projImages ${single ? "singleImage" : ""}`}>
      {images.map((img, idx) => (
        <figure key={idx} className="projFigure">
          <div className="projImgWrap">
            <NextImage
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="projImg"
              sizes="(max-width: 820px) 92vw, 420px"
              priority={idx === 0}
            />
          </div>
          {img.caption ? <figcaption className="projCaption">{img.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}