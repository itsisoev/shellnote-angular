export const GIS_COMMANDS = {
  // === THEME ===
  '--dark-theme': 'setDarkTheme',
  '--light-theme': 'setLightTheme',

  // === HELP ===
  '--help': 'showHelp',
  '--version': 'showVersion',

  // === NOTES ===
  add: 'addNote',
  delete: 'deleteNote',
  find: 'findNote',
  list: 'listNotes',
  clear: 'clearTerminal',
} as const;

export type GisCommand = keyof typeof GIS_COMMANDS;
