import { AnalyticsWrapper } from './components/analytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
