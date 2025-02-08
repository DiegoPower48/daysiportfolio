import React from "react";
import Experience from "./experience";

interface Props {
  data: {
    title: string;
    experience: Experience[];
  };
}

interface Experience {
  work: string;
  duration: string;
  detail: string;
  imagen: string;
}

export default function Proyectos(props: Props) {
  const { title, experience } = props.data;

  return (
    <div className="grid grid-cols-1 grid-rows-[auto,auto] items-center justify-center gap-4">
      <p className="font-bold text-Theme text-4xl">{title}</p>
      <div className="w-full h-full grid grid-rows-auto grid-cols-1 gap-10">
        {experience.map((e: Experience, i: number) => (
          <div
            key={i}
            className="w-full h-full border-2 border-Theme rounded-xl"
          >
            <Experience element={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
