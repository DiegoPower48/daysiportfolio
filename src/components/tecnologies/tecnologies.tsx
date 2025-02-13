import Item from "./item";

interface Props {
  data: {
    title: string;
    first: {
      title: string;
      technologies: data[];
    };
    second: {
      title: string;
      technologies: data[];
    };
    third: {
      title: string;
      technologies: data[];
    };
  };
}

interface data {
  url: string;
  alt: string;
}

function Tecnologias(props: Props) {
  const { title, first, second, third } = props.data;

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4">
      <p className="font-bold text-Theme text-4xl">{title}:</p>
      <div
        className={`w-full grid grid-rows-auto border-2 border-Theme rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
      >
        <div className="text-textTheme flex justify-center text-3xl font-bold">
          {first.title}
        </div>

        <div
          className={`w-full grid grid-rows-auto grid-cols-2  sm:grid-cols-3 md:grid-cols-3 justify-center items-center p-4 gap-3`}
        >
          {first.technologies.map((element, i) => (
            <Item data={element} key={i} />
          ))}
        </div>
      </div>{" "}
      <div
        className={`w-full grid grid-rows-auto border-2 border-Theme rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
      >
        <div className="text-textTheme flex justify-center text-3xl font-bold">
          {second.title}
        </div>

        <div
          className={`w-full grid grid-rows-auto grid-cols-2  sm:grid-cols-3 md:grid-cols-3 justify-center items-center p-4 gap-3`}
        >
          {second.technologies.map((element, i) => (
            <Item data={element} key={i} />
          ))}
        </div>
      </div>{" "}
      <div
        className={`w-full grid grid-rows-auto border-2 border-Theme rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
      >
        <div className="text-textTheme flex justify-center text-3xl font-bold">
          {third.title}
        </div>

        <div
          className={`w-full grid grid-rows-auto grid-cols-2  sm:grid-cols-3 md:grid-cols-3 justify-center items-center p-4 gap-3`}
        >
          {third.technologies.map((element, i) => (
            <Item data={element} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
