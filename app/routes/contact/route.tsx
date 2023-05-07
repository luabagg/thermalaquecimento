import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Thermal Aquecimento - Entre em Contato" }];
};

export default function ContactPage() {
  return (
    <section id="contact">
      <div>
        <div>
          <h1>Fale conosco<span>.</span></h1>
          <hr />
        </div>
      </div>

      <div>
        <div className="six columns tab-whole right">
          <p>Ligue para nós agora para que possamos conversar sobre suas necessidades. Estamos prontos para trabalhar com você e encontrar a solução ideal para o aquecimento de sua casa ou piscina.</p>
          <h3>contato:</h3>
          <p>
            <i className="fas fa-envelope"></i> comercial@thermalaquecimento.com.br
            <br />
            <i className="fas fa-phone"></i> (54) 99653-8879
          </p>
        </div>
      </div>
    </section>
  );
}