"use client";
import { useState, useRef } from "react";
import loadScript from "load-script";

declare global {
    interface Window {
      grecaptcha: any;
    }
  }
  
  export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ loading: false, error: "", success: "" });
    
    const recaptchaLoadedRef = useRef(false);
  
    const loadRecaptchaScript = () => {
      if (recaptchaLoadedRef.current) return; 
  
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
          console.error("Falta NEXT_PUBLIC_RECAPTCHA_SITE_KEY en el .env");
          return;
      }
  
      loadScript(`https://www.google.com/recaptcha/api.js?render=${siteKey}`, (err, script) => {
        if (err) {
          console.error("Error al cargar el script de reCAPTCHA", err);
        } else {
          recaptchaLoadedRef.current = true;
          console.log("Script de reCAPTCHA cargado exitosamente solo en /contacto");
        }
      });
    };
  
    const handleFocusFirstInput = () => {
      loadRecaptchaScript();
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus({ loading: true, error: "", success: "" });
  
      // Validar si la API global de Google está disponible
      if (!window.grecaptcha) {
        setStatus({ loading: false, error: "reCAPTCHA no está listo aún. Espera un momento.", success: "" });
        // Intentar cargar de emergencia por si acaso
        loadRecaptchaScript();
        return;
      }
  
      try {
        // Ejecutar reCAPTCHA para obtener el token
        // (Esto usa la API imperativa window.grecaptcha.execute)
        const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact_form' });
  
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  
        const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://portafolio-sybella-production.up.railway.app'
    : 'http://localhost:5000';
  
        // Enviar los datos y el token al back
        const res = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message || "Hubo un error al enviar el mensaje.");
        }
  
        setStatus({ loading: false, error: "", success: "¡Mensaje enviado con éxito!" });
        setFormData({ name: "", email: "", message: "" });
      } catch (err: any) {
        setStatus({ loading: false, error: err.message, success: "" });
      }
    };
  
    return (
      <main className="max-w-xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocusFirstInput} 
              required
              className="w-full border rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocusFirstInput}
              required
              className="w-full border rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocusFirstInput}
              required
              className="w-full border rounded-md p-2"
            />
          </div>
  
          <button
            type="submit"
            disabled={status.loading}
            className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
          >
            {status.loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
  
          {status.error && <p className="text-red-500 text-sm mt-2">{status.error}</p>}
          {status.success && <p className="text-green-600 text-sm mt-2">{status.success}</p>}
        </form>
      </main>
    );
  }