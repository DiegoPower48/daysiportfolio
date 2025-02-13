interface ItemProps {
  data: {
    url: string;
    alt: string;
  };
}

export default function Item(props: ItemProps) {
  const { url, alt } = props.data;

  return (
    <div className="w-full flex items-center justify-center">
      <span
        className={`grid w-20 lg:w-24 justify-center hover:text-Background hover:bg-Theme hover:scale-105 rounded-xl p-1 grid-rows-[auto,auto]`}
      >
        <div className="flex w-full justify-center">
          <img className="h-12 w-12 lg:h-16 lg:w-16" src={url} alt={alt} />
        </div>

        <div className="h-full grid justify-center lg:font-bold text-xs text-pretty text-center">
          {alt}
        </div>
      </span>
    </div>
  );
}
