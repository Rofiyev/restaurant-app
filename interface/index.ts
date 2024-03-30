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

export interface ILoginForm {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  full_name: string;
  email: string;
  username: string;
  phone: string | null;
  image: string | null;
  is_admin: boolean;
}

export interface IToken {
  access: string;
  refresh: string;
}

export interface IResetPassword {
  email: string;
  activation_code: number;
  new_password: string;
  confirm_password: string;
}
