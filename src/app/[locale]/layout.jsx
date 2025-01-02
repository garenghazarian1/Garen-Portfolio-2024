import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { inter } from "@/app/ui/fonts";

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// -----------------
