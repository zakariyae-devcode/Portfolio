'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer 
      className="text-white border-top border-warning border-opacity-50 py-5"
      style={{ backgroundColor: '#0F2C23' }}
    >
      <div className="container text-center">
        
        {/* الشعار والاسم بتناسق مطابق للـ Navbar */}
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <span className="text-warning fs-3">۞</span>
          <span className="fw-bold fs-4 tracking-wide">
            {lang === 'ar' ? 'زكرياء أبيه' : 'Zakariyae ABBIH'}
          </span>
          <span className="text-warning fs-3">۞</span>
        </div>

        {/* وصف مختصر وواضح */}
        <p className="text-white-50 mx-auto fs-6 mb-4" style={{ maxWidth: '550px' }}>
          {lang === 'ar' 
            ? 'مطور برمجيات متفرغ لبناء تطبيقات ويب حديثة وعالية الأداء، بتصاميم مستوحاة من الأصالة الأندلسية المغربية.' 
            : 'Software developer dedicated to building modern, high-performance web applications with designs inspired by Moroccan Andalusian authenticity.'}
        </p>

        {/* روابط التنقل السريعة بتنسيق أفقي مريح */}
        <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 mb-4 fs-6">
          <a href="#" className="text-white-50 text-decoration-none fw-medium">
            <span className="text-warning me-1 fs-7">❖</span>
            {lang === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
          <a href="#projects" className="text-white-50 text-decoration-none fw-medium">
            <span className="text-warning me-1 fs-7">❖</span>
            {lang === 'ar' ? 'المشاريع' : 'Projects'}
          </a>
          <a href="#skills" className="text-white-50 text-decoration-none fw-medium">
            <span className="text-warning me-1 fs-7">❖</span>
            {lang === 'ar' ? 'المهارات' : 'Skills'}
          </a>
          <a href="#about" className="text-white-50 text-decoration-none fw-medium">
            <span className="text-warning me-1 fs-7">❖</span>
            {lang === 'ar' ? 'عني' : 'About'}
          </a>
          <a href="#contact" className="text-white-50 text-decoration-none fw-medium">
            <span className="text-warning me-1 fs-7">❖</span>
            {lang === 'ar' ? 'التواصل' : 'Contact'}
          </a>
        </div>

        {/* خط فاصل أنيق */}
        <div 
          className="border-top border-warning border-opacity-25 mx-auto my-4" 
          style={{ maxWidth: '400px' }}
        ></div>

        {/* الحقوق والعبارة الختامية */}
        <div className="text-white-50 fs-7 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
          <span>
            {lang === 'ar' 
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} — زكرياء أبيه` 
              : `All rights reserved © ${new Date().getFullYear()} — Zakariyae ABBIH`}
          </span>
          <span className="d-none d-sm-inline text-warning">♦</span>
          <span className="text-warning fw-medium">
            {lang === 'ar' ? 'تصميم أندلسي مغربي' : 'Moroccan Andalusian Design'}
          </span>
        </div>

      </div>
    </footer>
  );
}