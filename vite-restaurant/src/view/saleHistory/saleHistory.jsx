import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Download,
  Search,
  Calendar,
  CreditCard,
  Filter,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  MoreVertical,
} from "lucide-react";
import SizeBarComponent from "../../components/Sizebar";

// --- Mock Data
const SALES = [
  {
    id: "1",
    date: "2025-08-14",
    orderId: "ORD-1001",
    customer: "Khamla S.",
    items: 3,
    payment: "Card",
    status: "Paid",
    amount: 245000,
  },
  {
    id: "2",
    date: "2025-08-14",
    orderId: "ORD-1002",
    customer: "Sommay V.",
    items: 1,
    payment: "Cash",
    status: "Paid",
    amount: 85000,
  },
  {
    id: "3",
    date: "2025-08-13",
    orderId: "ORD-1003",
    customer: "Anong T.",
    items: 2,
    payment: "Transfer",
    status: "Pending",
    amount: 120000,
  },
  {
    id: "4",
    date: "2025-08-12",
    orderId: "ORD-1004",
    customer: "Somsanouk R.",
    items: 4,
    payment: "Card",
    status: "Paid",
    amount: 380000,
  },
];

// --- Utils
const formatCurrency = (v) =>
  new Intl.NumberFormat("lo-LA", {
    style: "currency",
    currency: "LAK",
    maximumFractionDigits: 0,
  }).format(v);
const toDate = (s) => new Date(s + "T00:00:00");

export default function SalesHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [payment, setPayment] = useState("All");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    return SALES.filter((s) => {
      const q = query.trim().toLowerCase();
      const inText =
        !q ||
        s.orderId.toLowerCase().includes(q) ||
        s.customer.toLowerCase().includes(q);
      const statusOk = status === "All" || s.status === status;
      const payOk = payment === "All" || s.payment === payment;
      const d = toDate(s.date);
      const fromOk = !from || d >= toDate(from);
      const toOk = !to || d <= toDate(to);
      return inText && statusOk && payOk && fromOk && toOk;
    }).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [query, status, payment, from, to]);

  const total = filtered.reduce((sum, s) => sum + s.amount, 0);
  const orders = filtered.length;
  const aov = orders ? total / orders : 0;

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const chartData = useMemo(() => {
    const map = new Map();
    filtered.forEach((s) => map.set(s.date, (map.get(s.date) || 0) + s.amount));
    const arr = Array.from(map.entries())
      .map(([date, value]) => ({ date, value }))
      .sort((a, b) => (a.date < b.date ? -1 : 1));
    return arr;
  }, [filtered]);

  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-8 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Sale History</h1>
        {/* Table */}
        <div className="overflow-hidden rounded-2xl border bg-card">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Items</th>
                  <th className="px-4 py-3">Payment</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pageData.map((s) => (
                  <tr key={s.id} className="border-t">
                    <td className="px-4 py-3 whitespace-nowrap">{s.date}</td>
                    <td className="px-4 py-3 font-medium">{s.orderId}</td>
                    <td className="px-4 py-3">{s.customer}</td>
                    <td className="px-4 py-3">{s.items}</td>
                    <td className="px-4 py-3">{s.payment}</td>
                    <td className="px-4 py-3">{s.status}</td>
                    <td className="px-4 py-3 text-right font-semibold">
                      {formatCurrency(s.amount)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex   justify-between">
                        <Eye />  <Edit /> <MoreVertical/>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t bg-white ">
          <p className="text-sm text-gray-500">
            Page {page} of {pages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  page === i + 1
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={page === pages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
