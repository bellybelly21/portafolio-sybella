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

      setStatus({ loading: false, error: "", success: "Mensaje enviado correctamente" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus({ loading: false, error: err.message || "El mensaje no se pudo enviar", success: "" });
    }
  };

  // Determinamos el color de fondo y estado visual del botón
  const getButtonStateStyle = () => {
    if (status.success) return "bg-emerald-600 hover:bg-emerald-700 text-white";
    if (status.error) return "bg-red-600 hover:bg-red-700 text-white";
    return "bg-black text-white hover:bg-neutral-800";
  };

  return (
    <div className="bg-white/90 backdrop-blur-md border border-neutral-200/80 p-8 md:p-10 rounded-2xl w-full">
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
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all text-neutral-900 placeholder:text-gray"
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
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all text-neutral-900 placeholder:text-gray"
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
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-black focus:bg-white transition-all resize-none text-neutral-900 placeholder:text-gray"
          />
        </div>
  
        <button
          type="submit"
          disabled={status.loading}
          className={`w-full font-medium py-3.5 px-6 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-80 flex items-center justify-center gap-3 ${getButtonStateStyle()}`}
        >
          {status.loading ? (
            <>
              {/* Spinner de carga animado */}
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Enviando mensaje...</span>
            </>
          ) : status.success ? (
            <>
              <span>Mensaje enviado correctamente</span>

              <svg className="w-5 h-5 transition-transform duration-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
              </svg>
            </>
          ) : status.error ? (
            <>
              <span>El mensaje no se pudo enviar</span>
              {/* Ícono de alerta/cruz conveniente */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </>
          ) : (
            <span>Enviar Mensaje</span>
          )}
        </button>

        {/* Texto legal requerido por Google cuando se oculta la insignia flotante */}
        <p className="text-[11px] text-gray text-center leading-tight">
          Este sitio está protegido por reCAPTCHA y se aplican la{" "}
          <a href="https://policies.google.com/privacy" aria-label="Ir a las políticas de privacidad de Google" target="_blank" rel="noreferrer" className="underline hover:text-neutral-600">
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a href="https://policies.google.com/terms" aria-label="Ir a los términos de servicio de Google" target="_blank" rel="noreferrer" className="underline hover:text-neutral-600">
            Términos de Servicio
          </a>{" "}
          de Google.
        </p>
      </form>
    </div>
  );
}