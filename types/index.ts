export interface Column<T extends Record<string, unknown>> {
  key: string;
  formatterHeader: () => JSX.Element;
  formatterCell: (row: T, index?: number) => JSX.Element;
}

export interface SearchParams {
  take?: number;
  search?: string;
  skip?: number;
}
