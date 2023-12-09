import { motion } from "framer-motion";

type Props = {
  titles: string;
  details: string;
};

const Accordion = ({ titles, details }: Props) => {
  /* VARIABLES */
  const hoverStyle =
    "flex justify-between items-center font-medium cursor-pointer text-pink-100 hover:text-pink-20 group-open:text-pink-20";
  const iconStyle = "transition group-open:content-iconMinus content-iconPlus";
  const detailsStyle =
    "mt-3 group-open:animate-fadeIn text-gray-100 font-WorkSans text-sm";
  const groupStyle = "group outline-none";
  const paddingY = "py-4";

  return (
    <div className={paddingY}>
      <details className={groupStyle}>
        <summary className={`${hoverStyle}`}>
          <span>{titles}</span>
          <span className={iconStyle}></span>
        </summary>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className={detailsStyle}
        >
          {details}
        </motion.p>
      </details>
    </div>
  );
};

export default Accordion;
