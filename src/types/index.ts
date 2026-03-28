export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  price: number;
  category: 'coffee' | 'desserts' | 'breakfast' | 'pizza' | 'drinks';
  image: string;
  featured?: boolean;
  tags?: string[];
}

export interface WorkingHours {
  day: string;
  open: string;
  close: string;
}

export type CategoryKey = 'coffee' | 'desserts' | 'breakfast' | 'pizza' | 'drinks';
