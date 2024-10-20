import { MarkdownPreviewer } from "@/components/markdown-previewer";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <MarkdownPreviewer />
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" defer/>
    </>
  );
}
