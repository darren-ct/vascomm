export interface Column<T extends Record<string, unknown>> {
  key: string;
  formatterHeader: () => JSX.Element;
  formatterCell: (row: T, index?: number) => JSX.Element;
}
