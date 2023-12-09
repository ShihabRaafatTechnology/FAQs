import Accordion from "./Accordion";
import { accordions } from "../../utils/accordion.js";
import { accordionType } from "../../shared/types.js";

type Props = {
  title: string;
};

const FAQs = ({ title }: Props) => {
  return (
    <section>
      <div className="content-mobileHome md:content-bgDesktop relative w-full"></div>
      <div className="drop-shadow-xl rounded-2xl bg-white w-full min-h-[40vh] md:w-[601px] md:min-h-[365px] absolute top-[20%] left-[50%] translate-x-[-50%] py-10">
        <div className="text-pink-300 font-WorkSansBold text-5xl flex items-center py-1 pb-5 px-2">
          <span className="content-iconStar px-6"></span>
          {title}
        </div>
        <div className="px-10">
          {accordions.map((accordion: accordionType, index: number) => {
            const { titles, details } = accordion;
            return <Accordion key={index} titles={titles} details={details} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
