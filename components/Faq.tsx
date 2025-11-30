import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "item-1",
    question: "How can I apply for Back It?",
    answer: "You just need to sign up, create your project profile, and submit your funding request with basic details.",
  },
  {
    value: "item-2",
    question: "Who can request funding on this platform?",
    answer: "Anyone with a clear project or even idea, whether individual or team, can request funding through our platform.",
  },
  {
    value: "item-3",
    question: "Is there a limit to how much funding I can ask for?",
    answer: "No strict limit. You can request any amount, but your chances improve if your request is realistic and well explained.",
  },
  {
    value: "item-4",
    question: "How do investors decide to fund my project?",
    answer: "Investors review your project details, goals, and plan. If they find it promising, they can provide funding directly.",
  },
  {
    value: "item-5",
    question: "Do I need to pay any fees to raise funds?",
    answer: "No upfront fees. A small service charge applies only when your project successfully receives funding.",
  },
  {
    value: "item-6",
    question: "How will I get the funds once approved?",
    answer: "Funds are transferred securely to your registered account after approval from the investor.",
  },
];
  
export default function Faq() {
    return (
        <>
        <div className="text-center pb-6">
            <h2 className="dark:text-white text-black opacity-90 text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
                Still Got <span className="font-serif font-normal tracking-wide">Questions?</span>
            </h2>
            <p className="mt-4 md:text-xl dark:text-white text-black opacity-75 tracking-wide">
                {`We've got answers.`}
            </p>
        </div>

        <div className="mx-5 sm:mx-auto max-w-3xl rounded-lg border p-4 dark:bg-neutral-700 bg-amber-50">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.value} value={faq.value}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-balance">{faq.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        </>
    )
}