'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  subject: string;
  message: string;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '2525'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // For development, set to true in production
    }
  });
};

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration in environment variables');
      return {
        success: false,
        error: 'Configuración de email no disponible. Contacta al administrador.'
      };
    }

    // Extract form data
    const data: ContactFormData = {
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Validate required fields
    if (!data.subject || !data.message) {
      return {
        success: false,
        error: 'Todos los campos requeridos deben ser completados'
      };
    }

    // Validate message length
    if (data.message.length < 10) {
      return {
        success: false,
        error: 'El comentario debe tener al menos 10 caracteres'
      };
    }

    // Send email using nodemailer with SMTP2GO
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_FROM || '"celfun.com" <formulario@celfun.com>',
      to: process.env.SMTP_TO,
      subject: `[Comentarios y Quejas] ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo comentario/queja anónima
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Tipo:</strong> ${data.subject}</p>
            <p style="margin: 10px 0;"><strong>Comentario:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
            <p style="margin: 10px 0; color: #6c757d;">
              <strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { 
                timeZone: 'America/Mexico_City',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="margin: 10px 0; font-style: italic; color: #6c757d;">
              Este comentario fue enviado de forma anónima desde el sitio web de Celfun.com
            </p>
          </div>
        </div>
      `,
      text: `
Nuevo comentario/queja anónima

Tipo: ${data.subject}

Comentario:
${data.message}

Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })}

Este comentario fue enviado de forma anónima desde el sitio web de Celfun.com
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Email enviado exitosamente'
    };

  } catch (error) {
    console.error('Error sending contact email:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        return {
          success: false,
          error: 'Error de autenticación con el servidor de email. Contacta al administrador.'
        };
      } else if (error.message.includes('ECONNECTION') || error.message.includes('ENOTFOUND')) {
        return {
          success: false,
          error: 'No se pudo conectar al servidor de email. Verifica tu conexión.'
        };
      }
    }
    
    return {
      success: false,
      error: 'Error interno del servidor. Por favor, inténtalo de nuevo.'
    };
  }
}