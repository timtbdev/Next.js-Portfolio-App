import React from "react";

const CopyrightText = () => (
  <div className="text-muted-foreground flex items-center justify-center text-center text-sm leading-5">
    © {new Date().getFullYear()} All rights reserved.
  </div>
);

export default CopyrightText;
