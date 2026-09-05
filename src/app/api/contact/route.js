import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/contact';
import { Resend } from 'resend';

// Inicializar resend con API del env de Next.js
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Conectamos a la base de datos
    await dbConnect();

    // Extraemos los datos del body
    const body = await req.json();
    const { name, email, message, token } = body;

    // Validación básica de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Por favor completa todos los campos.' }, 
        { status: 400 }
      );
    }

    // Validación de reCAPTCHA
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token de seguridad no proporcionado.' }, 
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const recaptchaRes = await fetch(verificationUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, message: 'Validación de seguridad fallida. ¿Eres un robot?' }, 
        { status: 403 }
      );
    }

    // Guardamos el mensaje en MongoDB
    const nuevoMensaje = new Contact({
      name,
      email,
      message
    });

    await nuevoMensaje.save();

    // Enviar correo usando resend con plantilla HTML
    try {
      await resend.emails.send({
        from: 'Portafolio Sybella <onboarding@resend.dev>',
        to: 'sybellasss@gmail.com',
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f4f5; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
            <div style="background-color: #0F0E0E; padding: 32px 20px; text-align: center;">
              <img 
                src="https://sybellasandoval.cl/images/logo-sybella-sandoval.png" 
                alt="Sybella Sandoval Logo" 
                style="max-width: 140px; height: auto; display: inline-block; border: 0; filter: brightness(0) invert(1);" 
              />
              <p style="color: #a1a1aa; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 12px 0 0 0;">Nuevo Mensaje de Contacto</p>
            </div>
            <div style="background-color: #ffffff; padding: 40px 30px;">
              <h2 style="color: #09090b; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 8px; letter-spacing: -0.5px;">Has recibido una nueva consulta</h2>
              <p style="font-size: 15px; color: #71717a; line-height: 1.5; margin-top: 0; margin-bottom: 24px;">Detalles de la persona interesada a través de tu portafolio:</p>
              <div style="background-color: #fafafa; padding: 24px; border-radius: 8px; border: 1px solid #f0f0f0; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding-bottom: 12px; font-size: 14px; color: #71717a; width: 80px; vertical-align: top;"><strong>Nombre:</strong></td>
                    <td style="padding-bottom: 12px; font-size: 14px; color: #09090b; vertical-align: top;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 16px; font-size: 14px; color: #71717a; vertical-align: top;"><strong>Correo:</strong></td>
                    <td style="padding-bottom: 16px; font-size: 14px; vertical-align: top;">
                      <a href="mailto:${email}" style="color: #09090b; text-decoration: underline; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                </table>
                <div style="border-top: 1px solid #eaeaea; padding-top: 16px; margin-top: 4px;">
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #71717a;"><strong>Mensaje:</strong></p>
                  <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e4e4e7; color: #27272a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: Tu mensaje en mi portafolio" style="background-color: #09090b; color: #ffffff; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-block;">Responder directamente</a>
              </div>
            </div>
            <div style="background-color: #f4f4f5; padding: 20px; text-align: center;">
              <p style="font-size: 12px; color: #a1a1aa; margin: 0; line-height: 1.4;">
                Este correo fue enviado automáticamente desde el sistema de contacto de tu portafolio web.
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error al enviar el correo con Resend:', emailError);
    }

    return NextResponse.json({ success: true, message: 'Mensaje enviado y verificado correctamente' }, { status: 201 });

  } catch (error) {
    console.error('Error en ruta de contacto:', error);
    return NextResponse.json({ success: false, message: 'Error en el servidor al procesar el mensaje', error: error.message }, { status: 500 });
  }
}