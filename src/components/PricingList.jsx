import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border 
          border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5"
        >
          {/* <h4 className="h4 mb-4">{item.title}</h4> */}
          <h4
            className={
              item.title === "Premium"
                ? "h2 mb-4  l text-green-600" // if title is "Premium"
                : item.title === "Basic"
                ? "h4 mb-4 text-blue-600" // elseif title is "Basic"
                : "h4 mb-4 text-gray-600" // else (default)
            }
          >
            {item.title}
          </h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className=" flex items-center h-[5.5rem] mb-6 ">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            white={!!item.price}
            className="w-full mb-6"
            href={item.price ? "../pages/features/Features.jsx" : ""}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <>
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} alt={check} width={24} height={24} />
                  <p className="ml-4 body-2">{feature}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
