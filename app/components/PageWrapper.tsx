"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <div>
        <AnimatePresence>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 0.75, duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1, }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default PageWrapper;