import {
  CollectionIcon,
  ViewGridIcon,
  PlusIcon,
  BellIcon
} from "@heroicons/vue/outline";

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
      name: "Tasks",
      to: "/tasks",
      icon: CollectionIcon
    },
    {
      name: "Notifications",
      to: "/notifications",
      icon: BellIcon
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
      name: "Tasks",
      to: "/tasks",
      icon: CollectionIcon
    },
    {
      name: "Notifications",
      to: "/notifications",
      icon: BellIcon
    }
  ];
  return { navigation, navbar };
};
