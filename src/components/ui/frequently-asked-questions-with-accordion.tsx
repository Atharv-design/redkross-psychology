"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/frequently-asked-questions-with-accordion-utils/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  title?: string;
  description?: string;
  data?: FAQItem[];
  className?: string;
  supportEmail?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Is everything I say in counselling 100% confidential?",
    answer:
      "Yes, absolutely. All sessions adhere to strict clinical confidentiality guidelines and Indian Mental Healthcare Act (MHCA 2017) ethical standards. The sole exceptions are legal mandates involving imminent physical self-harm or danger to others.",
  },
  {
    question: "How does the fee structure and sliding scale work?",
    answer:
      "We believe financial constraints should never stand between a human being and compassionate mental healthcare. Our sliding scale offers tiered contributions based on household financial capacity, verified respectfully without intrusive bureaucracy.",
  },
  {
    question: "Can I receive therapy if I am under 18 years old?",
    answer:
      "Yes, adolescents aged 13-17 can receive therapy. Under legal ethical protocols, parental or legal guardian written consent is required prior to the initial assessment intake.",
  },
  {
    question: "What is the difference between a counsellor, clinical psychologist, and psychiatrist?",
    answer:
      "Counsellors guide emotional, relationship, and lifestyle hurdles through talk therapy. Clinical psychologists (RCI licensed) specialize in psychometric assessments, deep trauma, and complex disorders. Psychiatrists are medical doctors (MD/DPM) who diagnose neurological/biological conditions and prescribe psychiatric medications.",
  },
  {
    question: "Do student interns independently provide counselling sessions?",
    answer:
      "Never. Student interns observe clinical rounds, assist psychoeducation campaigns, and conduct literature reviews. They never conduct independent one-on-one therapy sessions with clients without licensed RCI clinical supervision.",
  },
  {
    question: "How can our school, college, or workplace book an institutional workshop?",
    answer:
      "Organizations can submit a partnership request through our Institutional Outreach portal or email us directly at outreach@redkross.org.in. Our team crafts customized corporate wellness and campus mental health modules.",
  },
];

export default function FrequentlyAskedQuestions({
  title = "Frequently Asked Questions",
  description = "Transparent clarity on ethics, clinical confidentiality, session protocols, and institutional outreach. If you need urgent assistance, reach out directly to",
  data = defaultFAQs,
  className,
  supportEmail = "psychology@redkross.org.in",
}: FrequentlyAskedQuestionsProps) {
  const words = title.split(" ");

  return (
    <section className={cn("relative w-full overflow-hidden py-24", className)}>
      {/* Calming ambient background teal bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl px-6">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl font-royal">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, filter: "blur(6px)", y: 14 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-3 inline-block bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base text-slate-300/90 md:text-lg leading-relaxed font-light"
        >
          {description}{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="text-teal-400 font-medium underline underline-offset-4 hover:text-teal-300 transition-colors"
          >
            {supportEmail}
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="w-full">
            {data.map((item, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
