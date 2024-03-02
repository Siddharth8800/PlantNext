"use client";

export default function Header({
  word1,
  word2,
  styles = "",
}: Readonly<{ word1: string; word2: string; styles?: string }>) {
  return (
    <h1 className={`text-center p-5 ${styles}`}>
      {word1}
      <span className="text-green-300">{word2}</span>
    </h1>
  );
}
