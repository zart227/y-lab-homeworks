# React Authentication Form

This is a simple authentication form built with Next.js and TypeScript. The form is styled using SCSS and supports email/password authentication. The form includes basic validation and feedback messages for successful or failed login attempts.

## Features

- Email and password input fields
- Success and error messages displayed after form submission
- Form styled with SCSS and includes a reset stylesheet
- The login form is centered on the page with a visually distinct header
- Messages do not cause layout shifts when displayed, thanks to reserved space in the layout

## Usage

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.

## Testing

For testing purposes, the backend currently checks the following static credentials:

- **Email**: `test@example.com`
- **Password**: `password`

If the provided credentials match these values, the form will display a success message. Otherwise, an error message will be shown.

## Project Structure

```plaintext
.
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── components
│   │   └── AuthForm.tsx
│   └── styles
│       ├── AuthForm.module.scss
│       └── reset.scss
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Deployment

This project can be easily deployed to platforms like Vercel, which is optimized for Next.js applications.
