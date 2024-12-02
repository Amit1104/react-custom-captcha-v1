import React, { useEffect, useRef, useState } from "react";
import { getRandomColor } from "./utils/Helper";

const CustomCaptcha = ({
    captcha,
    onReload,
    backgroundColor = "#f2f2f2",
    font = "bold 30px Arial",
    noiseLines = 6,
    buttonColor = "#111", // Default button text color
    buttonTxtColor = "#fff", // Default button color
    buttonWidth = "42px", // Default button width
    buttonContent = <>&#x21bb;</>, // Default button content (can be a character or icon)
    inputHeight = "50px", // Default input height
}) => {
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Add a slight delay to simulate loading (optional)
        // setTimeout(() => {
        // Set canvas dimensions
        canvas.width = 200; // Fixed width for better control
        canvas.height = 50;

        // Draw background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw each character of the CAPTCHA text with a different color
        ctx.font = font;
        for (let i = 0; i < captcha.length; i++) {
            ctx.fillStyle = getRandomColor();
            ctx.fillText(captcha[i], 10 + i * 30, 35); // Adjusted spacing for better readability
        }

        // Add some noise
        ctx.strokeStyle = "#000";
        for (let i = 0; i < noiseLines; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }

        setIsLoading(false); // Set loading to false after rendering
        // }, 500); // Simulate loading delay (optional)
    }, [captcha, backgroundColor, font, noiseLines]);

    return (
        <div style={{ display: "flex", position: "relative" }} className="canvasBox">
            {/* Loader */}
            {isLoading && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        zIndex: 10,
                        borderRadius: "4px",
                    }}
                >
                    <div className="loader" style={{ fontSize: "16px", color: "#555" }}>
                        Loading...
                    </div>
                </div>
            )}

            {/* CAPTCHA Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    pointerEvents: "none",
                    height: inputHeight,
                    borderRadius: "4px 0 0 4px",
                    border: "1px solid var(--border-color, #ccc)",
                    width: "calc(100% - 38px)",
                }}
            />
            <button
                type="button"
                onClick={onReload}
                className="btn btn-sm"
                style={{
                    backgroundColor: buttonColor,
                    width: buttonWidth,
                    height: inputHeight,
                    color: buttonTxtColor,
                    marginTop: "0",
                    float: "right",
                    zIndex: "9",
                    borderRadius: "0 4px 4px 0",
                    position: "relative",
                    fontSize: "22px",
                }}
                aria-label="Reload Captcha"
            >
                {buttonContent}
            </button>
        </div>
    );
};

export default CustomCaptcha;
