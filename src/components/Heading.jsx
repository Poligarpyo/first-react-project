import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag, year }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {year && <Tagline className="">{year}</Tagline>}
      {tag && <Tagline className="mb-4 md:justify-center ">{tag}</Tagline>}
      {title && <h2 className="h2  md:text-center">{title}</h2>}
      {text && (
        <p className="h6 text-center font-bold  text-base text-n-4">{text}</p>
      )}
    </div>
  );
};

export default Heading;
