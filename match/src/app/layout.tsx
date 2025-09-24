import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import MainDesktop from "./components/MainDesktop";

export const metadata: Metadata = {
  title: "Gerenciador de Usuários | Frontend Challenge",
  description:
    "Aplicação em Next.js para listagem e gerenciamento de usuários, com React Query, Tailwind e ShadcnUI. Desafio técnico frontend.",
  icons: {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU6CGQIPweu6hjsiHdhnxyWE3Ar9HLrF4aw&s",
  },
  openGraph: {
    title: "Gerenciador de Usuários",
    description:
      "Aplicação em Next.js para listagem e gerenciamento de usuários.",
    url: "https://seu-dominio.com",
    siteName: "Gerenciador de Usuários",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU6CGQIPweu6hjsiHdhnxyWE3Ar9HLrF4aw&s", // caminho da imagem
        width: 1200,
        height: 630,
        alt: "Preview da aplicação",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

// Script inline para aplicar dark mode antes da hidratação
const setInitialTheme = `(function() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Executa antes da renderização do body */}
        <script
          dangerouslySetInnerHTML={{ __html: setInitialTheme }}
          id="theme-script"
        />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 transition-colors duration-200">
        <Providers>
          <MainDesktop>{children}</MainDesktop>
        </Providers>
      </body>
    </html>
  );
}
