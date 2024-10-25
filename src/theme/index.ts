import { createTheme } from "@mantine/core";

import { blue, darkBlue, dodgerBlue, orange } from "./colors";

export const theme = createTheme({

  cursorType: "pointer",
  defaultRadius: "10",
  black: "#102030",
  primaryColor: "orange",
  colors: {
    blue,
    darkBlue,
    dodgerBlue,
    orange

  },
  headings: { fontFamily: 'ADLaM Display' },
  fontFamily: 'DM Sans Variable',
});