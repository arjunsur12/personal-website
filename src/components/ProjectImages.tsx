"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NextImage from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function ProjectImages({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<ProjectImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close on Escape and lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  if (!images?.length) return null;

  const single = images.length === 1;

  return (
    <>
      <div className={`projImages ${single ? "singleImage" : ""}`}>
        {images.map((img, idx) => (
          <figure key={idx} className="projFigure">
            <button
              type="button"
              className="projImgWrap projImgBtn"
              onClick={() => setActive(img)}
              aria-label={`Expand image: ${img.alt}`}
            >
              <NextImage
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="projImg"
                sizes="(max-width: 820px) 92vw, 420px"
                priority={idx === 0}
              />
            </button>
            {img.caption ? <figcaption className="projCaption">{img.caption}</figcaption> : null}
          </figure>
        ))}
      </div>

      {active &&
        mounted &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActive(null)}
          >
            <figure className="lightboxFigure" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightboxClose"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
              <NextImage
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1067}
                className="lightboxImg"
                sizes="90vw"
              />
              {active.caption ? <figcaption className="lightboxCaption">{active.caption}</figcaption> : null}
            </figure>
          </div>,
          document.body
        )}
    </>
  );
}
