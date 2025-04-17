import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";

export interface Contribution {
    id: number;
    type: string;
    donationType: string;
    quantity: number;
    description: string;
    date: string;
    status: string;
    program: string;
  }

interface Props {
  data: Contribution[];
  onDownloadReceipt: (id: number) => void;
}

const ContributionTable: React.FC<Props> = ({ data, onDownloadReceipt }) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<Contribution>[]>(() => [
    {
      header: "#",
      accessorFn: (_row, index) => index + 1,
      id: "index",
    },
    {
      header: "Program",
      accessorKey: "program",
    },
    {
        header: "Type",
        accessorKey: "type",
        cell: ({ row }) => {
          const type = row.original.type;
          const iconMap: Record<string, string> = {
            Books: "📚",
            Clothes: "👕",
            Toys: "🧸",
            "Food Packets": "🍱",
            Stationery: "✏️",
          };
          const icon = iconMap[type] || "🎁";
          return (
            <span className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{type}</span>
            </span>
          );
        },
      },
    {
      header: "Donation Type", // This is where you show 'New' or 'Used'
      accessorKey: "donationType",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => {
        const value = info.getValue() as string;
        return (
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              value === "Approved"
                ? "bg-green-100 text-green-700"
                : value === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {value}
          </span>
        );
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: (info) => (
        <span className="line-clamp-2 max-w-xs">{info.getValue() as string}</span>
      ),
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (info) =>
        new Date(info.getValue() as string).toLocaleDateString(),
    },
    {
      header: "Receipt",
      cell: ({ row }) => (
        <button
          onClick={() => onDownloadReceipt(row.original.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
        >
          <Download className="w-4 h-4" />
          Receipt
        </button>
      ),
    },
  ], [onDownloadReceipt]);
  

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="smax-w-full overflow-x-auto">
      <div className="flex items-center p-1 w-96">
      <Search className="w-4 h-4 text-gray-500 mr-2" />
      <input
        placeholder="Search..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="outline-none w-full py-2"
      />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm text-sm">
          <thead className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-3 px-4 font-semibold text-gray-700 text-left border-b border-gray-300"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-sm">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition duration-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-4 border-b border-gray-200 text-gray-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-gray-700">
        <div className="space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
      </div>
    </div>
  );
};

export default ContributionTable;
