import { useEffect, useState } from "react";

export default function LunarOrbit() {
    const [angle, setAngle] = useState(0);
    const [zIndex, setZIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => (prev + 1) % 360);
        }, 16); // Aproximadamente 60 FPS

        return () => clearInterval(interval);
    }, []);

    const radiusX = 75;
    const radiusY = 150;
    const tiltAngle = -45; // Ángulo de inclinación en grados

    // Cálculo de la posición orbital con inclinación
    const rawX = radiusX * Math.cos((angle * Math.PI) / 180);
    const rawY = radiusY * Math.sin((angle * Math.PI) / 180);

    // Aplicación de la rotación usando matriz de transformación
    const tiltRad = (tiltAngle * Math.PI) / 180;
    const x = rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad);
    const y = rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad);

    const earthHeight = 176; // Alto total de la Tierra
    const earthY = 0; // Posición en Y de la Tierra

    useEffect(() => {
        if (y > earthY + earthHeight / 2) {
            setZIndex(0); // Cuando la luna está completamente abajo, detrás
        } else if (y < earthY - earthHeight / 2) {
            setZIndex(2); // Cuando la luna está completamente arriba, delante
        }
    }, [y]);

    return (
        <div className="relative flex justify-center items-center w-full min-h-[200px]">
            {/* Tierra */}
            <img src="/media/mobile/earth.png" alt="Tierra" className="absolute" style={{ zIndex: 1 }} />

            {/* Luna */}
            <img
                src="/media/mobile/moon.png"
                alt="Luna"
                className="absolute bg-gray-300 rounded-full"
                style={{ 
                    transform: `translate(${x}px, ${y}px)`,
                    zIndex }}
            />
        </div>
    );
}
