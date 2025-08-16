import React, { useState } from "react";
import SizeBarComponent from "../../components/Sizebar";

export default function ReportView() {
  const [reportType, setReportType] = useState("sales");

  const reports = [
    { id: "sales", name: "ລາຍງານຍອດຂາຍ", color: "bg-amber-300" },
    { id: "stock", name: "ລາຍງານສິນຄ້າຄົງເຫຼືອ", color: "bg-amber-300" },
    { id: "sold", name: "ລາຍງານສິນຄ້າທີ່ຂາຍແລ້ວ", color: "bg-amber-300" },
  ];

  const data = [
    {
      id: "R001",
      customer: "ສົມພອນ ພົງສະຫວັນ",
      product: "Honda City 2024",
      code: "HD01234",
      invoice: "HN12345",
      detail: "ຊຳລະແລ້ວ",
      price: "850,000 ກີບ",
      date: "2024-06-15",
      status: "ສຳເລັດ",
    },
    {
      id: "R002",
      customer: "ອຸດົມ ສີວິໄລ",
      product: "Honda Civic 2023",
      code: "HD05678",
      invoice: "HN56789",
      detail: "ລໍຖ້າຊຳລະ",
      price: "950,000 ກີບ",
      date: "2024-06-20",
      status: "ລໍຖ້າ",
    },
  ];

  return (
    <SizeBarComponent>
      <div className="p-6 bg-white rounded-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">ລາຍງານ</h1>

        {/* Date Filter */}
        <div className="flex gap-4 items-center mb-6">
          <div>
            <label className="text-sm text-gray-600">ຈາກ</label>
            <input
              type="date"
              className="border rounded-md p-2 ml-2"
              defaultValue="2024-01-01"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">ຫາ</label>
            <input
              type="date"
              className="border rounded-md p-2 ml-2"
              defaultValue="2024-06-30"
            />
          </div>
          <button className="ml-auto px-4 py-2 bg-red-500 text-white rounded-md">
            ສົ່ງອອກ Excel
          </button>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {reports.map((r) => (
            <button
              key={r.id}
              onClick={() => setReportType(r.id)}
              className={`p-4 rounded-lg text-black text-center  font-bold ${
                reportType === r.id ? r.color : "bg-gray-400"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Report Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">
            {reports.find((r) => r.id === reportType)?.name}
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ລະຫັດ</th>
                <th className="p-2 border">ລູກຄ້າ</th>
                <th className="p-2 border">ສິນຄ້າ</th>
                <th className="p-2 border">ເລກຈັກ</th>
                <th className="p-2 border">ເລກບິນ</th>
                <th className="p-2 border">ລາຍລະອຽດ</th>
                <th className="p-2 border">ລາຄາ</th>
                <th className="p-2 border">ວັນທີ</th>
                <th className="p-2 border">ສະຖານະ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="text-center">
                  <td className="p-2 border">{row.id}</td>
                  <td className="p-2 border">{row.customer}</td>
                  <td className="p-2 border">{row.product}</td>
                  <td className="p-2 border">{row.code}</td>
                  <td className="p-2 border">{row.invoice}</td>
                  <td className="p-2 border">{row.detail}</td>
                  <td className="p-2 border">{row.price}</td>
                  <td className="p-2 border">{row.date}</td>
                  <td
                    className={`p-2 border font-medium ${
                      row.status === "ສຳເລັດ"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SizeBarComponent>
  );
}
