import * as React from "react";
import useDarkMode from "use-dark-mode";

import { Toggle } from "./Toggle";

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <div className="switch">
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
}
