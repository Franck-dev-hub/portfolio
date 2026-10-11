import { Injectable } from '@angular/core';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '10ea788d-944f-44f9-ab2e-5f056df2a176';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class Mailer {
  async send(message: ContactMessage): Promise<void> {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Portfolio: message from ${message.name}`,
        from_name: 'Portfolio',
        ...message,
      }),
    });

    if (!response.ok) {
      const { message: reason } = (await response.json().catch(() => ({}))) as {
        message?: string;
      };
      throw new Error(`Web3Forms ${response.status}: ${reason ?? response.statusText}`);
    }
  }
}
