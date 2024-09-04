import '@/styles/globals.scss'; // Глобальные стили
import '@/styles/reset.scss';   // Сброс стилей

export const metadata = {
  title: 'React Authentication',
  description: 'A Next.js project with TypeScript and SCSS',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;