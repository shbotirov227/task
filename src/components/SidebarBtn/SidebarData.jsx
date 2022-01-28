// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
	SidebarBtn1,
	SidebarBtn2,
	SidebarBtn3,
	SidebarBtn4,
	SidebarBtn5,
	SidebarBtn6,
	IconOpened,
	IconClosed
} from "../../assets/icons/icons";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <SidebarBtn1 />,
	},

	{
		title: "Products",
		path: "/products",
		icon: <SidebarBtn2 />,
		iconClosed: <IconClosed />,
		iconOpened: <IconOpened />,
		subNav: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: "",
				notification: "",
			},
			{
				title: "Drafts",
				path: "/drafts",
				icon: "",
				notification: 2,
			},
			{
				title: "Released",
				path: "/released",
				icon: "",
				notification: "",
			},
			{
				title: "Scheduled",
				path: "/scheduled",
				icon: "",
				notification: 8,
			},
		],
	},

	{
		title: "Customers",
		path: "/customers",
		icon: <SidebarBtn3 />,
		iconClosed: <IconClosed />,
		iconOpened: <IconOpened />,
		subNav: [
			{
				title: "Released",
				path: "/released",
				icon: "",
				notification: "",
			},
			{
				title: "Scheduled",
				path: "/scheduled",
				icon: "",
				notification: 8,
			},
		],
	},

	{
		title: "Shop",
		path: "/shop",
		icon: <SidebarBtn4 />,
	},

	{
		title: "Income",
		path: "/income",
		icon: <SidebarBtn5 />,
		iconClosed: <IconClosed />,
		iconOpened: <IconOpened />,
		subNav: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: "",
				notification: "",
			},
			{
				title: "Drafts",
				path: "/drafts",
				icon: "",
				notification: 2,
			},
		],
	},

	{
		title: "Promote",
		path: "/promote",
		icon: <SidebarBtn6 />,
	},
];
