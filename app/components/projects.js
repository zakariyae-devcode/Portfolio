'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { lang } = useLanguage();

  const projectsList = [
    {
      title: lang === 'ar' ? 'منصة مناسباتي (Mounasabati)' : 'Mounasabati Platform',
      description: lang === 'ar' 
        ? 'منصة رقمية مغربية لربط مزودي خدمات الحفلات بالزبائن لتنظيم المناسبات بكفاءة.' 
        : 'Moroccan digital platform connecting event service providers with clients to organize events efficiently.',
      techStack: ["Next.js", "Python", "React"],
      githubUrl: "https://github.com/zakariyae-devcode/Mounasabati",
      status: 'completed',
      demo: '',
      image: ''
    },
    {
      title: lang === 'ar' ? 'متجر إلكتروني (E-commerce)' : 'E-commerce Store',
      description: lang === 'ar' 
        ? 'مشروع متكامل لتجارة إلكترونية، يوفر تجربة تسوق سلسة وبنية قوية.' 
        : 'Comprehensive e-commerce project providing a seamless shopping experience and robust structure.',
      techStack: ["Full-Stack", "Web Development", "Django", "Python"],
      githubUrl: "https://github.com/zakariyae-devcode/E-commerce",
      status: 'completed',
      demo: '',
      image: ''
    },
    {
      title: lang === 'ar' ? 'نظام إدارة الشهادات (C# / Windows Forms)' : 'Certificate Management System (C# / Windows Forms)',
      description: lang === 'ar' 
        ? 'نظام رقمي متكامل لإدارة وإصدار الوثائق والشهادات الإدارية بدقة وسرعة.' 
        : 'Integrated digital system for managing and issuing administrative documents and certificates with precision.',
      techStack: ["Database", "C#", "SQL Server", "Windows Forms"],
      githubUrl: "https://github.com/zakariyae-devcode/ManagementSystemCertificate",
      status: 'completed',
      demo: '',
      image: ''
    },
    {
      title: lang === 'ar' ? 'منصة الشهادة الذكية SmartShahada (Laravel)، قيد التطوير' : 'SmartShahada (Laravel), in progress',
      description: lang === 'ar' 
        ? 'نظام رقمي قيد التطوير لإدارة الوثائق والشهادات الإدارية واستخراجها بدقة وسرعة لتبسيط الإجراءات.' 
        : 'Digital system under development for managing and generating administrative documents to simplify workflows.',
      techStack: ["Database", "Backend", "Frontend", "Laravel", "PHP"],
      githubUrl: "https://github.com/zakariyae-devcode/SmartShahada",
      status: 'in-progress',
      demo: '',
      image: ''
    },
    {
      title: lang === 'ar' ? 'متجر الكتب (BookStore)' : 'BookStore Platform',
      description: lang === 'ar' 
        ? 'منصة رقمية قيد التطوير مخصصة لاستئجار الكتب وإدارتها.' 
        : 'Digital platform under development dedicated to book rentals and management.',
      techStack: ["Full-Stack", "Web Development", "Express.js", "JavaScript"],
      githubUrl: "https://github.com/zakariyae-devcode/bookStore",
      status: 'in-progress',
      demo: '',
      image: ''
    },
    {
      title: lang === 'ar' ? 'واجهة برمجة تطبيقات السفر (TravelApi)' : 'Travel Booking API',
      description: lang === 'ar' 
        ? 'نظام خلفي قيد التطوير مخصص لإدارة وتنظيم خدمات وحجوزات السفر بمرونة وكفاءة.' 
        : 'Backend API under development designed for managing travel services and reservations with flexibility.',
      techStack: ["Backend", "API", "Python", "Django REST Framework"],
      githubUrl: "https://github.com/zakariyae-devcode/TravelApi",
      status: 'in-progress',
      demo: '',
      image: ''
    }
  ];

  // تسميات وألوان حالة المشروع
  const statusStyles = {
    completed: {
      label: lang === 'ar' ? 'مكتمل' : 'Completed',
      icon: '✓',
      className: 'bg-success text-white border-success',
    },
    'in-progress': {
      label: lang === 'ar' ? 'قيد التطوير' : 'In progress',
      icon: '⏳',
      className: 'bg-warning text-dark border-warning',
    },
  };

  return (
    <section id="projects" className={`py-5 text-white ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
      <div className="container py-5">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning fs-7 mb-3">
            <span>۞</span>
            <span className="fw-medium">
              {lang === 'ar' ? 'أعمالي ومشاريعي' : 'Projects & Portfolio'}
            </span>
            <span>۞</span>
          </div>
          <h2 className="display-5 fw-bold mb-2">
            {lang === 'ar' ? 'المشاريع البرمجية' : 'Featured Projects'}
          </h2>
          <p className="text-white-50 fs-6">
            {lang === 'ar' ? 'نظرة على أبرز التطبيقات والأنظمة التي قمت بتطويرها' : 'A showcase of key applications and systems I have developed'}
          </p>
        </div>

        {/* شبكة عرض المشاريع */}
        <div className="row g-4">
          {projectsList.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.githubUrl}>
              <div 
                className="h-100 p-4 rounded-4 border border-warning border-opacity-25 position-relative shadow-lg d-flex flex-column justify-content-between overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 44, 35, 0.65)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                {/* زخرفة أندلسية خفيفة */}
                <div className={`position-absolute top-0 ${lang === 'ar' ? 'start-0' : 'end-0'} p-2 text-warning opacity-15 fs-5`}>
                  ❖
                </div>

                <div>
                  {/* لقطة شاشة المشروع (تظهر فقط عند توفرها) */}
                  {project.image && (
                    <div className="mb-3 rounded-3 overflow-hidden border border-warning border-opacity-25">
                      <img
                        src={project.image}
                        alt={lang === 'ar' ? `لقطة شاشة لمشروع ${project.title}` : `${project.title} screenshot`}
                        className="w-100 object-fit-cover"
                        style={{ aspectRatio: '16 / 9' }}
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* حالة المشروع */}
                  {statusStyles[project.status] && (
                    <span
                      className={`d-inline-flex align-items-center gap-1 badge rounded-pill border fw-bold px-3 py-2 mb-3 ${statusStyles[project.status].className}`}
                      style={{ fontSize: '0.8rem' }}
                    >
                      <span aria-hidden="true">{statusStyles[project.status].icon}</span>
                      <span>{statusStyles[project.status].label}</span>
                    </span>
                  )}

                  {/* عنوان المشروع */}
                  <h3 className="fs-5 fw-bold text-warning mb-3">{project.title}</h3>

                  {/* وصف المشروع */}
                  <p className="text-white-50 fs-7 lh-lg mb-4">
                    {project.description}
                  </p>

                  {/* التقنيات المستخدمة */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-dark bg-opacity-50 border border-warning border-opacity-15 text-warning fs-8">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* أزرار العرض المباشر وGitHub */}
                <div className="d-flex flex-column gap-2">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-warning text-dark w-100 fw-bold py-2 rounded-pill d-flex align-items-center justify-content-center gap-2 fs-7"
                    >
                      <span>{lang === 'ar' ? 'عرض مباشر' : 'Live demo'}</span>
                      <span>↗</span>
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning w-100 fw-bold py-2 rounded-pill d-flex align-items-center justify-content-center gap-2 fs-7"
                  >
                    <span>{lang === 'ar' ? 'استعرض الكود على GitHub' : 'View Code on GitHub'}</span>
                    <span>↗</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}