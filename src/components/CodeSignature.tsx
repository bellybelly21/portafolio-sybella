"use client";

import { useEffect } from "react";

export default function CodeSignature() {
  useEffect(() => {
    const signature = `
     ██████╗ ██╗   ██╗██████╗ ███████╗██╗     ██╗     █████╗ 
    ██╔════╝ ╚██╗ ██╔╝██╔══██╗██╔════╝██║     ██║    ██╔══██╗
    ╚█████╗   ╚████╔╝ ██████╔╝█████╗  ██║     ██║    ███████║
     ╚═══██╗   ╚██╔╝  ██╔══██╗██╔══╝  ██║     ██║    ██╔══██║
    ██████╔╝    ██║   ██████╔╝███████╗███████╗███████╗██║  ██║
    ╚═════╝     ╚═╝   ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
                                                              
     > Diseño UX/UI & Desarrollo Fullstack 
     > https://github.com/bellybelly21
    `;

    console.log(
      `%c${signature}`,
      "color: #a855f7; font-weight: bold; font-family: monospace;"
    );
  }, []);

  return null;
}