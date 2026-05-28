import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planilha de Gestão e Escala",
  description:
    "Baixe gratuitamente a planilha definitiva para controle de leads e faturamento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTLQM6YCEH"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MTLQM6YCEH');
        </script>
        {/* Fallback para quando o usuário está com JavaScript desativado */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }} 
            src="https://www.facebook.com/tr?id=1773986837313693&ev=PageView&noscript=1"
            alt="" 
          />
        </noscript>
      </head>
      <body>
        {children}

        {/* Script do Meta Pixel usando o componente nativo do Next.js */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1773986837313693');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
