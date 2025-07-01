"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

/**
 * A button with a subtle animated rainbow border.
 * Simply wraps the shadcn/ui Button, so it supports all the same props.
 *
 * Usage:
 * <RainbowButton>Click me</RainbowButton>
 */
export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative isolate overflow-hidden bg-transparent",
          "before:absolute before:inset-0 before:-z-10 before:animate-[spin_8s_linear_infinite] before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-pink-500 before:via-yellow-500 before:to-sky-500",
          "before:rounded-md before:opacity-60 hover:before:opacity-90",
          "after:absolute after:inset-[2px] after:-z-10 after:rounded-md after:bg-slate-900",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
RainbowButton.displayName = "RainbowButton"
