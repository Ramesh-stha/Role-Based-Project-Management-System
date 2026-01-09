// addproject.services.ts
export const addProjectService = async (formData: FormData) => {
  const res = await fetch("/api/createproject", {
    method: "POST",
    body: formData, // ✅ FormData
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create project");
  }

  return data;
};
