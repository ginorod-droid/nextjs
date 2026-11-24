import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LeadCapture from "./components/LeadCapture";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SITE = "https://www.acomacapitalpartners.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Acoma Capital Partners | Commercial Real Estate Financing & Brokerage",
  description:
    "When the bank turns you down, Acoma is your answer. Bank statement, lite doc, no doc, rental and bridge financing arranged nationwide for business owners and investors, plus commercial property sales.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Acoma Capital Partners",
    title: "Acoma Capital Partners | Commercial Real Estate Financing & Brokerage",
    description:
      "When the bank turns you down, Acoma is your answer. Bank statement, lite doc, no doc, rental and bridge financing arranged nationwide for business owners and investors, plus commercial property sales.",
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "RealEstateAgent"],
  "@id": SITE + "/#organization",
  name: "Acoma Capital Partners",
  legalName: "Acoma Capital Partners, Inc.",
  url: SITE,
  logo: SITE + "/acoma-horizontal.png",
  image: SITE + "/acoma-horizontal.png",
  telephone: "+1-720-772-1327",
  email: "ginorod@acomacapitalpartners.com",
  description:
    "Denver-based commercial real estate brokerage arranging financing nationwide, including the deals banks decline, and brokering commercial property in Colorado and through licensed local partners across the country.",
  disambiguatingDescription:
    "Independent commercial real estate financing and brokerage firm based in Denver, Colorado, led by principal Gino Rodrigues. A distinct company, unaffiliated with any other business that shares the Acoma name.",
  areaServed: { "@type": "Country", name: "United States" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denver",
    addressRegion: "CO",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Gino Rodrigues",
    jobTitle: "Principal and Responsible Broker",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Colorado Real Estate Company License",
      value: "EC.100052724",
    },
    {
      "@type": "PropertyValue",
      propertyID: "Colorado Employing Broker License",
      value: "ER.040039332",
    },
  ],
  knowsAbout: [
    "Commercial mortgage brokerage",
    "Bank statement commercial loans",
    "No doc commercial loans",
    "DSCR loans",
    "Commercial real estate sales",
  ],
  sameAs: [
    "https://www.linkedin.com/company/acomacapitalpartners",
    "https://www.linkedin.com/in/acomacapitalpartners",
    "https://www.facebook.com/profile.php?id=61595509478266",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        {children}
        <LeadCapture />
      </body>
    </html>
  );
}
