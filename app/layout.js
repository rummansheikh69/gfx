import "./globals.css";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

const tommyRegular = localFont({
  variable: "--font-tommy-regular",
  src: [
    {
      path: "./fonts/MADETOMMY_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const tommyLight = localFont({
  variable: "--font-tommy-light",
  src: [
    {
      path: "./fonts/MADETOMMY_Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

const tommyBlack = localFont({
  variable: "--font-tommy-black",
  src: [
    {
      path: "./fonts/MADETOMMY_Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const tommyBold = localFont({
  variable: "--font-tommy-bold",
  src: [
    {
      path: "./fonts/MADETOMMY_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const tommyExtraBold = localFont({
  variable: "--font-tommy-extraBold",
  src: [
    {
      path: "./fonts/MADETOMMY_ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
const tommyMedium = localFont({
  variable: "--font-tommy-medium",
  src: [
    {
      path: "./fonts/MADETOMMY_Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "UX GFX®",
  description: "Made with ❤️ by ux",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#121212",
  appleWebApp: {
    title: "UX GFX®",
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
  icons: [
    {
      url: "/web-app-manifest-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      url: "/web-app-manifest-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  openGraph: {
    title: "UX GFX®",
    description: "Made with ❤️ by ux",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "UX GFX®",
      },
    ],
  },
  twitter: {
    card: "summary_image",
    title: "UX GFX®",
    description: "Made with ❤️ by ux",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "UX GFX®",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "UX GFX",
    "Disproportions",
    "Graphic Design",
    "UI/UX Design",
    "Web Design",
    "Digital Art",
    "Creative Agency",
    "Design Studio",
    "User Experience",
    "Visual Design",
  ],
  authors: [
    {
      name: "UX GFX",
      url: "https://uxgfx.com",
    },
  ],
  creator: "UX GFX",
  publisher: "UX GFX",

  alternates: {
    canonical: "https://uxgfx.com",
  },
  category:
    "uxgfx, graphic design, ui/ux design, web design, digital art, creative agency, design studio, user experience, visual design",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        </head>
        <body
          className={`${tommyBlack.variable} ${tommyRegular.variable} ${tommyLight.variable} ${tommyBold.variable} ${tommyExtraBold.variable} ${tommyMedium.variable} antialiased bg-[#121212]`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
