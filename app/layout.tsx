import '@/styles/globals.css'

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body className="bg-zinc-950 text-zinc-50">{children}</body>
      </html>
    );
}