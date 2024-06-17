import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type CNPJFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<CNPJFieldRef>, PropsToOmit>;

export type CNPJFieldProps = NativeProps;

export const CNPJField = forwardRef<CNPJFieldRef, CNPJFieldProps>(
  ({ ...props }, ref) => {
    const innerRef = useRef<CNPJFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as CNPJFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        new Inputmask({
          mask: "99.999.999/9999-99",
        }).mask(innerRef.current);
      }
    }, [innerRef]);

    return <input inputMode="decimal" {...props} ref={innerRef} />;
  }
);

CNPJField.displayName = "CNPJField";
