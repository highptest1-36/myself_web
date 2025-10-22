"use client";

import { motion } from "framer-motion";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";
import { useButterfly } from "@/contexts/ButterflyContext";

const ButterflyControl = () => {
  const { enabled, draggable, setEnabled, setDraggable } = useButterfly();
  const { language, setLanguage } = useLanguage();

  const toggleButterfly = () => setEnabled(!enabled);
  const toggleDraggable = () => setDraggable(!draggable);
  const toggleLanguage = () => setLanguage(language === "en" ? "vi" : "en");

  return (
    <>
      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3"
      >
        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold"
          title={language === "en" ? "Switch to Vietnamese" : "Chuyển sang Tiếng Anh"}
        >
          <HiOutlineGlobeAlt className="w-5 h-5" />
          <span className="text-sm">{language === "en" ? "🇻🇳 Tiếng Việt" : "🇺🇸 English"}</span>
        </motion.button>

        {/* Butterfly Toggle */}
        <motion.button
          onClick={toggleButterfly}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold ${
            enabled
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
          title={enabled ? "Hide butterflies" : "Show butterflies"}
        >
          <span className="text-lg">🦋</span>
          <span className="text-sm">{enabled ? (language === "en" ? "Hide" : "Ẩn") : (language === "en" ? "Show" : "Hiện")}</span>
        </motion.button>

        {/* Draggable Toggle - only show when butterflies are enabled */}
        {enabled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleDraggable}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold text-sm ${
              draggable
                ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
            title={draggable ? "Lock butterflies" : "Drag butterflies"}
          >
            <span className="text-lg">{draggable ? "🔓" : "🔒"}</span>
            <span>{draggable ? (language === "en" ? "Drag" : "Kéo") : (language === "en" ? "Lock" : "Khóa")}</span>
          </motion.button>
        )}
      </motion.div>

      {/* Hidden data attributes removed - using context instead */}
    </>
  );
};

export default ButterflyControl;
