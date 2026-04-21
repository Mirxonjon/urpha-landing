import * as React from "react";

export function UrphaLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={className} 
      {...props}
    >
      <path d="M 25 10 L 47 25 L 47 90 C 30 75 25 55 25 40 Z" />
      <path d="M 53 30 L 75 30 L 75 55 L 53 70 Z" />
    </svg>
  );
}
