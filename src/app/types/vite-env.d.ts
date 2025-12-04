/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

declare module "*.module.scss";

declare module "*.svg" {
  import React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
