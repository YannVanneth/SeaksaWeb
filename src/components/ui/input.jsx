import React, { forwardRef } from "react";

const input = forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      error,
      leftElement,
      rightElement,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "border border-input rounded-md",
      bordered: "border-2 border-primary rounded-md",
      filled: "bg-secondary/50 border-0 rounded-md",
      flushed:
        "border-0 border-b-2 border-input rounded-none focus:border-b-primary",
    };

    const sizes = {
      sm: "h-8 text-sm px-3",
      md: "h-10 px-4",
      lg: "h-12 text-lg px-6",
    };

    return (
      <div className="relative">
        {leftElement && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {leftElement}
          </div>
        )}
        <input
          className={`flex w-full bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
            variants[variant]
          } ${sizes[size]} ${leftElement ? "pl-10" : ""} ${
            rightElement ? "pr-10" : ""
          } ${error ? "border-red-500 focus:border-red-500" : ""} ${className}`}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {rightElement}
          </div>
        )}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export { input };
