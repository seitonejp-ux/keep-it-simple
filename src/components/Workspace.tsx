"use client";

import { useState } from "react";
import Editor from "@/components/Editor";
import DiscussionSheet from "@/components/DiscussionSheet";
import PrintButton from "@/components/PrintButton";
import ScaledSheet from "@/components/ScaledSheet";
import { SAMPLE_MARKDOWN } from "@/lib/sample-markdown";

export default function Workspace() {
  const [markdown, setMarkdown] = useState(SAMPLE_MARKDOWN);
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");

  return (
    <div className="flex h-screen flex-col">
      <header className="no-print shrink-0 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
          <span className="truncate text-[13px] font-medium tracking-tight text-gray-900">
            Keep It Simple
          </span>
          <PrintButton />
        </div>

        <div className="border-t border-gray-200 px-4 py-2 md:hidden">
          <div className="flex rounded-full bg-gray-100 p-0.5 text-[12px] font-medium">
            <button
              type="button"
              onClick={() => setMobileView("edit")}
              className={`flex-1 rounded-full px-3 py-1.5 transition-colors ${
                mobileView === "edit"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              編集
            </button>
            <button
              type="button"
              onClick={() => setMobileView("preview")}
              className={`flex-1 rounded-full px-3 py-1.5 transition-colors ${
                mobileView === "preview"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              プレビュー
            </button>
          </div>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col md:flex-row">
        <section
          className={`no-print min-h-0 w-full flex-1 border-gray-200 bg-white
            md:block md:w-1/2 md:flex-none md:border-r ${
              mobileView === "edit" ? "block" : "hidden"
            }`}
        >
          <Editor value={markdown} onChange={setMarkdown} />
        </section>

        <section
          className={`print-area min-h-0 w-full flex-1 overflow-y-auto bg-gray-100 px-4 py-6
            sm:px-10 sm:py-10 md:block md:w-1/2 md:flex-none ${
              mobileView === "preview" ? "block" : "hidden"
            }`}
        >
          <ScaledSheet active={mobileView === "preview"}>
            <DiscussionSheet markdown={markdown} />
          </ScaledSheet>
        </section>
      </main>
    </div>
  );
}
