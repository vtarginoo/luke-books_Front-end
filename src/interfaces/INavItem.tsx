export interface INavItem {
  label?: string;
  key: React.Key;
  icon?: React.ReactNode;
  children?: INavItem[];
  path?: string;
}
