'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <header className="sticky-top shadow-sm">
      {/* الشريط العلوي - الخدمات والصفات */}
      <div 
        className="py-1 text-center text-dark fs-7 fw-bold border-bottom border-warning border-opacity-25"
        style={{ backgroundColor: '#FEF3C7' }}
      >
        <span className="me-2 text-warning">❖</span>
        <span>
          {lang === 'ar' 
            ? '۞ تطوير تطبيقات الويب • حلول برمجية متكاملة • تصميم عصري ۞' 
            : '۞ Web Development • Integrated Software Solutions • Modern Design ۞'}
        </span>
        <span className="ms-2 text-warning">❖</span>
      </div>

      {/* الـ Navbar الرئيسي */}
      <nav 
        className="navbar navbar-expand-lg navbar-dark border-bottom border-warning border-opacity-50 py-3"
        style={{ backgroundColor: '#0F2C23' }}
      >
        <div className="container">
          
          {/* الشعار */}
          <a className="navbar-brand d-flex align-items-center gap-2 text-white" href="#">
            <span className="text-warning fs-3">۞</span>
            <div className="d-flex flex-column">
              <span className="fw-bold fs-4 lh-1 text-white">
                {lang === 'ar' ? 'زكرياء أبيه' : 'Zakariyae ABBIH'}
              </span>
              <span className="text-white-50 fs-7 fw-medium mt-1">
                <span className="text-warning me-1">♦</span>
                {lang === 'ar' ? 'مطور برمجيات' : 'Full-Stack Developer'}
                <span className="text-warning ms-1">♦</span>
              </span>
            </div>
          </a>

          {/* زر الشاشات الصغيرة */}
          <button 
            className="navbar-toggler border-warning text-white shadow-none px-2 py-1" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="fs-5 text-warning">❖</span>
          </button>

          {/* الروابط وزر التبديل */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2 text-center my-3 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" href="#home">
                  <span className="text-warning me-1 fs-7">❖</span>  
                  {lang === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" href="#about">
                  <span className="text-warning me-1 fs-7">❖</span> 
                  {lang === 'ar' ? 'عني' : 'About'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" href="#skills">
                  <span className="text-warning me-1 fs-7">❖</span> 
                  {lang === 'ar' ? 'المهارات' : 'Skills'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" href="#projects">
                  <span className="text-warning me-1 fs-7">❖</span> 
                  {lang === 'ar' ? 'المشاريع' : 'Projects'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" href="#contact">
                  <span className="text-warning me-1 fs-7">❖</span> 
                  {lang === 'ar' ? 'التواصل' : 'Contact'}
                </Link>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center gap-2">
              {/* زر تبديل اللغة */}
                <button 
                  type="button"
                  onClick={() => {
                    console.log("Button clicked!");
                    toggleLanguage();
                  }}
                  className="btn btn-outline-warning btn-sm px-3 py-1 fw-bold me-2"
                >
                {lang === 'ar' ? 'EN' : 'AR'}
                </button>

              {/* زر التواصل */}
              <a href="#contact" className="btn btn-warning rounded-top rounded-4 px-4 py-2 fw-bold text-dark d-flex align-items-center gap-2 shadow-sm">
                <span>{lang === 'ar' ? 'تواصل معي' : 'Contact Me'}</span>
                <span className="fs-6">۞</span>
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}