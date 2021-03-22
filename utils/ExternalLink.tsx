import { Tooltip } from "@chakra-ui/react";
import React from "react";

type ExternalLinkProps = {
  to: string;
  children: any;
  tooltip: any;
  className?: string;
};

export default function ExternalLink({
  to,
  children,
  tooltip,
  className,
}: ExternalLinkProps): JSX.Element {
  return (
    <div className={className}>
      <Tooltip {...tooltip}>
        <a href={to} target={"_blank"} rel={"noreferrer noopener"}>
          {children}
        </a>
      </Tooltip>
    </div>
  );
}
