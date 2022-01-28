import {
	SidebarBtn1,
	SidebarBtn2,
	SidebarBtn3,
	SidebarBtn4,
	SidebarBtn5,
	SidebarBtn6,
	IconOpened,
	IconClosed,
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
				path: "/products/dashboard",
				icon: "",
			},
			{
				title: "Drafts",
				path: "/products/drafts",
				icon: "",
				notification: 2,
			},
			{
				title: "Released",
				path: "/products/released",
				icon: "",
			},
			{
				title: "Scheduled",
				path: "/products/scheduled",
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
				path: "/customers/released",
				icon: "",
			},
			{
				title: "Scheduled",
				path: "/customers/scheduled",
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
		path: "/settings",
		icon: <SidebarBtn5 />,
		iconClosed: <IconClosed />,
		iconOpened: <IconOpened />,
		subNav: [
			{
				title: "Dashboard",
				path: "/income/dashboard",
				icon: "",
			},
			{
				title: "Drafts",
				path: "/income/drafts",
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
