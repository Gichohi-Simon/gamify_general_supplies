"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      position="top-center"
      theme={theme as ToasterProps["theme"]}
      className="toaster group text-red-500"
      toastOptions={{
        classNames: {
           toast:
            "group toast group-[.toaster]:bg-[var(--color-secondary)] group-[.toaster]:text-[var(--color-dark)] group-[.toaster]:border-[var(--color-dark)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[var(--color-primary)]",
          actionButton:
            "group-[.toast]:bg-[var(--color-primary)] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[var(--color-dark)] group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
