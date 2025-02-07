import { FaFileInvoice, FaRegCalendarAlt, FaUsers } from "react-icons/fa";

const cardData = [
  {
    icon: FaFileInvoice, // Store component reference, NOT JSX
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.",
    color: "bg-blue-500",
  },
  {
    icon: FaRegCalendarAlt,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    color: "bg-teal-500",
  },
  {
    icon: FaUsers,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization.",
    color: "bg-blue-400",
  },
];

export default cardData;
