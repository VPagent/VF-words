import { UserOutlined, RightSquareOutlined } from "@ant-design/icons";

export const menuItems = [
  { icon: UserOutlined, label: "Account", path: "/" },
  {
    icon: RightSquareOutlined,
    label: "Tests",
    // path: "/tests",
    chilrden: [
      { icon: UserOutlined, label: "Tests", path: "/tests" },
      { icon: UserOutlined, label: "Create test", path: "/createTest" }
    ]
  }
];
