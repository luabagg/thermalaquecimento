import {
  Link,
} from "@remix-run/react";
import * as React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="app">
      <header>
        <div>
          <div>
            <Link to="#">Thermal Aquecimento</Link>
          </div>

          <nav id="nav-wrap">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Nosso trabalho</Link></li>
              <li><Link to="/about">Sobre nós</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </nav>

          <ul>
            <li><Link to="https://www.instagram.com/thermalaquec"><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="mailto:comercial@thermalaquecimento.com.br?subject=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"><i className="fas fa-envelope-square"></i></Link></li>
            <li><Link to="https://www.facebook.com/thermalaquec"><i className="fab fa-facebook-square"></i></Link></li>
          </ul>
        </div>
      </header>

      <>
        <div>{children}</div>
      </>

      <footer>
        <div>
          <div>
            <ul className="social-links">
              <li><a href="https://twitter.com/thermalaquec"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/thermalaquec"><i className="fab fa-instagram"></i></a></li>
              <li><a href="mailto:comercial@thermalaquecimento.com.br?subject=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"><i className="fas fa-envelope"></i></a></li>
              <li><a href="https://www.facebook.com/thermalaquec"><i className="fab fa-facebook-square"></i></a></li>
              <li><a href="https://wa.me/5554999161816/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"><i className="fab fa-whatsapp"></i></a></li>
            </ul>

            <hr />

            <div>
              <div className="footer-logo"></div>
              <p>
                Aqueça seu ambiente e desfrute do conforto que merece. Entre em contato para soluções personalizadas de aquecimento residencial e para piscinas.
              </p>
            </div>
          </div>

          <ul className="copyright">
            <li>&copy; Thermal Aquecimento LTDA.</li>
            <li>created by @luabagg</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}