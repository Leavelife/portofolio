import "./ui/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MyPortofolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Comme:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
