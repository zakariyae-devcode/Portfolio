'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className={`py-5 text-white ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
      <div className="container py-5">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning fs-7 mb-3">
            <span>۞</span>
            <span className="fw-medium">
              {lang === 'ar' ? 'من أنا' : 'About Me'}
            </span>
            <span>۞</span>
          </div>
          <h2 className="display-5 fw-bold mb-2">
            {lang === 'ar' ? 'نبذة تعريفية احترافية' : 'Professional Biography'}
          </h2>
          <p className="text-white-50 fs-6">
            {lang === 'ar' ? 'نظرة أقرب على مسيرتي المهنية وشغفي التقني' : 'A closer look at my professional path and technical passion'}
          </p>
        </div>

        {/* محتوى القسم بتصميم احترافي من عمودين */}
        <div className="row align-items-center g-5">
          
          {/* العمود الأول: البطاقة التفاعلية */}
          <div className="col-lg-5">
            <div 
              className="p-5 rounded-4 border border-warning border-opacity-25 position-relative shadow-lg text-center overflow-hidden"
              style={{
                backgroundColor: 'rgba(15, 44, 35, 0.75)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* زخارف أندلسية */}
              <div className="position-absolute top-0 start-0 p-3 text-warning opacity-25 fs-4">❖</div>
              <div className="position-absolute bottom-0 end-0 p-3 text-warning opacity-25 fs-4">❖</div>

              {/* أيقونة تعبيرية */}
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 border border-warning border-opacity-55 text-warning mb-4"
                style={{ width: '90px', height: '90px', fontSize: '2.5rem' }}
              >
                <span>💻</span>
              </div>

              <h3 className="fs-4 fw-bold text-warning mb-2">
                {lang === 'ar' ? 'زكرياء أبيه' : 'Zakariyae ABBIH'}
              </h3>
              <p className="text-white-50 fs-7 mb-4">
                {lang === 'ar' ? 'مطور ويب (Full-Stack Developer)' : 'Full-Stack Web Developer'}
              </p>

              <div className="d-flex justify-content-center gap-3">
                <div className="px-3 py-2 rounded-3 bg-dark bg-opacity-50 border border-warning border-opacity-15 text-center">
                  <div className="text-warning fw-bold fs-5">
                    {lang === 'ar' ? 'دعم كامل' : 'Full Support'}
                  </div>
                  <div className="text-white-50 fs-8">
                    {lang === 'ar' ? 'قواعد البيانات والأنظمة' : 'Databases & Systems'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الثاني: النصوص والنبذة الاحترافية */}
          <div className="col-lg-7">
            <div 
              className="p-4 p-md-5 rounded-4 border border-warning border-opacity-25 position-relative shadow-lg"
              style={{
                backgroundColor: 'rgba(15, 44, 35, 0.65)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <h3 className="fs-3 fw-bold text-warning mb-3">
                {lang === 'ar' 
                  ? 'نحو هندسة حلول برمجية ذكية ومستقرة' 
                  : 'Engineering Smart & Stable Software Solutions'}
              </h3>
              
              <p className="text-white-50 fs-6 lh-lg mb-4">
                {lang === 'ar' 
                  ? 'أعمل كموظف إداري وفي نفس الوقت مطور برمجيات شغوف، مما يمنحني القدرة الفريدة على فهم الاحتياجات التنظيمية وتحويلها إلى تطبيقات ويب قوية وعالية الأداء. أجمع بين الدقة الإدارية والخبرة التقنية في تطوير الواجهات الأمامية والخلفية باستخدام أحدث التقنيات مثل ' 
                  : 'Working in administration alongside my strong passion for software engineering gives me a unique capability to comprehend organizational requirements and convert them into powerful, high-performance web applications. I balance administrative precision with technical expertise in full-stack development using modern stacks such as '}
                <span className="text-warning fw-semibold">Laravel</span>, <span className="text-warning fw-semibold">Django</span>, {lang === 'ar' ? 'و ' : 'and '}<span className="text-warning fw-semibold">React.js</span>.
              </p>

              {/* مميزات سريعة منظمة */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-white-50">
                    <span className="text-warning">◆</span>
                    <span>{lang === 'ar' ? 'تصميم وهيكلة قواعد البيانات' : 'Database Design & Architecture'}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-white-50">
                    <span className="text-warning">◆</span>
                    <span>{lang === 'ar' ? 'تطوير الأنظمة الإدارية الرقمية' : 'Digital Management Systems'}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-white-50">
                    <span className="text-warning">◆</span>
                    <span>{lang === 'ar' ? 'إدارة السيرفرات والبيئات (Linux)' : 'Server & Linux Environment Admin'}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-white-50">
                    <span className="text-warning">◆</span>
                    <span>{lang === 'ar' ? 'كتابة كود نظيف وقابل للتوسع' : 'Clean & Scalable Codebase'}</span>
                  </div>
                </div>
              </div>

              {/* أزرار تفاعلية */}
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-warning fw-bold px-4 py-2 text-dark rounded-pill">
                  {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
                </a>
                <a href="#skills" className="btn btn-outline-warning fw-bold px-4 py-2 rounded-pill">
                  {lang === 'ar' ? 'استعرض مهاراتي' : 'Explore Skills'}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}