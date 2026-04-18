import './globals.css'

export const metadata = {
  title: 'myzoapp — Premium App Development Agency',
  description: 'We design and develop high-performance iOS & Android apps that look stunning, scale effortlessly and drive real business growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer />
      </head>
      <body>{children}</body>
    </html>
  )
}
