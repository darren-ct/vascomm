"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Column } from "@/types";

import {
  useReactTable,
  flexRender,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";

interface BaseTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  classNames?: {
    headerRow?: string;
    bodyRow?: string;
  };
}

export function BaseTable<T extends Record<string, unknown>>({
  data,
  columns: rawColumns,
  classNames,
}: BaseTableProps<T>): JSX.Element {
  const columns = rawColumns.map((rawCol) => ({
    accessorKey: rawCol.key,
    header: () => rawCol.formatterHeader(),
    cell: ({ row }) => rawCol.formatterCell(row.original, row.index),
  })) as ColumnDef<T>[];

  const table = useReactTable<T>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className={cn(classNames?.headerRow)}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className="px-0 py-0 h-min">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className={cn(classNames?.bodyRow)}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-0 py-0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
