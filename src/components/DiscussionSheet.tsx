import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DiscussionSheetProps {
  markdown: string;
}

export default function DiscussionSheet({ markdown }: DiscussionSheetProps) {
  return (
    <article
      className="a4-sheet prose prose-neutral mx-auto max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-900
        prose-h1:text-[28px] prose-h1:font-bold prose-h1:mb-10 prose-h1:pb-5 prose-h1:border-b prose-h1:border-gray-200
        prose-h2:text-[19px] prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-[15px] prose-h3:mt-8 prose-h3:mb-2
        prose-p:text-[14px] prose-p:leading-[1.75] prose-p:text-gray-700 prose-p:mb-4
        prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5
        prose-li:text-[14px] prose-li:leading-[1.75] prose-li:text-gray-700 prose-li:marker:text-gray-400
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-blockquote:font-normal prose-blockquote:border-l-2 prose-blockquote:border-gray-300
        prose-blockquote:text-gray-500 prose-blockquote:not-italic prose-blockquote:pl-5 prose-blockquote:py-0.5
        prose-hr:border-gray-200 prose-hr:my-12
        prose-table:text-[13.5px] prose-table:border-collapse
        prose-th:border prose-th:border-gray-200 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2.5
        prose-th:text-left prose-th:font-medium prose-th:text-gray-900
        prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2.5 prose-td:text-gray-700
        prose-code:text-[13px] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-gray-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
        [&_.contains-task-list]:list-none [&_.contains-task-list]:pl-0
        [&_.task-list-item]:pl-0 [&_.task-list-item]:flex [&_.task-list-item]:items-start [&_.task-list-item]:gap-2.5
        [&_input[type='checkbox']]:mt-[5px] [&_input[type='checkbox']]:size-[15px]
        [&_input[type='checkbox']]:shrink-0 [&_input[type='checkbox']]:rounded-[4px]
        [&_input[type='checkbox']]:border-gray-300 [&_input[type='checkbox']]:accent-gray-900"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
