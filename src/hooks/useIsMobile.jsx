import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para detectar si el dispositivo es móvil
    const checkIfMobile = () => {
      const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      setIsMobile(mobile);
    };

    // Verificar el tamaño de la pantalla
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px es un breakpoint común para móviles
    };

    // Ejecutar ambas verificaciones al montar el componente
    checkIfMobile();
    checkScreenSize();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', checkScreenSize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

export default useIsMobile;