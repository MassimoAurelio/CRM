export interface IMenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_DATA: IMenuItem[] = [
  {
    name: "Home",
    icon: "radix-icons:dashboard",
    url: "/",
  },
  {
    name: "Products",
    icon: "ep:goods",
    url: "/products",
  },
  {
    name: "Payments",
    icon: "ph:contactless-payment",
    url: "/payments",
  },
  {
    name: "Orders",
    icon: "fluent:receipt-28-regular",
    url: "/orders",
  },
  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/customers",
  },

  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/",
  },
  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/",
  },
  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/",
  },
];
