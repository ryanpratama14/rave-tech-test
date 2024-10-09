"use client";

import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FAQ_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { useState } from "react";

type Props = { faq: FAQ_QUERYResult };

export default function Faq({ faq }: Props) {
  const [collapsed, setCollapsed] = useState<string[]>([]);

  const toggleCollapse = (key: string) => {
    setCollapsed(
      (prev) =>
        prev.includes(key)
          ? prev.filter((item) => item !== key) // Collapse if it's already expanded
          : [...prev, key], // Expand if it's collapsed
    );
  };

  const isSelectedAll = collapsed.length === faq?.faqItems?.length;

  const handleExpandCollapseAll = () => {
    if (isSelectedAll) {
      setCollapsed([]);
    } else {
      setCollapsed(faq?.faqItems?.map((item) => item._key) || []); // Expand all
    }
  };

  return (
    <article className="xl:px-36 2xl:px-longer5 p-shorter flex flex-col gap-8 text-dark">
      <h1 className="font-bold font-source">{faq?.title}</h1>

      <section className="self-end">
        <button type="button" onClick={handleExpandCollapseAll} className="font-bold flex items-center gap-2">
          {isSelectedAll ? "Collapse All" : "Expand All"}

          <Icon icon={ICONS.arrow} width={25} rotate={2} className={cn("animate", { "rotate-180": isSelectedAll })} />
        </button>
      </section>

      <section className="flex flex-col gap-1">
        {faq?.faqItems?.map((e) => {
          const isSelected = collapsed.includes(e._key);

          return (
            <section
              key={e._key}
              className={cn("animate flex flex-col border-1 border-gray_lighter", {
                "border-[#2D5A7B]": isSelected,
              })}
            >
              <button
                type="button"
                onClick={() => toggleCollapse(e._key)} // Toggle on click
                className={cn("animate text-left w-full flex items-center justify-between p-6", {
                  "bg-[#2D5A7B] text-white": isSelected,
                })}
              >
                <h5 className="font-bold">{e.question}</h5>
                <div className="flex items-center justify-center p-1 bg-gray_lighter rounded-full text-dark">
                  <Icon icon={isSelected ? "ic:baseline-minus" : "ic:baseline-plus"} width={30} />
                </div>
              </button>

              <section className={cn("animate", { "-translate-y-4 opacity-0 invisible": !isSelected })}>
                <div className={cn("px-6 py-3", { hidden: !isSelected })}>
                  {e.response ? (
                    <PortableText
                      value={e.response}
                      components={{
                        marks: {
                          link: ({ value, children }) => {
                            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
                            return (
                              <Link
                                href={value?.href}
                                target={target}
                                rel={"_blank"}
                                className="border-b-1 hover:border-solid border-dotted border-red"
                              >
                                {children}
                              </Link>
                            );
                          },
                        },
                      }}
                    />
                  ) : null}
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </article>
  );
}
