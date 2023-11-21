import '@/styles/globals.css'

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body className="bg-black text-white px-2 sm:px-4">{children}</body>
      </html>
    );
}
