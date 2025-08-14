import { motion } from "framer-motion";
import ContactFormSection from "../components/contact-form";
import FaqSection from "../components/faqs-section";
import MapSection from "../components/map-section";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactFormSection />
      <MapSection />
      <FaqSection />
    </motion.div>
  );
}
