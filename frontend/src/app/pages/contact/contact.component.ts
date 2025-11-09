import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ToastModule
  ],
  template: `
    <div class="contact-container">
      <h1 class="text-center mb-4">Contáctanos</h1>

      <div class="grid">
        <div class="col-12 md:col-6">
          <p-card header="Información de Contacto">
            <div class="contact-info">
              <p><strong>Dirección:</strong> Calle Principal 123, Ciudad</p>
              <p><strong>Teléfono:</strong> +593 123 456 789</p>
              <p><strong>Email:</strong> info@constructora-xyz.com</p>
              <p><strong>Horario:</strong> Lunes a Viernes 8:00 - 18:00</p>
            </div>
          </p-card>
        </div>

        <div class="col-12 md:col-6">
          <p-card header="Envíanos un Mensaje">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="p-field mb-3">
                <label for="name" class="p-d-block mb-2">Nombre:</label>
                <input
                  id="name"
                  type="text"
                  pInputText
                  [(ngModel)]="contactData.name"
                  name="name"
                  required
                  class="w-full">
              </div>

              <div class="p-field mb-3">
                <label for="email" class="p-d-block mb-2">Email:</label>
                <input
                  id="email"
                  type="email"
                  pInputText
                  [(ngModel)]="contactData.email"
                  name="email"
                  required
                  class="w-full">
              </div>

              <div class="p-field mb-3">
                <label for="message" class="p-d-block mb-2">Mensaje:</label>
                <textarea
                  id="message"
                  [(ngModel)]="contactData.message"
                  name="message"
                  rows="5"
                  required
                  class="w-full p-inputtextarea">
                </textarea>
              </div>

              <p-button
                type="submit"
                label="Enviar Mensaje"
                [disabled]="!contactForm.form.valid"
                styleClass="w-full">
              </p-button>
            </form>
          </p-card>
        </div>
      </div>
    </div>

    <p-toast></p-toast>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .col-12 {
      flex: 0 0 100%;
    }
    .col-12.md\\:col-6 {
      flex: 0 0 100%;
    }
    @media (min-width: 768px) {
      .col-12.md\\:col-6 {
        flex: 0 0 calc(50% - 1rem);
      }
    }
    .contact-info p {
      margin-bottom: 0.5rem;
    }
    .p-field {
      margin-bottom: 1rem;
    }
    .w-full {
      width: 100%;
    }
  `],
  providers: [MessageService]
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  onSubmit(): void {
    this.apiService.sendContactMessage(this.contactData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Mensaje Enviado',
          detail: 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.'
        });
        this.contactData = { name: '', email: '', message: '' };
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
        });
      }
    });
  }
}