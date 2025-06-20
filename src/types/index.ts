export interface StatItem {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface OrderItem {
  icon: string;
  title: string;
  date: string;
}

export interface ProjectItem {
  icon: string;
  name: string;
  members: string[];
  budget: string;
  completion: number;
}

export interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}
