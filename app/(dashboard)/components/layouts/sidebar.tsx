"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBox,
  FiCreditCard,
  FiLayers,
  FiLogOut,
  FiShoppingCart,
} from "react-icons/fi";

export default function SidebarAdmin() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      link: "/admin/products",
    },
    {
      name: "Categories",
      icon: FiLayers,
      link: "/admin/categories",
    },
    {
      name: "Transactions",
      icon: FiShoppingCart,
      link: "/admin/transactions",
    },
    {
      name: "Bank Information",
      icon: FiCreditCard,
      link: "/admin/bank-info",
    },
  ];

  return (
    <aside className="w-80 min-h-screen border-r border-gray-100 bg-white fixed left-0 top-0 mx-10">
      <div className="flex py-8 px-14 justify-center border-b border-gray-200">
        <Image
          src="/images/admin.png"
          alt="logo admin"
          width={216}
          height={36}
        />
      </div>
      <div className="flex flex-col gap-2 mt-12 p-5">
        {menuItems.map((item, index) => {
          const isActive = item.link === pathname;
          return (
            <Link
              href={item.link}
              key={index}
              className={`flex gap-3 items-center py-3 px-4.5 rounded-lg font-medium duration-300 ${
                isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"
              }`}
            >
              <item.icon size={24} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="flex gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-10"
      >
        <FiLogOut size={24} />
        Log Out
      </Link>
    </aside>
  );
}
