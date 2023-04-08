import { Metadata } from "next/types";
import Layout from "components/Layout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kévin Colonjard — Développeur web",
  description:
    "Portfolio de Kévin Colonjard, développeur web à Lyon, spécialisé en JavaScript / React.",
  icons: ["/favicon.svg"],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="fr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
