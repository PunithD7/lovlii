import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Lovlii. - Store Dashboard",
    description: "Lovlii. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
