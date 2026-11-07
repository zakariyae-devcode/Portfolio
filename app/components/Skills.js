'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { lang } = useLanguage();

  const skillGroups = [
    {
      key: 'strong',
      icon: '۞',
      title: lang === 'ar' ? 'إتقان قوي' : 'Strong',
      subtitle: lang === 'ar' ? 'أستخدمها يومياً في مشاريعي' : 'Used daily in my projects',
      tagClass: 'bg-warning text-dark border-warning fw-bold',
      skills: ['Python', 'Django', 'MySQL', 'PostgreSQL', 'Git & GitHub', 'Bootstrap'],
    },
    {
      key: 'working',
      icon: '❖',
      title: lang === 'ar' ? 'معرفة عملية' : 'Working knowledge',
      subtitle: lang === 'ar' ? 'استخدمتها في مشاريع حقيقية' : 'Applied in real projects',
      tagClass: 'bg-warning bg-opacity-10 text-warning border-warning border-opacity-50 fw-semibold',
      skills: ['React.js', 'Next.js', 'JavaScript', 'Laravel', 'Express.js', 'Linux', 'Tailwind CSS', 'PHP'],
    },
    {
      key: 'learning',
      icon: '♦',
      title: lang === 'ar' ? 'قيد التعلّم' : 'Learning',
      subtitle: lang === 'ar' ? 'أطوّر مهاراتي فيها حالياً' : 'Currently building up',
      tagClass: 'bg-transparent text-white-50 border-warning border-opacity-25 fw-medium',
      skills: ['FastAPI', 'C#'],
    },
  ];

  return (
    <section id="skills" className={`py-5 ${lang === 'ar' ? 'text-end' : 'text-start'}`}>
      <div className="container py-4">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning fs-7 mb-3">
            <span>۞</span>
            <span className="fw-medium">
              {lang === 'ar' ? 'الخبرات والتقنيات' : 'Tech Stack & Expertise'}
            </span>
            <span>۞</span>
          </div>
          <h2 className="display-5 fw-bold text-white mb-2">
            {lang === 'ar' ? 'المهارات والتقنيات' : 'Skills & Tech Stack'}
          </h2>
          <p className="text-white-50 fs-6">
            {lang === 'ar' ? 'الأدوات والأنظمة البرمجية مصنّفة حسب مستوى الخبرة العملية' : 'Software tools & systems grouped by hands-on experience'}
          </p>
        </div>

        {/* مجموعات المهارات */}
        <div className="row g-4">
          {skillGroups.map((group) => (
            <div key={group.key} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-warning border-opacity-25 text-white p-4 shadow-lg position-relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 44, 35, 0.65)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(12px)'
                }}
              >
                {/* زخرفة خفيفة */}
                <div 
                  className={`position-absolute top-0 ${lang === 'ar' ? 'end-0' : 'start-0'} p-3 text-warning opacity-25 fs-5`}
                  style={{ pointerEvents: 'none' }}
                >
                  ❖
                </div>

                <div className="card-body p-0">
                  <div className="mb-4 pb-2 border-bottom border-warning border-opacity-25">
                    <h3 className="fs-5 fw-bold text-warning mb-1 d-flex align-items-center gap-2">
                      <span aria-hidden="true">{group.icon}</span>
                      <span>{group.title}</span>
                    </h3>
                    <p className="text-white-50 fs-7 mb-0">{group.subtitle}</p>
                  </div>

                  {/* وسوم المهارات */}
                  <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className={`px-3 py-1 rounded-pill border ${group.tagClass}`}
                        style={{ fontSize: '0.9rem' }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}