import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from '../../core/i18n';
import { ContactMessage, Mailer } from '../../core/mailer';
import { WindowFrame } from '../window/window';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, WindowFrame],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  private readonly mailer = inject(Mailer);
  protected readonly t = inject(I18n).t;
  // Zoneless: anything set after an await must be a signal to re-render.
  protected readonly status = signal<SendStatus>('idle');

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    try {
      await this.mailer.send(this.form.getRawValue());
      this.form.reset();
      this.status.set('sent');
    } catch (error) {
      console.error('Contact form send failed', error);
      this.status.set('error');
    }
  }

  protected showError(field: keyof ContactMessage): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }
}
