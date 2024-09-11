// file for general export interfaces 4 ui components

export interface ITableHeaderCell {
  key: string | number;
  label: string;
  labelIcon?: any;
  sortable?: boolean;
  main?: boolean;
  half?: boolean;
  padding: "default" | "checkbox" | "none" | "normal";
  paddingMD?: "default" | "checkbox" | "none";
  align: "inherit" | "left" | "center" | "right" | "justify";
  minWidth?: number;
  hidden?: Array<any>;
  nested?: boolean;
}

export interface ITabs {
  key: number;
  label: string;
  topPanel?: boolean;
  icon?: any;
  disabled?: boolean;
  display?: boolean;
  id?: string;
  prop?: string;
  validationGroup?: string;
}

export interface INavPageList {
  labelKey: string;
  path: string;
  icon: any;
  linkOnly?: boolean;
  displayIcon?: boolean;
}
