import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";


const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-[#213753]/40 pb-3 cursor-pointer"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-lg font-medium text-[#213753]">{question}</h4>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus className="text-[#213753]" />
        </motion.span>
      </div>

      {/* Body */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-3 pr-6">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
