import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alghaithapp.netlify.app"),
  title: {
    default: "Alghaith — Business Systems & Custom Software",
    template: "%s | Alghaith",
  },
  description:
    "Alghaith designs and develops custom business systems, dashboards, web portals and mobile apps.",
  applicationName: "Alghaith",
  authors: [{ name: "Alghaith" }],
  creator: "Alghaith",
  publisher: "Alghaith",
  keywords: [
    "custom software",
    "business systems",
    "dashboards",
    "web portals",
    "mobile apps",
    "أنظمة أعمال",
    "برمجيات حسب الطلب",
    "لوحات معلومات",
    "تطبيقات الجوال",
    "الغيث",
  ],
  icons: {
    icon: [
      { url: "/brand/al-ghayth-mark.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/brand/al-ghayth-mark.png" }],
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}