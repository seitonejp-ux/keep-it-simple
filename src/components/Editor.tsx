"use client";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      spellCheck={false}
      placeholder="# 議題を入力してください..."
      className="h-full w-full resize-none bg-transparent p-8 font-mono text-[13px]
        leading-[1.8] text-[#1d1d1f] outline-none placeholder:text-[#a1a1a6]"
    />
  );
}
