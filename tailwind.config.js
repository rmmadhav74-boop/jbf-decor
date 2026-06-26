/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d2b3f",
        "primary-light": "#4a354d",
        "primary-dark": "#2c1e2e",
        accent: "#EB595F",
        "accent-light": "#F07B80",
        "accent-dark": "#D1454B",
        "warm-white": "#FFFFFF",
        "dark-text": "#2C2C2C",
        "light-gray": "#F8F9FA",
        "muted-text": "#6B7280",
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'accent': '0 4px 14px rgba(235, 89, 95, 0.3)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(61,43,63,0.85) 0%, rgba(0,0,0,0.4) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EB595F 0%, #F07B80 100%)',
        'gradient-primary': 'linear-gradient(135deg, #3d2b3f 0%, #4a354d 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
