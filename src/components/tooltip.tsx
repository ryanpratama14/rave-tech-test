import { cn } from "@/lib/utils";
import { type ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"span"> & { children: React.ReactNode; content: string; contentTitle?: string; classNameContent?: string };

const Tooltip = forwardRef<HTMLSpanElement, Props>(({ classNameContent, className, content, contentTitle, children, ...rest }, ref) => {
  return (
    <span {...rest} ref={ref} className={cn("relative group w-fit z-[9999]", className)}>
      <span
        className={cn(
          "absolute flex gap-1 flex-col top-0 scale-0 group-hover:scale-100 group-hover:top-6 opacity-0 group-hover:opacity-100 shadow rounded-md p-4 animate bg-white border-1 border-gray_lighter",
          classNameContent,
        )}
      >
        {contentTitle ? <span className="font-bold text-sm">{contentTitle}</span> : null}
        <span className="text-xs">{content}</span>
      </span>
      {children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
