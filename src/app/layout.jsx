import "./scss/normalize.scss"
import "@fontsource/poppins";
import "@fontsource/roboto";

export default function RootLayout({children}) {
  return (
     <html lang="fr">
     <body>{children}</body>
     </html>
  );
}
