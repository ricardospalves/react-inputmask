import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type BRLFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<BRLFieldRef>, PropsToOmit>;

export type BRLFieldProps = NativeProps & {
  maskPrefix?: boolean;
};

export const BRLField = forwardRef<BRLFieldRef, BRLFieldProps>(
  ({ maskPrefix, ...props }, ref) => {
    const innerRef = useRef<BRLFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as BRLFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        new Inputmask({
          alias: "numeric",
          prefix: maskPrefix ? "R$ " : undefined,
          radixPoint: ",",
          groupSeparator: ".",
          digits: 2,
          numericInput: true,
        }).mask(innerRef.current);
      }
    }, [maskPrefix, innerRef]);

    return <input inputMode="decimal" {...props} ref={innerRef} />;
  }
);

BRLField.displayName = "BRLField";
