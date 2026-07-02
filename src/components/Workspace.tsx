"use client";

import { useState } from "react";
import Editor from "@/components/Editor";
import DiscussionSheet from "@/components/DiscussionSheet";
import PrintButton from "@/components/PrintButton";
import { SAMPLE_MARKDOWN } from "@/lib/sample-markdown";

export default function Workspace() {
  const [markdown, setMarkdown] = useState(SAMPLE_MARKDOWN);

  return (
    <div className="flex h-screen flex-col">
      <header
        className="no-print flex h-14 shrink-0 items-center justify-between border-b
          border-[#e5e5e7] bg-white/80 px-6 backdrop-blur"
      >
        <span className="text-[13px] font-medium tracking-tight text-[#1d1d1f]">
          Keep It Simple
        </span>
        <PrintButton />
      </header>

      <main className="flex min-h-0 flex-1">
        <section className="no-print w-1/2 border-r border-[#e5e5e7] bg-white">
          <Editor value={markdown} onChange={setMarkdown} />
        </section>

        <section className="print-area w-1/2 overflow-y-auto bg-[#fafafa] px-10 py-10">
          <div className="mx-auto w-fit shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)]">
            <DiscussionSheet markdown={markdown} />
          </div>
        </section>
      </main>
    </div>
  );
}
