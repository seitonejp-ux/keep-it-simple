"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-3.5 py-2
        text-[13px] font-medium text-white transition-colors hover:bg-gray-700 sm:px-4"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
      <span className="hidden sm:inline">PDFとして保存</span>
      <span className="sm:hidden">PDF保存</span>
    </button>
  );
}
