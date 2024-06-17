import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type CPFFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<CPFFieldRef>, PropsToOmit>;

export type CPFFieldProps = NativeProps;

export const CPFField = forwardRef<CPFFieldRef, CPFFieldProps>(
  ({ ...props }, ref) => {
    const innerRef = useRef<CPFFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as CPFFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        new Inputmask({
          mask: "999.999.999-99",
        }).mask(innerRef.current);
      }
    }, [innerRef]);

    return <input inputMode="decimal" {...props} ref={innerRef} />;
  }
);

CPFField.displayName = "CPFField";
