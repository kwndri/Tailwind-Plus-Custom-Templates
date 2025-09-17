export interface Question {
  title: string;
  answer: string;
  isExpanded: boolean;
}

export interface SecondFAQQuestion {
  title: string;
  answer: string;
}

export interface PriceSubscription {
  title: string;
  description: string;
  price: TimeSubscription;
  characteristics: string[];
}

interface TimeSubscription {
  monthly: number;
  yearly: number;
}

export interface Menu {
  title: string;
  submenu: string[];
}

export interface ImageMenu {
  src: string;
  date: string;
  department: string;
  title: string;
  description: string;
}

export interface SecondMenu {
  title: string;
  description: string;
}

export interface Team {
  image: string;
  name: string;
  title: string;
}
