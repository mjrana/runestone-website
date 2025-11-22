"use client";

import { PortableText } from "@portabletext/react";

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={value.asset?.url}
          alt={value.alt || ""}
          className="max-h-96 w-full rounded-xl object-cover"
        />
      </div>
    )
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target={value.newTab ? "_blank" : "_self"}
        rel="noreferrer"
        className="text-runestone-teal underline underline-offset-2"
      >
        {children}
      </a>
    )
  }
};

export function RichTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="prose prose-invert max-w-none prose-a:text-runestone-teal">
      <PortableText value={value} components={components as any} />
    </div>
  );
}
