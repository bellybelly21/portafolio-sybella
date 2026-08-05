const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const {Resend} = require('resend');

// Inicializar resend con API del env
const resend = new Resend(process.env.RESEND_API_KEY);

// Ruta POST para recibir y verificar el mensaje de contacto
router.post('/', async (req, res) => {
  try {
    const { name, email, message, token } = req.body;

    // Validación básica de campos
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Por favor completa todos los campos.' });
    }

    // Validación de reCAPTCHA
    if (!token) {
      return res.status(400).json({ success: false, message: 'Token de seguridad no proporcionado.' });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    // Hacemos la petición a Google para verificar el token
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const recaptchaRes = await fetch(verificationUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();

    // Google evalúa la puntuación (score) de 0.0 (bot) a 1.0 (humano)
    // Un valor de 0.5 o superior se considera seguro
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(403).json({ 
        success: false, 
        message: 'Validación de seguridad fallida. ¿Eres un robot?' 
      });
    }

    // Si pasa el reCAPTCHA, guardamos el mensaje en MongoDB
    const nuevoMensaje = new Contact({
      name,
      email,
      message
    });

    await nuevoMensaje.save();

    // Enviar correo usando resend con plantilla HTML
    try{
        await resend.emails.send({
            from:'Portafolio Sybella <onboarding@resend.dev>',
            to: 'sybellasss@gmail.com',
            subject:`Nuevo mensaje de contacto de ${name}`,
            html:`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">Nuevo mensaje desde tu Portafolio</h2>
            <p style="font-size: 16px; color: #555;">Has recibido un nuevo mensaje de contacto:</p>
            
            <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px solid #ddd; margin: 20px 0;">
              <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Mensaje:</strong></p>
              <p style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 12px; color: #888; text-align: center; margin-top: 20px;">Este correo fue enviado automáticamente desde el formulario de contacto.</p>
          </div>
        `,
        });

    } catch (emailError) {
        console.error('Error al enviar el correo con Resend:', emailError);
    }

    res.status(201).json({ success: true, message: 'Mensaje enviado y verificado correctamente' });
  } catch (error) {
    console.error('Error en ruta de contacto:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor al procesar el mensaje', error });
  }
});

module.exports = router;