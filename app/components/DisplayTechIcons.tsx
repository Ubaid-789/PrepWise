"use client";

import { useEffect, useState } from "react";
import { getTechLogos } from "@/lib/utils";
import Image from "next/image";

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<{ tech: string; url: string }[]>(
    []
  );

  useEffect(() => {
    const fetchIcons = async () => {
      const logos = await getTechLogos(techStack);
      setTechIcons(logos);
    };

    fetchIcons();
  }, [techStack]);

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }) => (
        <div
          key={tech}
          className="relative group bg-dark-300 rounded-full p-2 flex-center"
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
            onError={(e) => {
              e.currentTarget.src = "/tech.svg";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
