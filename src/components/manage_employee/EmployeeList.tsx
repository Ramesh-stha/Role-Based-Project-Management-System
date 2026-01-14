// "use client";
// import { z } from "zod";
// import { useGetOrganizations } from "@/src/hooks/mutation/organization.mutation";

// const organizationDetails = z.object({
//   _id: z.number(),
//   organization_name: z.string(),
//   created_On: z.string(),
// });

// type organizationDetails = z.infer<typeof organizationDetails>;

// const OrganizationList = () => {
//   const handleDelete = (id: number) => {
//     console.log("Delete organization with ID:", id);
//     // Implement delete functionality later
//   };

//   const { data, isLoading } = useGetOrganizations();
//   if (isLoading) {
//     return <div>Loading .......</div>;
//   }
//   return (
//     <div className="p-4 rounded-md shadow-md mt-4">
//       <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">
//         List Of Organizations
//       </h3>

//       {/* Desktop Table */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full text-center">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4 border-b">ID</th>
//               <th className="py-2 px-4 border-b">Organization Name</th>
//               <th className="py-2 px-4 border-b">Created On</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((org: any) => (
//               <tr
//                 key={org._id}
//                 className="hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <td className="py-2 px-4 border-b">{org._id}</td>
//                 <td className="py-2 px-4 border-b wrap-break-word">
//                   {org.organization_name}
//                 </td>
//                 <td className="py-2 px-4 border-b">{org.created_On}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     onClick={() => handleDelete(org._id)}
//                     className="bg-red-100 text-red-700 px-2 py-1 rounded-md hover:bg-red-200 transition-colors cursor-pointer duration-200"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile List/Card View */}
//       <div className="md:hidden flex flex-col gap-4">
//         {data.map((org: any) => (
//           <div
//             key={org._id}
//             className="border rounded-md shadow-md p-4 flex flex-col"
//           >
//             <span className="font-medium justify-self-c enter">
//               {org.organization_name}
//             </span>
//             <span className="text-gray-500">Created On: {org.created_On}</span>
//             <button
//               onClick={() => handleDelete(org._id)}
//               className="mt-2 bg-red-100 text-red-700 px-2 py-1 cursor-pointer rounded-md hover:bg-red-200"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrganizationList;
