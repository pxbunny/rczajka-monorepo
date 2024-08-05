'use client';

import { setMenuState } from '@menu';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export type ModalProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  visible: boolean;
};

export const Modal = ({ id, children, className, visible }: ModalProps) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        id={id}
        className={`fixed inset-0 z-30 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="size-full bg-background/80 flex items-center justify-center">
          <div className="bg-background rounded-xl border border-[#292e37]">
            <header className="flex items-center justify-between">
              <div className="font-bold p-4">Menu</div>
              <button
                className="p-4 text-secondary hover:text-primary"
                onClick={() => setMenuState('none')}
              >
                x
              </button>
            </header>
            <div className="p-4 border-t border-dimmed">
            {children}
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
