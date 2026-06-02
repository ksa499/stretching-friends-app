import React from "react";
import { Icon } from "../icons/Icon";

export interface SearchFieldProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  /** force the focused (cyan) border regardless of DOM focus */
  focused?: boolean;
  /** render as a non-editable button (e.g. the entry on the friends list) */
  readOnly?: boolean;
  onPress?: () => void;
  className?: string;
}

/**
 * Search input. Two modes:
 *  - editable (default): controlled/uncontrolled text input with a clear (✕) affordance.
 *  - readOnly: a tappable pill that navigates elsewhere (use `onPress`).
 */
export function SearchField({
  value,
  defaultValue,
  onChange,
  onClear,
  onFocus,
  onBlur,
  placeholder = "닉네임을 검색해 보세요",
  autoFocus,
  focused,
  readOnly,
  onPress,
  className,
}: SearchFieldProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const [hasFocus, setHasFocus] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const val = value ?? internal;
  const showFocus = focused ?? hasFocus;

  React.useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  const cls = ["ds-field", showFocus ? "ds-field--focus" : "", className].filter(Boolean).join(" ");

  if (readOnly) {
    return (
      <div role="button" tabIndex={0} onClick={onPress} className={`ds-press ${cls}`} style={{ cursor: "pointer" }}>
        <Icon name="search" size={16} color="var(--ds-muted-500)" />
        <span className="ds-field__input" style={{ color: "var(--ds-muted-500)" }}>{placeholder}</span>
      </div>
    );
  }

  return (
    <div className={cls}>
      <Icon name="search" size={16} color="var(--ds-muted-500)" />
      <input
        ref={ref}
        className="ds-field__input"
        value={val}
        placeholder={placeholder}
        onChange={(e) => {
          if (value === undefined) setInternal(e.target.value);
          onChange?.(e.target.value);
        }}
        onFocus={() => { setHasFocus(true); onFocus?.(); }}
        onBlur={() => { setHasFocus(false); onBlur?.(); }}
      />
      {val && (
        <button
          type="button"
          className="ds-field__btn ds-press"
          aria-label="Clear"
          onClick={() => {
            if (value === undefined) setInternal("");
            onChange?.("");
            onClear?.();
          }}
        >
          <Icon name="clear-x" size={10} />
        </button>
      )}
    </div>
  );
}

export default SearchField;
