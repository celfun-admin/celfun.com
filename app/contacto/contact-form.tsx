'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { sendContactEmail } from './actions';

interface ContactFormData {
  subject: string;
  message: string;
}

interface FormErrors {
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, setIsPending] = useState(false); // Shows immediately when submit is clicked
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const submitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-clear success messages after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Cleanup debounce timeout on unmount
  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  function clearStatus() {
    if (submitStatus !== 'idle' || isPending) {
      setSubmitStatus('idle');
      setStatusMessage('');
      setErrors({});
      setIsPending(false);
      // Clear any pending debounced submission
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    }
  }

  function validateForm(formData: FormData): FormErrors {
    const errors: FormErrors = {};
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!subject || subject.trim() === '') {
      errors.subject = 'Por favor selecciona una categoría';
    }

    if (!message || message.trim() === '') {
      errors.message = 'Por favor ingresa tu comentario';
    } else if (message.trim().length < 10) {
      errors.message = 'El comentario debe tener al menos 10 caracteres';
    }

    return errors;
  }

  const submitForm = useCallback(async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');
    setErrors({});

    // Client-side validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('error');
      setStatusMessage('Por favor corrige los errores en el formulario');
      setIsSubmitting(false);
      setIsPending(false);
      return;
    }

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message || '¡Comentario enviado exitosamente! Gracias por tu feedback.');
        setErrors({});
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Hubo un error al enviar tu comentario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage('Error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
      setIsPending(false);
    }
  }, []);

  const debouncedSubmit = useCallback((formData: FormData) => {
    // Clear any existing timeout
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }

    // If already submitting, ignore the new submission
    if (isSubmitting || isPending) {
      return;
    }

    // Show pending state immediately
    setIsPending(true);
    setSubmitStatus('idle');
    setStatusMessage('');
    setErrors({});

    // Set a new timeout for debounced submission
    submitTimeoutRef.current = setTimeout(() => {
      submitForm(formData);
    }, 500); // 500ms debounce delay
  }, [submitForm, isSubmitting, isPending]);

  async function handleSubmit(formData: FormData) {
    debouncedSubmit(formData);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Comentarios y Quejas
        </h2>
        <p className="text-gray-600">
          Comparte tus comentarios o quejas de forma anónima. Tu feedback es importante para nosotros.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-green-800 font-medium">
                {statusMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-red-800 font-medium">
                {statusMessage}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Comentario
          </label>
          <select
            id="subject"
            name="subject"
            required
            disabled={isSubmitting || isPending}
            onChange={clearStatus}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              errors.subject 
                ? 'border-red-300 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            <option value="">Selecciona una categoría</option>
            <option value="queja-producto">Queja sobre Producto</option>
            <option value="queja-servicio">Queja sobre Servicio</option>
            <option value="comentario-positivo">Comentario Positivo</option>
            <option value="sugerencia">Sugerencia de Mejora</option>
            <option value="comentario-general">Comentario General</option>
            <option value="otro">Otro</option>
          </select>
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.subject}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Tu Comentario o Queja
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            disabled={isSubmitting || isPending}
            onChange={clearStatus}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
              errors.message 
                ? 'border-red-300 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="Comparte tu comentario, queja o sugerencia de manera detallada. Tu feedback es anónimo y nos ayuda a mejorar."
          ></textarea>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Tu envío es completamente anónimo.</strong> No guardamos ninguna información personal que pueda identificarte.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isPending}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center"
        >
          {(isSubmitting || isPending) ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isPending && !isSubmitting ? 'Preparando envío...' : 'Enviando comentario...'}
            </>
          ) : (
            'Enviar Comentario'
          )}
        </button>
      </form>
    </div>
  );
}