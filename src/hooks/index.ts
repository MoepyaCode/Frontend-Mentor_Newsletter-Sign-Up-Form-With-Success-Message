import { useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const size: DeviceType = width < 768 ? 'mobile' : 'desktop';

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export function useEmailVerification() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

  const verifyEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmail(email);
    setIsEmailValid(emailRegex.test(email));
  }

  const resetEmail = () => {
    setEmail('');
    setIsEmailValid(null);
  }

  return { email, verifyEmail, resetEmail, isEmailValid };
}