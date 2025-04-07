
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors
				navy: {
					50: '#f0f3fa',
					100: '#dbe1f3',
					200: '#b9c7e9',
					300: '#8da3dc',
					400: '#6580cb',
					500: '#4661b8',
					600: '#364c98',
					700: '#2d3c79',
					800: '#0F172A', // Main navy
					900: '#0a0e1a',
				},
				teal: {
					50: '#effaf7',
					100: '#c7f6eb',
					200: '#94edd9',
					300: '#5eddc5',
					400: '#33c6ae',
					500: '#0D9488', // Main teal
					600: '#07776c',
					700: '#065e55',
					800: '#064541',
					900: '#022e2b',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeOut: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px rgba(13, 148, 136, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(13, 148, 136, 0.8)' }
				},
				rotate3d: {
					'0%': { transform: 'perspective(1000px) rotateX(0) rotateY(0)' },
					'50%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' },
					'100%': { transform: 'perspective(1000px) rotateX(0) rotateY(0)' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fadeIn": "fadeIn 0.6s ease-out forwards",
				"fadeOut": "fadeOut 0.6s ease-out forwards",
				"slideInRight": "slideInRight 0.5s ease-out",
				"float": "float 6s ease-in-out infinite",
				"glow": "glow 3s ease-in-out infinite",
				"rotate3d": "rotate3d 10s ease-in-out infinite"
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			backgroundSize: {
				'grid': '20px 20px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
