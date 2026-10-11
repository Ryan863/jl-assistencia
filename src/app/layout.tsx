import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0C1D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jlclima.com.br"),
  title: "JL Clima | Climatização Precisa e Assistência Técnica Especializada",
  description:
    "Instalação e manutenção de ar-condicionado Inverter, refrigeração comercial e residencial, máquinas de lavar e serviços elétricos em Pindamonhangaba (SP) e Marabá (PA).",
  keywords: [
    "JL Clima",
    "ar-condicionado Pindamonhangaba",
    "manutenção ar condicionado Marabá",
    "instalação ar condicionado inverter",
    "conserto geladeira Pindamonhangaba",
    "manutenção lavadora de roupas",
    "refrigeração Moreira César",
    "eletricista Pindamonhangaba",
    "manutenção freezer bebedouro",
  ],
  authors: [{ name: "JL Clima" }],
  openGraph: {
    title: "JL Clima | Climatização Precisa & Assistência Técnica Especializada",
    description:
      "Instalação e manutenção de ar-condicionado, refrigeração e elétrica para residências e comércios em Pindamonhangaba (SP) e Marabá (PA).",
    url: "https://jlclima.com.br",
    siteName: "JL Clima",
    images: [
      {
        url: "/images/hero-technician.jpg",
        width: 1200,
        height: 675,
        alt: "JL Clima - Técnico Especializado em Ar-Condicionado e Refrigeração",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JL Clima | Climatização e Refrigeração Técnica",
    description:
      "Atendimento especializado em Pindamonhangaba (SP) e Marabá (PA). Instalação Inverter, geladeiras, lavadoras e elétrica.",
    images: ["/images/hero-technician.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JL Clima",
  "image": "https://jlclima.com.br/images/hero-technician.jpg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Dr. José Augusto Mesquita, 48",
    "addressLocality": "Pindamonhangaba",
    "addressRegion": "SP",
    "postalCode": "12440-010",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.9238,
    "longitude": -45.4619
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Pindamonhangaba"
    },
    {
      "@type": "City",
      "name": "Marabá"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/jlclima",
    "https://www.instagram.com/p/DHXPuJwJxdn/"
  ],
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Lucas Alves"
    },
    "reviewBody": "Excelente atendimento e prestação de serviço técnico de alta qualidade."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="antialiased selection:bg-[#007AAD] selection:text-white bg-[#0C1D32]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
