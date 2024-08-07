'use client';

import { useOnClickOutside, useHidden, useOnKeyDown } from '@me/hooks';
import { Button } from '@ui';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export type ModalProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  visible: boolean;
  title: string;
  hiddenElementId?: string;
  close: () => void;
};

export const Modal = ({ id, children, className, visible, title, hiddenElementId, close }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, close);
  useOnKeyDown('Escape', close);
  useHidden(hiddenElementId ?? '', visible);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id={id}
          className={classNames('fixed inset-0 z-30 bg-[#03070f]/90 flex items-center justify-center', className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            ref={ref}
            className="absolute bg-[#111721] min-w-96 min-h-96 rounded-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.25 }}
            role = "dialog"
            aria-modal="true"
          >
            <header className="flex items-center justify-between px-6 py-4">
              <h1 className="text-lg font-bold">{title}</h1>
              <Button
                type="button"
                variant="icon"
                className="text-2xl"
                onClick={close}
              >
                <IoClose />
              </Button>
            </header>
            <div className="px-6 py-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
