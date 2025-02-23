import { motion } from "framer-motion";
import { ReactElement, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export interface AccordionEntry {
  title: string;
  content: string | ReactElement;
}

export default function AccordionFunction(items: AccordionEntry[]) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div key={index} className="border-bottom-text">
          <button className="accordion-title link" onClick={() => toggleAccordion(index)}>
            <div className="accordion-title-text ">{item.title}</div>
            <div className="accordion-icon" style={{ marginLeft: "auto" }}>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="accordion-content-wrapper"
          >
            <div>{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
