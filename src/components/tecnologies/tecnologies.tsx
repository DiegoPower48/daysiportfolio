"use client";
import { useState } from "react";

import Item from "./item";

interface Props {
  data: {
    title: string;
    frontend: {
      title: string;
      technologies: data[];
    };
    backend: {
      title: string;
      technologies: data[];
    };
    database: {
      title: string;
      technologies: data[];
    };
    tools: {
      title: string;
      technologies: data[];
    };
  };
}

interface data {
  url: string;
  alt: string;
  style: string;
}

function Tecnologias(props: Props) {
  const { title, frontend, backend, database, tools } = props.data;

  const [mode, setMode] = useState(false);

  const allTechnologies = [
    ...frontend.technologies,
    ...backend.technologies,
    ...database.technologies,
    ...tools.technologies,
  ];

  const duplicatedTechnologies = [...allTechnologies, ...allTechnologies];

  const changeModal = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4">
      <p className="font-bold text-Theme text-4xl">{title}:</p>

      <div
        className={`w-full grid grid-rows-auto border-2 border-Theme rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
      >
        <div className="text-textTheme flex justify-center text-3xl font-bold">
          {frontend.title}
        </div>

        <div
          className={`w-full grid grid-rows-auto grid-cols-2  sm:grid-cols-3 md:grid-cols-5 justify-center items-center p-4 gap-3`}
        >
          {frontend.technologies.map((element, i) => (
            <Item data={element} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
