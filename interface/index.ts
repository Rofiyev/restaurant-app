export interface ICarusel {
  superLargeDesktop: {
    breakpoint: { max: number; min: number };
    items: number;
  };
  desktop: {
    breakpoint: { max: number; min: number };
    items: number;
  };
  tablet: {
    breakpoint: { max: number; min: number };
    items: number;
  };
  mobile: {
    breakpoint: { max: number; min: number };
    items: number;
  };
}

export interface ICardsMenu {
  icon: JSX.Element;
  label: string;
}

export interface ISidebarItem extends ICardsMenu {
  route: string;
}

export interface IRegisterForm {
  full_name: string;
  email: string;
  username: string;
  password: string;
  phone?: string;
  isAdmin?: boolean;
}

export interface IActivateCode {
  email: string;
  activate_code: number;
}
