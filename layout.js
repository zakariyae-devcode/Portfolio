import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { LanguageProvider } from './context/LanguageContext';

export const metadata = {
  title: 'زكرياء أبيه | معرض الأعمال والحلول البرمجية',
  description: 'موقع شخصي ومحفظة أعمال لتطوير البرمجيات والويب بروح أندلسية مغربية عصريّة',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" style={{ scrollBehavior: 'smooth' }}>
      <body
        className="d-flex flex-column min-vh-100 text-white"
        style={{
          backgroundColor: '#0F2C23',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        <LanguageProvider>
          {/* شريط التنقل العلوي */}
          <Navbar />

          {/* محتوى الصفحة الرئيسي */}
          <main className="flex-grow-1">
            {children}
          </main>

          {/* التذييل السفلي */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}