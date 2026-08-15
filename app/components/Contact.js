'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className={`py-5 text-white ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
      <div className="container py-5">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning fs-7 mb-3">
            <span>۞</span>
            <span className="fw-medium">
              {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </span>
            <span>۞</span>
          </div>
          <h2 className="display-5 fw-bold mb-2">
            {lang === 'ar' ? 'ابق على تواصل' : 'Get In Touch'}
          </h2>
          <p className="text-white-50 fs-6">
            {lang === 'ar' 
              ? 'يسعدني تواصلك معي لأي استفسار أو تعاون مهني' 
              : 'Feel free to reach out for inquiries or professional opportunities'}
          </p>
        </div>

        {/* بطاقة التواصل الموحدة */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="p-4 p-md-5 rounded-4 border border-warning border-opacity-25 position-relative shadow-lg"
              style={{
                backgroundColor: 'rgba(15, 44, 35, 0.65)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className={`position-absolute top-0 ${lang === 'ar' ? 'start-0' : 'end-0'} p-2 text-warning opacity-15 fs-5`}>
                ❖
              </div>
              
              <div className="text-center mb-4">
                <p className="text-white-50">
                  {lang === 'ar' 
                    ? 'يمكنك مراسلتي عبر البريد الإلكتروني أو زيارة حساباتي المهنية:' 
                    : 'You can email me directly or explore my professional profiles:'}
                </p>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a 
                  href="https://github.com/zakariyae-devcode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/zakariyae-abbih/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="mailto:zakariyae.abbih.dev@gmail.com" 
                  className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                >
                  <span>📧</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}