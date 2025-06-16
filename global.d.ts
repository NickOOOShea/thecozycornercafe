// Global type declarations for the HollerBuilt Restaurant Template

// Netlify Forms attributes
declare namespace JSX {
  interface IntrinsicElements {
    form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
      'netlify-honeypot'?: string
      'data-netlify'?: string | boolean
    }
  }
}
