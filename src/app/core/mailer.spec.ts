import { TestBed } from '@angular/core/testing';
import { Mailer } from './mailer';

describe('Mailer', () => {
  const message = { name: 'Ada', email: 'ada@example.com', message: 'Hello' };

  afterEach(() => vi.restoreAllMocks());

  it('posts the message as JSON to Web3Forms', async () => {
    const fetch = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ success: true }), { status: 200 }));

    await TestBed.inject(Mailer).send(message);

    const [url, init] = fetch.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(init?.method).toBe('POST');
    expect(JSON.parse(init?.body as string)).toMatchObject({
      ...message,
      access_key: expect.any(String),
    });
  });

  it('rejects with the API reason on failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: false, message: 'Invalid access key' }), {
        status: 400,
      }),
    );

    await expect(TestBed.inject(Mailer).send(message)).rejects.toThrow(
      'Web3Forms 400: Invalid access key',
    );
  });
});
