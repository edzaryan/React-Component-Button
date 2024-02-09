import { useEffect, useState } from "react";
import styles from "./Button.module.css";

const paddings = {
    xs: 5,
    sm: 7,
    md: 9,
    lg: 11,
    xl: 13
}

const radiuses = {
    xs: 5,
    sm: 7,
    md: 9,
    lg: 11,
    xl: 13
}

const colors = {
    blue: "#228BE6",
    gray: "#868E96",
    red: "#FA5252",
    green: "#40C057",
    orange: "#FD7E14"
}

const Button = ({ 
    onClick,  
    children, 
    isDisable = false,
    radius = "md", 
    size = "md", 
    color = "gray", 
    variant = "filled"
}) => {

    const [style, setStyle] = useState({
        backgroundColor: null,
        color: null,
        border: "none",
        borderRadius: "none",
        padding: null,
        fontWeight: null
    });

    useEffect(() => {
        const variantStyle = {
            "filled": {
                backgroundColor: colors[color],
                color: "#ffffff",
                border: "none"
            },
            "light": {
                backgroundColor: `rgba(102, 102, 102, 0.1)`,
                color: colors[color],
                border: "none"
            },
            "outline": {
                backgroundColor: "#ffffff",
                color: colors[color],
                border: `1px solid ${colors[color]}`
            },
            "subtle": {
                backgroundColor: colors[color],
                color: colors[color],
                border: "none"
            },
            "transparent": {
                opacity: 0,
                color: colors[color],
                border: "none"
            },
            "white": {
                backgroundColor: "#ffffff",
                color: colors[color],
                border: "none"
            }
        };
        
        setStyle(prevStyle => ({
            padding: paddings[size],
            borderRadius: radiuses[radius],
            fontWeight: 700,
            ...variantStyle[variant]
        }));    
    }, [radius, size, color, variant, isDisable]);

    return (
        <button
            className={styles.button}
            onClick={onClick}
            style={style}
            disabled={isDisable}>
                { children }
        </button>
    )
}

export default Button;
