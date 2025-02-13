"use client";

interface Props {
  data: {
    first: {
      name: string;
      work: string;
    };
    second: {
      seccion: string;
      detail: string;
    };
    third: {
      seccion: string;
      detail: string;
    };
    foto: string;
    button: string;
    links: {
      area1: {
        seccion: string;
        detail: string;
        image: string;
      };
      area2: {
        seccion: string;
        detail: string;
        image: string;
      };
    };
  };
}

function Resume(props: Props) {
  const { first, second, third, links, foto, button } = props.data;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.doc";
    link.download = "DaysiAscaCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full grid grid-rows-[auto,auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[3fr,4fr] items-center justify-center">
      <div className="h-full w-full grid grid-rows-[3fr,2fr,2fr] items-center justify-center p-5 ">
        <div className="h-full grid grid-rows-[3fr,1fr] font-bold items-center">
          <p className=" text-6xl text-center ">{first.name}</p>
          <p className=" text-xl text-start text-Theme">{first.work}</p>
        </div>
        <div className="w-full grid gap-2 justify-start">
          <div className="flex space-x-3 ">
            <p className="font-bold text-Theme">{second.seccion} </p>
            <p>{second.detail}</p>
          </div>
          <div className="flex space-x-3">
            <p className="font-bold text-Theme">{third.seccion} </p>
            <p> {third.detail}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center ">
          <div className="w-full grid  justify-center ">
            <a
              href={links.area1.detail}
              className=" hover:scale-125 transition-all group"
            >
              <img
                src={links.area1.image}
                className="h-16 w-16  group-hover:fill-Hover"
              />
              <div className="text-center group-hover:text-Theme">
                {links.area1.seccion}
              </div>
            </a>
          </div>
          <div className="w-full grid  justify-center ">
            <a
              href={links.area2.detail}
              className="hover:scale-125 transition-all group"
            >
              <img
                src={links.area2.image}
                className="h-16 w-16  group-hover:fill-Hover"
              />
              <div className="text-center group-hover:text-Theme">
                {links.area2.seccion}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="grid items-center justify-center p-5 gap-y-10">
        <img
          src={foto}
          className="sm:h-80 sm:w-80 rounded-full border-4 border-Theme"
          alt="foto"
        />
        <div
          onClick={handleDownload}
          className="p-2 bg-Theme text-Background  rounded-xl font-bold flex justify-center active:scale-105"
        >
          {button}
        </div>
      </div>
    </div>
  );
}

export default Resume;
