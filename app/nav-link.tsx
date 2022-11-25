"use client";

import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

export const NavLink: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  let segment = useSelectedLayoutSegment();
  if (segment === null) segment = "";
  let active = href === `/${segment}`;

  return (
    <Link href={href} className={active ? "font-bold text-indigo-500" : ""}>
      {children}
    </Link>
  );
};
