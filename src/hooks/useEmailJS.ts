
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailData {
  nom: string;
  email: string;
  telephone: string;
  commune: string;
  message: string;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (formData: EmailData) => {
    setIsLoading(true);
    
    try {
      // Ces valeurs devront être remplacées par vos vraies clés EmailJS
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        phone: formData.telephone,
        commune: formData.commune,
        message: formData.message,
        to_name: 'PiscinePourTous',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      setIsLoading(false);
      return { success: false, error };
    }
  };

  return { sendEmail, isLoading };
};
