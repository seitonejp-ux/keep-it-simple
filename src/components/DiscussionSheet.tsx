import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DiscussionSheetProps {
  markdown: string;
}

export default function DiscussionSheet({ markdown }: DiscussionSheetProps) {
  return (
    <article
      className="a4-sheet prose prose-neutral mx-auto max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#1d1d1f]
        prose-h1:text-[26px] prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-[#e5e5e7]
        prose-h2:text-[18px] prose-h2:mt-10 prose-h2:mb-3
        prose-h3:text-[15px] prose-h3:mt-6 prose-h3:mb-2
        prose-p:text-[13.5px] prose-p:leading-[1.9] prose-p:text-[#3a3a3c]
        prose-li:text-[13.5px] prose-li:leading-[1.85] prose-li:text-[#3a3a3c]
        prose-strong:text-[#1d1d1f] prose-strong:font-semibold
        prose-blockquote:font-normal prose-blockquote:border-l-2 prose-blockquote:border-[#1d1d1f]/20
        prose-blockquote:text-[#6e6e73] prose-blockquote:not-italic prose-blockquote:pl-5
        prose-hr:border-[#e5e5e7] prose-hr:my-10
        prose-table:text-[13px] prose-th:text-[#1d1d1f] prose-th:font-medium
        prose-td:text-[#3a3a3c] prose-th:border-[#e5e5e7] prose-td:border-[#e5e5e7]
        prose-code:text-[12.5px] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-[#f5f5f7] prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
        [&_.contains-task-list]:list-none [&_.contains-task-list]:pl-0
        [&_.task-list-item]:pl-0
        [&_input[type='checkbox']]:mr-2 [&_input[type='checkbox']]:accent-[#1d1d1f]"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
