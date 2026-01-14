"use client";
import toast from "react-hot-toast";
import { useGetOrganization } from "@/src/hooks/query/organization.query";
import { useDeleteOrganization } from "@/src/hooks/mutation/organization.mutation";
import { z } from "zod";
export const organizationListSchema = z.object({
  _id: z.string(),
  organizationname: z.string(),
  organizationemail: z.string(),
});

export type OrganizationList = z.infer<typeof organizationListSchema>;

const OrganizationListComponent = () => {
  //getting list of organization
  const { data = [], isLoading } = useGetOrganization();
  const { mutate } = useDeleteOrganization();

  //passing organization id to handle delete
  const handleDelete = (_id: string) => {
    return mutate(_id,{
       onSuccess:()=>{
         toast.success("Organization deleted successfully.");
       },
      onError: (error: any) => {
        toast.error("Deletion failed.");
        console.error("Failed to delete organization:", error);
      },
      }
   );
  };

  if (isLoading) return <div>Loading...</div>;

  if (!data)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        No List of Organization found
      </div>
    );

  return (
    <div className="p-4 rounded-md shadow-md mt-4">
      <h3 className="font-bold text-xl text-center mb-4">
        List Of Organizations
      </h3>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-center">
          <thead className="bg-gray-100 mb-2">
            <tr>
              <th>Organization Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.orgData?.map((org: OrganizationList) => (
              <tr key={org._id}>
                <td className="border-t p-2 ">{org.organizationname}</td>
                <td className="border-t p-2 ">{org.organizationemail}</td>
                <td className="border-t p-2 ">
                  <button
                    onClick={() => handleDelete(org._id)}
                    className="bg-red-100 text-red-700 px-2 py-1 cursor-pointer rounded-md hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4 items-center">
        {data.orgData?.map((org: OrganizationList) => (
          <div
            key={org._id}
            className="flex flex-col items-center shadow-md p-4 rounded-md sm:text-sm"
          >
            <div className="bg-gray-700 text-white font-semibold rounded-md p-2">
              {org.organizationname}
            </div>
            <div className="text-gray-500">{org.organizationemail}</div>
            <button
              onClick={() => handleDelete(org._id)}
              className="mt-2 bg-red-200 text-red-700 hover:bg-red-300 px-2 py-1 rounded-md cursor-pointer "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationListComponent;
