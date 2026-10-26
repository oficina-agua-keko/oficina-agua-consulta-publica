// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { POST as handlerDelPaquete } from 'oficina-agua-chat-widget/server';

import { POST } from './route';

describe('/api/chat (BFF del chatbot)', () => {
  it('monta el route handler del paquete, sin duplicar su logica', () => {
    expect(POST).toBe(handlerDelPaquete);
  });

  it('rechaza una pregunta vacia con 400 y sin llamar al ApiRest', async () => {
    const respuesta = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-forwarded-for': '203.0.113.7' },
        body: JSON.stringify({ question: '' }),
      }),
    );

    expect(respuesta.status).toBe(400);
    const cuerpo = (await respuesta.json()) as { code: string };
    expect(cuerpo.code).toBe('INVALID_QUESTION');
  });
});
