"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-teal-500/15 rounded-2xl mb-4 overflow-hidden backdrop-blur-xl bg-[#0A1826]/40 transition-all duration-300 hover:border-teal-400/35 hover:bg-[#0A1826]/70 shadow-lg shadow-black/20",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between px-6 py-5 text-left font-medium text-slate-100 transition-all hover:text-teal-300 [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]]:text-teal-300 group",
        className
      )}
      {...props}
    >
      <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 group-hover:text-teal-300 transition-colors pr-4">
        {children}
      </span>
      <div className="h-9 w-9 rounded-full bg-teal-500/10 border border-teal-500/25 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-all">
        <ChevronDown className="h-4 w-4 text-teal-400 shrink-0 transition-transform duration-300" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm md:text-base leading-relaxed text-slate-300 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-1 border-t border-teal-500/10 text-slate-300/90 font-light", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
