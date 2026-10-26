import { ChatWidget } from 'oficina-agua-chat-widget';
import 'oficina-agua-chat-widget/styles.css';

import { ConsultaForm } from '@/components/ConsultaForm';
import { configCaptcha } from '@/lib/config';

// La clave del captcha se lee del entorno en cada peticion (no al compilar la imagen).
export const dynamic = 'force-dynamic';

export default function Home() {
  const { provider, siteKey } = configCaptcha();

  return (
    <div className="pagina">
      <header className="encabezado">
        <div className="encabezado__contenido">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="encabezado__logo" src="/logo-keko.png" alt="" width={44} height={44} />
          <span className="encabezado__nombre">Oficina del Agua</span>
        </div>
      </header>

      <main className="principal">
        <section className="tarjeta" aria-labelledby="titulo">
          <h1 id="titulo">Consulta tu estado de cuenta</h1>
          <p className="tarjeta__intro">
            Ingresa el código de tu contador para ver tus recibos y cuánto tienes pendiente. No necesitas registrarte.
          </p>
          <ConsultaForm provider={provider} siteKey={siteKey} />
        </section>
      </main>

      <footer className="pie">
        <p>Oficina del Agua · Consulta pública</p>
      </footer>

      {/* Widget de chat (Feature 2), instalado como dependencia. Habla solo con /api/chat. */}
      <ChatWidget />
    </div>
  );
}
