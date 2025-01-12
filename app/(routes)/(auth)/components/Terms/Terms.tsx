"use client";
import { useState } from "react";


export function Terms() {
    const [showExtraTerms, setShowExtraTerms] = useState(false);

    return (
        <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
            <div className="mb-5">
                <span>
                    Esta página utiliza Google reCAPTCHA para verificar que eres un humano.
                </span>
            </div>
            {showExtraTerms && (
                <div className="mt-2">
                    <span>
                    La información recopilada por Google reCAPTCHA está sujeta a la Política de privacidad y a las Condiciones del servicio de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como para fines generales de seguridad (Google no la utiliza para personalizar publicidad).
                    </span>
                </div>
            )}
            <button
                className="mt-2 text-blue-500"
                onClick={() => setShowExtraTerms(!showExtraTerms)}
            >
                {showExtraTerms ? "Menos info.":"Más info."}
            </button>
        </div>
    );
}
