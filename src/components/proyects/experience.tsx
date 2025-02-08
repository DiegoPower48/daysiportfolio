import React from "react";

interface Props {
  element: {
    work: string;
    duration: string;
    detail: string;
    imagen: string;
  };
}

export default function Experience(props: Props) {
  const { work, duration, detail, imagen } = props.element;

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[auto,auto] md:grid-cols-[1fr,2fr] p-4 gap-4">
      <div className="flex items-center justify-center ">
        <img className=" " src={imagen} />
      </div>
      <div className="h-full w-full grid grid-rows-[1fr,2fr] gap-1">
        <div className="h-full">
          <div className="text-3xl  text-Theme uppercase">{work}</div>
          <div className="">{duration}</div>
        </div>
        <div className="">{detail}</div>
      </div>
    </div>
  );
}
