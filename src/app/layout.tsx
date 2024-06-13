import type { Metadata } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Features from "./components/Features";
import SafetyandPleasure from "./components/safteyandPleasure";
import CustomerReviews from "./components/customerReview";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./globals.css"

export const metadata: Metadata = {
  title: "Ride Options",
  description: "Created By Ride Options Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageTitle = metadata.title ?? "Default Title";
  const pageDescription = metadata.description ?? "Default Description";

  return (
    <html lang="en">
      <Head>  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
        
        <title>{String(pageTitle)}</title>
        <meta name="description" content={String(pageDescription)} />
      </Head>
      <body className="font-onest bg-white">
        {/* <Header /> */}
        <main>
          {/* <Features /> */}
          <br />
          {/* <SafetyandPleasure /> */}
          <CustomerReviews />
          {/* <FAQ /> */}
         
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </body>
    </html>
  );
}
