import type { PostoraContentNode } from "@/lib/postora";

function renderChildren(nodes: PostoraContentNode[] | undefined) {
  return nodes?.map((node, index) => renderNode(node, index));
}

function renderNode(node: PostoraContentNode, index: number): React.ReactNode {
  const children = renderChildren(node.content);

  switch (node.type) {
    case "doc":
      return <div key={index}>{children}</div>;

    case "paragraph":
      return (
        <p
          key={index}
          className="font-inter mb-7 text-[16px] leading-[1.95] text-[#DFE2EDB2] sm:text-[18px]"
        >
          {children}
        </p>
      );

    case "heading": {
      const level =
        typeof node.attrs?.level === "number" ? node.attrs.level : 2;

      if (level === 3) {
        return (
          <h3
            key={index}
            className="font-space mt-12 mb-5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.25] font-semibold tracking-[-0.03em] text-[#DFE2ED]"
          >
            {children}
          </h3>
        );
      }

      return (
        <h2
          key={index}
          className="font-space mt-14 mb-6 text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.18] font-semibold tracking-[-0.04em] text-[#DFE2ED]"
        >
          {children}
        </h2>
      );
    }

    case "bulletList":
      return (
        <ul
          key={index}
          className="font-inter mb-8 list-disc space-y-3 pl-6 text-[16px] leading-8 text-[#DFE2EDB2] sm:text-[18px]"
        >
          {children}
        </ul>
      );

    case "orderedList":
      return (
        <ol
          key={index}
          className="font-inter mb-8 list-decimal space-y-3 pl-6 text-[16px] leading-8 text-[#DFE2EDB2] sm:text-[18px]"
        >
          {children}
        </ol>
      );

    case "listItem":
      return <li key={index}>{children}</li>;

    case "blockquote":
      return (
        <blockquote
          key={index}
          className="font-space my-10 border-l-2 border-[#A0D14F] bg-[#0F141B] px-6 py-5 text-[18px] leading-8 text-[#DFE2ED] italic"
        >
          {children}
        </blockquote>
      );

    case "codeBlock":
      return (
        <pre
          key={index}
          className="mb-8 overflow-x-auto border border-[#FFFFFF0D] bg-[#0F141B] p-5 font-mono text-[13px] leading-7 text-[#A0D14F]"
        >
          <code>{children}</code>
        </pre>
      );

    case "image": {
      const src = typeof node.attrs?.src === "string" ? node.attrs.src : "";

      const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : "";

      if (!src) return null;

      return (
        <figure key={index} className="my-10 overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full border border-[#FFFFFF0D]"
          />
        </figure>
      );
    }

    case "horizontalRule":
      return <hr key={index} className="my-14 border-[#FFFFFF0D]" />;

    case "hardBreak":
      return <br key={index} />;

    case "text": {
      const isBold = node.marks?.some((mark) => mark.type === "bold");

      const isItalic = node.marks?.some((mark) => mark.type === "italic");

      const isCode = node.marks?.some((mark) => mark.type === "code");

      const linkMark = node.marks?.find((mark) => mark.type === "link");

      const text = (
        <span
          className={[
            isBold ? "font-semibold text-[#DFE2ED]" : "",
            isItalic ? "italic" : "",
            isCode
              ? "rounded bg-[#0F141B] px-1.5 py-0.5 font-mono text-[0.9em] text-[#A0D14F]"
              : "",
          ].join(" ")}
        >
          {node.text}
        </span>
      );

      if (linkMark && typeof linkMark.attrs?.href === "string") {
        return (
          <a
            key={index}
            href={linkMark.attrs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A0D14F] underline decoration-[#A0D14F55] underline-offset-4 transition-colors hover:text-white"
          >
            {text}
          </a>
        );
      }

      return <span key={index}>{text}</span>;
    }

    default:
      return <div key={index}>{children}</div>;
  }
}

export default function BlogContent({
  content,
}: {
  content: PostoraContentNode;
}) {
  return <div className="blog-content">{renderNode(content, 0)}</div>;
}
