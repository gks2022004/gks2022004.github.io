"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, GitMerge } from "lucide-react";
import Link from "next/link";
import React from "react";

interface OpenSourceCardProps {
  logoUrl: string;
  org: string;
  orgUrl: string;
  repo: string;
  repoUrl: string;
  pr: string;
  prUrl: string;
  date: string;
  description?: string;
}

export const OpenSourceCard = ({
  logoUrl,
  org,
  orgUrl,
  repo,
  repoUrl,
  pr,
  prUrl,
  date,
  description,
}: OpenSourceCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card
      className="group/card flex gap-4 bg-transparent shadow-none rounded-none border-0 border-l-2 border-l-transparent pl-3 pr-1 py-3 transition-all duration-300 ease-out hover:border-l-[hsl(353_70%_45%)] hover:pl-4 hover:bg-foreground/[0.03] cursor-pointer"
      onClick={() => description && setIsExpanded(!isExpanded)}
    >
      {/* Org avatar */}
      <div className="flex-none mt-0.5">
        <Link
          href={orgUrl}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground hover:opacity-80 transition-opacity">
            <AvatarImage src={logoUrl} alt={org} className="object-contain" />
            <AvatarFallback className="text-xs font-semibold">{org[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0 flex flex-col gap-1.5">
        {/* Breadcrumb: Org / repo */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground leading-none">
          <Link
            href={orgUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="font-medium text-foreground hover:text-[hsl(353_70%_45%)] transition-colors"
          >
            {org}
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href={repoUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="font-mono hover:text-foreground transition-colors"
          >
            {repo.split("/")[1]}
          </Link>
        </div>

        {/* PR title + badges row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug transition-colors duration-300 group-hover/card:text-[hsl(353_70%_45%)]">
            {pr}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
            <Badge
              className="bg-[hsl(271_65%_52%)] hover:bg-[hsl(271_65%_47%)] text-white flex items-center gap-1 text-[10px] px-1.5 py-0.5 border-0 font-medium"
            >
              <GitMerge className="size-2.5" />
              Merged
            </Badge>
            <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
              {date}
            </span>
            <Link
              href={prUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground transition-colors ml-0.5"
              title="View PR on GitHub"
            >
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Expandable description */}
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-xs text-muted-foreground leading-relaxed pt-1 border-t border-dashed border-foreground/10 mt-1">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
