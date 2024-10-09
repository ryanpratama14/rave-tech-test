import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Dialog as DialogHead, DialogPanel } from "@headlessui/react";
import { Icon } from "@iconify-icon/react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameDialog?: string;
};

export default function Dialog({ open, onClose, children, className, classNameDialog, ...rest }: Props) {
  return (
    <DialogHead
      open={open}
      onClose={onClose}
      transition
      className="z-50 outline-none bg-black/60 fixed inset-0 flex items-center justify-center px-shorter animate data-[closed]:opacity-0"
    >
      <DialogPanel
        transition
        className={cn(
          "data-[closed]:scale-90 data-[closed]:translate-y-6 animate w-full xl:w-[80%] 2xl:w-[50%] relative rounded-md lg:p-12 p-6 shadow bg-white border-1 border-gray_lighter",
          classNameDialog,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-dark flex items-center justify-center p-1 rounded-full hover:bg-gray_lighter animate"
        >
          <Icon icon={ICONS.close} width={25} />
        </button>
        <section {...rest} className={cn(className)}>
          {children}
        </section>
      </DialogPanel>
    </DialogHead>
  );
}
