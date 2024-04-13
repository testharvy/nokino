import Header from "@/components/header/header";

export default function LayoutHello({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<div>

        <h1>Актёры</h1>
        {children}
</div>
    );
}
