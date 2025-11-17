import DataTable from "@/components/DataTable"

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
]

const data = [
  { name: "Alice", email: "alice@mail.com", role: "Admin" },
  { name: "Bob", email: "bob@mail.com", role: "User" },
]

export default function App() {
  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
