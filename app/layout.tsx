import type {Metadata} from "next";
import {ReactNode} from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "ترخینه",
    description: "رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند.",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
