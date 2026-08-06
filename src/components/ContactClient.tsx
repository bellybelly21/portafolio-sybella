"use client";

import { useState, useRef } from "react";
import loadScript from "load-script";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactClient() {
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

    if (!window.grecaptcha) {
      setStatus({ loading: false, error: "reCAPTCHA no está listo aún. Espera un momento.", success: "" });
      loadRecaptchaScript();
      return;
    }

    try {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact_form' });
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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
    <div className="bg-white/90 backdrop-blur-md border border-neutral-200/80 p-8 md:p-10 rounded-2xl shadow-xl w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocusFirstInput} 
            required
            placeholder="Tu nombre o empresa"
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all text-neutral-900 placeholder:text-neutral-400"
          />
        </div>
  
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocusFirstInput}
            required
            placeholder="correo@ejemplo.com"
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all text-neutral-900 placeholder:text-neutral-400"
          />
        </div>
  
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Mensaje</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocusFirstInput}
            required
            placeholder="Cuéntame sobre tu proyecto o idea..."
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all resize-none text-neutral-900 placeholder:text-neutral-400"
          />
        </div>
  
        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-black text-white font-medium py-3.5 px-6 rounded-lg hover:bg-neutral-800 transition-all duration-300 cursor-pointer disabled:opacity-50 shadow-md"
        >
          {status.loading ? "Enviando mensaje..." : "Enviar Mensaje"}
        </button>

        {/* Texto legal requerido por Google cuando se oculta la insignia flotante */}
        <p className="text-[11px] text-neutral-400 text-center leading-tight">
          Este sitio está protegido por reCAPTCHA y se aplican la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-neutral-600">
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-neutral-600">
            Términos de Servicio
          </a>{" "}
          de Google.
        </p>
  
        {status.error && <p className="text-red-600 text-sm mt-1 text-center font-medium">{status.error}</p>}
        {status.success && <p className="text-green-600 text-sm mt-1 text-center font-medium">{status.success}</p>}
      </form>
    </div>
  );
}