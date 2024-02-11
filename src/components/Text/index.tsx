import React from "react";

const sizeClasses = {
  txtIBMPlexSansSemiBoldItalic18WhiteA700:
    "font-ibmplexsans font-semibold italic",
  txtIBMPlexSansMedium24: "font-ibmplexsans font-medium",
  txtIBMPlexSans20: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium16Gray90001: "font-ibmplexsans font-medium",
  txtIBMPlexSansSemiBoldItalic20: "font-ibmplexsans font-semibold italic",
  txtIBMPlexSansBoldItalic18: "font-bold font-ibmplexsans italic",
  txtIBMPlexSans16Gray900cc: "font-ibmplexsans font-normal",
  txtIBMPlexSansBold32Orange300: "font-bold font-ibmplexsans",
  txtIBMPlexSerifBold30: "font-bold font-ibmplexserif",
  txtIBMPlexSansBold40: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold20: "font-bold font-ibmplexsans",
  txtJostRomanRegular18: "font-jost font-normal",
  txtIBMPlexSansBold32Gray90001: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold40WhiteA700: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium16: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold24: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold48WhiteA700: "font-bold font-ibmplexsans",
  txtIBMPlexSansBold48: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium16WhiteA700a2: "font-ibmplexsans font-medium",
  txtIBMPlexSansBoldItalic18WhiteA700: "font-bold font-ibmplexsans italic",
  txtIBMPlexSansBold48Orange300: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium32: "font-ibmplexsans font-medium",
  txtJostRomanRegular18WhiteA700: "font-jost font-normal",
  txtIBMPlexSansSemiBoldItalic32: "font-ibmplexsans font-semibold italic",
  txtIBMPlexSans18: "font-ibmplexsans font-normal",
  txtIBMPlexSans16: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold24: "font-ibmplexsans font-semibold",
  txtIBMPlexSansSemiBoldItalic18: "font-ibmplexsans font-semibold italic",
  txtIBMPlexSansRegular16: "font-ibmplexsans font-normal",
  txtPoppinsMedium102: "font-medium font-poppins",
  txtIBMPlexSansBold32: "font-bold font-ibmplexsans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
