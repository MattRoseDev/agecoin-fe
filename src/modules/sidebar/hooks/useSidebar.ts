import { CollectionIcon, ViewGridIcon, PlusIcon } from "@heroicons/vue/outline";

type NavItem = {
  name: string;
  to: string;
  // TODO: fix type
  icon: typeof ViewGridIcon;
};

type UseSidebar = {
  navigation: NavItem[];
  navbar: NavItem[];
};

export default (): UseSidebar => {
  const navigation = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: ViewGridIcon
    },
    {
      name: "History",
      to: "/history",
      icon: CollectionIcon
    },
    {
      name: "New Task",
      to: "/task/add",
      icon: PlusIcon
    }
  ];

  const navbar = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: ViewGridIcon
    },
    {
      name: "New Task",
      to: "/task/add",
      icon: PlusIcon
    },
    {
      name: "History",
      to: "/history",
      icon: CollectionIcon
    }
  ];
  return { navigation, navbar };
};
