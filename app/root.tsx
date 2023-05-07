import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Outlet,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

/* components */
import Document from "~/components/document"
import Layout from "~/components/layout"
import Unknown from "./components/errors/unknown";
import Unauthorized from "./components/errors/unauthorized";
import Forbidden from "./components/errors/forbidden";
import NotFound from "./components/errors/notFound";


/* styles */
import globalStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStylesUrl
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  },
];

export const meta: V2_MetaFunction = () => [
  { 
    charSet: "utf-8"
  },
  { 
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  },
  { 
    name: "author",
    content: "luabagg"
  },
  { 
    name: "description",
    content: "Mantenha a sua casa e piscina aquecidas durante todo o ano com a Thermal Aquecimento. Oferecemos serviços profissionais de instalação e manutenção de sistemas de aquecimento residencial e para piscinas, para você conseguir desfrutar de conforto e lazer em todas as estações. Entre em contato conosco hoje mesmo e veja como podemos tornar sua casa e piscina mais acolhedoras e agradáveis."
  },
];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        return Unauthorized
      case 403:
        return Forbidden
      case 404:
        return NotFound

      default:
        return Unknown
    }
  }

  return Unknown
}
