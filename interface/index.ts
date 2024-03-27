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
