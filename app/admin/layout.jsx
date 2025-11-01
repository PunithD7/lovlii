import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Lovlii. - Admin",
    description: "Lovlii. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
