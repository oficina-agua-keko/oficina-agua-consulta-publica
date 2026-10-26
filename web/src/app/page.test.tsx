import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './page';

describe('Pagina publica con el widget de chat (HU-59)', () => {
  it('muestra el chat en la misma pagina que el formulario con captcha', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /consulta tu estado de cuenta/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /asistente|chat/i })).toBeInTheDocument();
  });
});
