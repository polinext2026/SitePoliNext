import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";

interface FieldProps {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & FieldProps
>(({ className, label, error, hint, id, ...props }, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral/80">
        {label}
        {props.required && <span className="text-cyan ml-1">*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-lg border bg-surface/50 px-4 py-2.5 text-neutral placeholder:text-text-muted",
          "border-border focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20",
          "transition-colors duration-200",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps
>(({ className, label, error, hint, id, ...props }, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral/80">
        {label}
        {props.required && <span className="text-cyan ml-1">*</span>}
      </label>
      <textarea
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-lg border bg-surface/50 px-4 py-2.5 text-neutral placeholder:text-text-muted",
          "border-border focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20",
          "transition-colors duration-200 min-h-[120px] resize-y",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & FieldProps
>(({ className, label, error, children, id, ...props }, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-neutral/80">
        {label}
        {props.required && <span className="text-cyan ml-1">*</span>}
      </label>
      <select
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-lg border bg-surface/50 px-4 py-2.5 text-neutral",
          "border-border focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20",
          "transition-colors duration-200 appearance-none cursor-pointer",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
Select.displayName = "Select";
