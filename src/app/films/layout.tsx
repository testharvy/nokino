export default function KinoLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
                <h1>Фильмы</h1>
                {children}
        </>
    );
}
