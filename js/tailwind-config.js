/**
 * Tailwind CSS Configuration for HOROS ELITE
 * Estende o tema padrão do Tailwind de acordo com o DESIGN.md
 */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "background": "#0b1326",
                "inverse-on-surface": "#283044",
                "on-secondary-fixed": "#002109",
                "tertiary-container": "#dcdee0",
                "surface-dim": "#0b1326",
                "error": "#ffb4ab",
                "surface-variant": "#2d3449",
                "inverse-primary": "#00696e",
                "outline": "#849495",
                "on-primary-fixed": "#002021",
                "on-background": "#dae2fd",
                "on-tertiary-fixed": "#191c1e",
                "on-secondary": "#003915",
                "on-error": "#690005",
                "primary-container": "#00f5ff",
                "on-primary": "#003739",
                "tertiary": "#f8fafc",
                "secondary-fixed": "#6bff8f",
                "on-tertiary-fixed-variant": "#444749",
                "primary-fixed-dim": "#00dce5",
                "secondary-fixed-dim": "#4ae176",
                "on-secondary-container": "#004119",
                "surface-tint": "#00dce5",
                "on-surface": "#dae2fd",
                "surface-container-low": "#131b2e",
                "surface-container-high": "#222a3d",
                "surface-container": "#171f33",
                "surface-container-lowest": "#060e20",
                "inverse-surface": "#dae2fd",
                "surface-bright": "#31394d",
                "on-primary-fixed-variant": "#004f53",
                "secondary": "#4ae176",
                "secondary-container": "#00b954",
                "on-tertiary-container": "#5f6264",
                "on-primary-container": "#006c71",
                "on-surface-variant": "#b9caca",
                "primary": "#e9feff",
                "surface": "#0b1326",
                "surface-container-highest": "#2d3449",
                "on-error-container": "#ffdad6",
                "error-container": "#93000a",
                "primary-fixed": "#63f7ff",
                "tertiary-fixed": "#e0e3e5",
                "outline-variant": "#3a494a",
                "tertiary-fixed-dim": "#c4c7c9",
                "on-tertiary": "#2d3133",
                "on-secondary-fixed-variant": "#005321"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            spacing: {
                "stack-lg": "32px",
                "stack-sm": "8px",
                "stack-xl": "64px",
                "margin-mobile": "20px",
                "container-max": "1280px",
                "gutter": "24px",
                "margin-desktop": "64px",
                "stack-md": "16px"
            },
            fontFamily: {
                "body-lg": ["Inter", "sans-serif"],
                "display-lg": ["Montserrat", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "headline-md": ["Montserrat", "sans-serif"],
                "headline-lg": ["Montserrat", "sans-serif"],
                "headline-lg-mobile": ["Montserrat", "sans-serif"],
                "label-sm": ["Inter", "sans-serif"]
            },
            fontSize: {
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}]
            }
        }
    }
};
