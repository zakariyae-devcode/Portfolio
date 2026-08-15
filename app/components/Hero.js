'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className={`py-5 overflow-hidden ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
      <div className="container py-4">
        <div className="row align-items-center justify-content-between g-5">
          
          {/* العمود الأول: المحتوى والترتيب اللغوي */}
          <div className={`col-lg-7 ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
            
            {/* وسم ترحيبي */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning fs-7 mb-4">
              <span>۞</span>
              <span className="fw-medium">
                {lang === 'ar' ? 'مرحباً بك في المحفظة البرمجية' : 'Welcome to My Portfolio'}
              </span>
              <span>۞</span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="display-4 fw-bold text-white mb-3 lh-sm">
              {lang === 'ar' ? (
                <>أنا <span className="text-warning">زكرياء أبيه</span></>
              ) : (
                <>I am <span className="text-warning">Zakariyae ABBIH</span></>
              )}
            </h1>

            {/* المسمى الوظيفي */}
            <h2 className="fs-4 text-white-50 fw-medium mb-4">
              {lang === 'ar' ? 'مطور برمجيات شامل ومصمم أنظمة ويب' : 'Full-Stack Developer & Web Systems Architect'}
            </h2>

            {/* الوصف الشخصي */}
            <p 
              className={`text-white-50 fs-6 lh-lg mb-4 ${lang === 'ar' ? 'me-0 ms-auto' : 'ms-0 me-auto'}`} 
              style={{ maxWidth: '600px' }}
            >
              {lang === 'ar' 
                ? 'أقوم ببناء وتطوير التطبيقات والأنظمة البرمجية الحديثة عالية الأداء، مع الحرص على الجمع بين متانة الكود الخلفي وجمالية الواجهات البرمجية بروح هندسية أصيلة.'
                : 'I build and develop high-performance modern web applications and systems, combining robust backend code with beautiful user interfaces driven by solid engineering principles.'}
            </p>

            {/* أزرار التفاعل */}
            <div className="d-flex flex-wrap gap-3 justify-content-start pt-2">
              <a 
                href="#projects" 
                className="btn btn-warning rounded-top rounded-4 px-4 py-2.5 fw-bold text-dark d-flex align-items-center gap-2 shadow-sm"
              >
                <span>{lang === 'ar' ? 'معرض المشاريع' : 'Projects Portfolio'}</span>
                <span className="fs-6">۞</span>
              </a>

              <a 
                href="#contact" 
                className="btn btn-outline-warning fw-bold px-4 py-2 rounded-pill"
              >
                <span>{lang === 'ar' ? 'تواصل معي' : 'Contact Me'}</span>
                <span className="fs-7">❖</span>
              </a>

              <a 
                href="/developpeur-fullstack.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow"
              >
                <span>{lang === 'ar' ? 'عرض السيرة الذاتية (CV) 📄' : 'View Resume (CV) 📄'}</span>
                <span className="fs-7">❖</span>
              </a>
            </div>

          </div>

          {/* العمود الثاني: إطار الصورة */}
          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block">
              
              {/* إضاءة خلفية دافئة */}
              <div 
                className="position-absolute top-50 start-50 translate-middle bg-warning opacity-10 rounded-circle"
                style={{ width: '200px', height: '200px', filter: 'blur(50px)', zIndex: 0 }}
              ></div>

              {/* القوس الحاضن للصورة */}
              <div 
                className="position-relative border border-warning border-opacity-50 p-2 shadow-lg"
                style={{
                  borderRadius: '140px 140px 20px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  zIndex: 1
                }}
              >
                <img 
                  src="zakariyaeAbbih.png" 
                  alt={lang === 'ar' ? 'زكرياء أبيه' : 'Zakariyae ABBIH'} 
                  className="img-fluid object-fit-cover shadow-sm bg-secondary"
                  style={{
                    width: '280px',
                    height: '340px',
                    borderRadius: '130px 130px 15px 15px'
                  }}
                />
              </div>

              {/* الشارة السفلية */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 badge bg-dark border border-warning text-warning px-3 py-1 fs-7">
                ۞ {lang === 'ar' ? 'زكرياء أبيه' : 'Zakariyae ABBIH'} ۞
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}