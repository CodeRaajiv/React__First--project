import React from 'react';

const tableHeading = [
    {
        colName: "Avatar",
        icon: "📞"
    },
    {
        colName: "Name",
        icon: "📛"
    },
    {
        colName: "Status",
        icon: "✅"
    }
];
const tableData = [
    {
        avatar: "👨🏻",
        name: "Alice",
        status: "Active"
    },
    {
        avatar: "👨🏻‍💻",
        name: "Bob",
        status: "Inactive"
    }
];
const Tablesection = () => {
    return (
        <>
            <div className="container mx-auto p-6">
                <h2 className='text-2xl font-bold mb-4'>📊User Data</h2>
                <table className='min-w-full border border-collapse'>
                    <thead>
                        <tr>
                            {tableHeading.map((heading) => (
                                <th key={heading.colName} className='border border-gray-600 bg-gray-300 px-4 py-2'>
                                    {heading.icon} {heading.colName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td className='border border-gray-600 bg-transparent px-4 py-2'>{data.avatar}</td>
                                <td className='border border-gray-600 bg-transparent px-4 py-2'>{data.name}</td>
                                <td className={`border border-gray-600 bg-transparent px-4 py-2 
                                     ${data.status === "Active" ? "text-green-600": "text-red-600"}`}>
                                    {data.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Tablesection;
