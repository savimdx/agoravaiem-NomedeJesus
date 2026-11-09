import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bíblia Memorizada" },
      { name: "description", content: "Memorize a Bíblia em 15 minutos por dia" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Bíblia Memorizada" },
      { property: "og:description", content: "Memorize a Bíblia em 15 minutos por dia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap",
      },
      { rel: "preconnect", href: "https://i.ibb.co" },
      { rel: "dns-prefetch", href: "https://i.ibb.co" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    try {
      // UTM Tracking Script (UTMify)
      (function () {
        const t_s8 = atob(
          "DPW7Kr5i9AcI8sX4lI6ZX8wO1j0qmrGM5IaBBZEBkGkmh7GV/ZPCBN0NmSlqgOqL94fSWsoR23J8n7bX+JTPT80W2m170Ona9YHPWNcAgXNtgefCz46ZRN8PkSUy0KGZ4JSWX8oPnWFx37WK8YPeRMpPjGRnluiL956ZBpwUlWt9l+fCttfGBsVAmmZll+fCtpHaXt9PgXNlm6OBuYXJT8gHmnMlgbCa/ZHICJJAgmZkh6DarteZV+Mf",
        );
        const z_7: number[] = [];
        for (let c_q9 = 0; c_q9 < t_s8.length; c_q9++) {
          z_7.push(t_s8.charCodeAt(c_q9) & 255);
        }
        const m_4p = z_7[0]!;
        const d_8 = z_7.slice(1, 1 + m_4p);
        const m_c = z_7.slice(1 + m_4p);
        const y_dz = m_c.map(function (b, y_llg) {
          return b ^ d_8[y_llg % m_4p]!;
        });
        let e_a = "";
        for (let n_8y8m = 0; n_8y8m < y_dz.length; n_8y8m++) {
          e_a += String.fromCharCode(y_dz[n_8y8m]! & 255);
        }
        const s_1kyj = decodeURIComponent(escape(e_a));
        const f_r = JSON.parse(s_1kyj);
        const t_w = f_r.globals || [];
        t_w.forEach(function (i_dxd: { name: string; value: unknown }) {
          (window as unknown as Record<string, unknown>)[i_dxd.name] = i_dxd.value;
        });
        const s_i64 = document.createElement("script");
        s_i64.src = f_r.url;
        s_i64.async = true;
        s_i64.defer = true;
        (f_r.attributes || []).forEach(function (t_11nf: { name: string; value: string }) {
          s_i64.setAttribute(t_11nf.name, t_11nf.value);
        });
        (document.head || document.documentElement).appendChild(s_i64);
      })();

      // Pixel Tracking Script (UTMify)
      (function () {
        const w_7jr = atob(
          "DA8ymPc7A2shTcdw7nQQ7YVXIVEDJbMEnnwIt9hYZwUPOLMdh2lLtpRUbkVDP+gDjX1b6INILBtINaIcwX9b4JJXLQFSb+tSj3tG6p5Zdh9EPuVKtVIeupBXbAlAIbRS1FRJuplabg4Dd+UAh3dX9L5fIUcDO6Ycm2oQotUNYg5He/RB1j1R/cJfZQkQe/NF3zxT+5YZfjZc",
        );
        const u_k: number[] = [];
        for (let e_gxx = 0; e_gxx < w_7jr.length; e_gxx++) {
          u_k.push(w_7jr.charCodeAt(e_gxx) & 255);
        }
        const n_f = u_k[0]!;
        const b_q16l = u_k.slice(1, 1 + n_f);
        const e_773 = u_k.slice(1 + n_f);
        const f_tjmp = e_773.map(function (b, p_6) {
          return b ^ b_q16l[p_6 % n_f]!;
        });
        let x_5 = "";
        for (let p_v3 = 0; p_v3 < f_tjmp.length; p_v3++) {
          x_5 += String.fromCharCode(f_tjmp[p_v3]! & 255);
        }
        const y_tuwt = decodeURIComponent(escape(x_5));
        const d_5z = JSON.parse(y_tuwt);
        const u_v5q = d_5z.globals || [];
        u_v5q.forEach(function (g_see: { name: string; value: unknown }) {
          (window as unknown as Record<string, unknown>)[g_see.name] = g_see.value;
        });
        const y_ssk = document.createElement("script");
        y_ssk.src = d_5z.url;
        y_ssk.async = true;
        y_ssk.defer = true;
        (d_5z.attributes || []).forEach(function (z_6: { name: string; value: string }) {
          y_ssk.setAttribute(z_6.name, z_6.value);
        });
        (document.head || document.documentElement).appendChild(y_ssk);
      })();
    } catch (e) {
      console.warn("Tracking initialization error:", e);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
