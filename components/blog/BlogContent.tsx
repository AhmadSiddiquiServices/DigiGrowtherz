import type { ReactNode } from "react";
import type { PostoraContentNode } from "@/lib/postora";

function renderChildren(
  nodes: PostoraContentNode[] | undefined,
  inTable = false,
  inList = false
): ReactNode {
  return nodes?.map((node, index) => renderNode(node, index, inTable, inList));
}

function getPositiveSpan(
  attrs: Record<string, unknown> | undefined,
  name: "colspan" | "rowspan"
): number | undefined {
  const value = attrs?.[name];

  if (typeof value === "number" && Number.isSafeInteger(value) && value >= 1) {
    return value;
  }

  return undefined;
}

function getColumnWidth(
  attrs: Record<string, unknown> | undefined
): number | undefined {
  const colwidth = attrs?.colwidth;

  if (!Array.isArray(colwidth) || colwidth.length === 0) {
    return undefined;
  }

  const validWidths = colwidth.every(
    (width): width is number =>
      typeof width === "number" && Number.isSafeInteger(width) && width > 0
  );

  if (!validWidths) {
    return undefined;
  }

  return colwidth.reduce<number>((total, width) => total + width, 0);
}

function renderNode(
  node: PostoraContentNode,
  index: number,
  inTable = false,
  inList = false
): ReactNode {
  const children = renderChildren(
    node.content,
    inTable || node.type === "table",
    inList || node.type === "bulletList" || node.type === "orderedList"
  );

  switch (node.type) {
    case "doc":
      return <div key={index}>{children}</div>;

    case "paragraph":
      return (
        <p
          key={index}
          className={
            inTable
              ? "font-inter text-[13px] leading-6 break-words text-[#DFE2EDB2] sm:text-[14px]"
              : inList
                ? "font-inter m-0 text-[16px] leading-8 text-[#DFE2EDB2] sm:text-[18px]"
                : "font-inter mb-7 text-[16px] leading-[1.95] text-[#DFE2EDB2] sm:text-[18px]"
          }
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
          className="font-inter mb-8 list-disc space-y-2 pl-6 text-[16px] leading-8 text-[#DFE2EDB2] sm:text-[18px]"
        >
          {children}
        </ul>
      );

    case "orderedList":
      return (
        <ol
          key={index}
          className="font-inter mb-8 list-decimal space-y-2 pl-6 text-[16px] leading-8 text-[#DFE2EDB2] sm:text-[18px]"
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

    /*
     * TABLE
     *
     * Keep the table inside a horizontally scrollable wrapper
     * so wide tables remain usable on smaller screens.
     */
    case "table":
      return (
        <figure key={index} className="my-10 w-full max-w-full">
          <div className="max-w-full overflow-x-auto rounded-lg border border-[#FFFFFF1A]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <tbody>{children}</tbody>
            </table>
          </div>
        </figure>
      );

    /*
     * TABLE ROW
     */
    case "tableRow":
      return (
        <tr key={index} className="border-b border-[#FFFFFF1A] last:border-b-0">
          {children}
        </tr>
      );

    /*
     * TABLE HEADER
     */
    case "tableHeader": {
      const colSpan = getPositiveSpan(node.attrs, "colspan");
      const rowSpan = getPositiveSpan(node.attrs, "rowspan");
      const columnWidth = getColumnWidth(node.attrs);

      return (
        <th
          key={index}
          scope="col"
          colSpan={colSpan}
          rowSpan={rowSpan}
          style={
            columnWidth !== undefined
              ? { width: `${columnWidth}px` }
              : undefined
          }
          className="border border-[#FFFFFF1A] bg-[#0F141B] px-4 py-4 text-left align-top text-[13px] leading-6 font-semibold text-[#DFE2ED] sm:px-5 sm:text-[15px]"
        >
          {children}
        </th>
      );
    }

    /*
     * TABLE CELL
     */
    case "tableCell": {
      const colSpan = getPositiveSpan(node.attrs, "colspan");
      const rowSpan = getPositiveSpan(node.attrs, "rowspan");
      const columnWidth = getColumnWidth(node.attrs);

      return (
        <td
          key={index}
          colSpan={colSpan}
          rowSpan={rowSpan}
          style={
            columnWidth !== undefined
              ? { width: `${columnWidth}px` }
              : undefined
          }
          className="border border-[#FFFFFF1A] px-4 py-4 align-top text-[13px] leading-6 text-[#DFE2EDB2] sm:px-5 sm:py-5 sm:text-[14px]"
        >
          {children}
        </td>
      );
    }

    case "image": {
      const src = typeof node.attrs?.src === "string" ? node.attrs.src : "";

      const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : "";

      if (!src) {
        return null;
      }

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
