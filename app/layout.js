import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { LanguageProvider } from './context/LanguageContext';
import { siteMeta, siteUrl } from './siteMeta';

const { en, ar } = siteMeta;

const ogImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Zakariyae ABBIH — Full-Stack Developer | Django, Laravel, Next.js',
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: en.title,
  description: en.description,
  applicationName: 'Zakariyae ABBIH Portfolio',
  authors: [{ name: 'Zakariyae ABBIH', url: siteUrl }],
  keywords: [
    'Zakariyae ABBIH',
    'زكرياء أبيه',
    'Full-Stack Developer',
    'Junior Developer',
    'Internship',
    'Django',
    'Laravel',
    'Next.js',
    'Morocco',
    'Remote',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Zakariyae ABBIH',
    title: en.title,
    description: en.description,
    locale: 'en_US',
    alternateLocale: ['ar_MA'],
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.title,
    description: en.description,
    images: [ogImage],
  },
  other: {
    // Arabic title/description (the page also swaps document.title when Arabic is active)
    'title:ar': ar.title,
    'description:ar': ar.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" style={{ scrollBehavior: 'smooth' }}>
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