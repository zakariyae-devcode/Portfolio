'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { lang } = useLanguage();

  const skillCategories = [
    {
      title: lang === 'ar' ? 'تطوير الواجهات الخلفية (Backend)' : 'Backend Development',
      skills: [
        { name: 'Laravel', level: 50 },
        { name: 'Django', level: 75 },
        { name: 'FastAPI', level: 45 },
        { name: 'Express.js', level: 50 },
      ]
    },
    {
      title: lang === 'ar' ? 'تطوير الواجهات الأمامية (Frontend)' : 'Frontend Development',
      skills: [
        { name: 'React.js', level: 70 },
        { name: 'Next.js', level: 70 },
        { name: 'Tailwind CSS', level: 50 },
        { name: 'Bootstrap', level: 75 }
      ]
    },
    {
      title: lang === 'ar' ? 'لغات البرمجة' : 'Programming Languages',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'PHP', level: 50 },
        { name: 'C#', level: 40 }
      ]
    },
    {
      title: lang === 'ar' ? 'قواعد البيانات والأدوات النظامية' : 'Databases & System Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Git & GitHub', level: 75 },
        { name: 'Linux', level: 60 }
      ]
    }
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
            {lang === 'ar' ? 'المهارات والنسب التقنية' : 'Skills & Proficiency'}
          </h2>
          <p className="text-white-50 fs-6">
            {lang === 'ar' ? 'مستوى التمكن والخبرة العملية في الأدوات والأنظمة البرمجية' : 'Level of mastery and practical experience in software tools & systems'}
          </p>
        </div>

        {/* شبكة التصنيفات مع أشرطة النسب */}
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
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
                  <h3 className="fs-5 fw-bold text-warning mb-4 pb-2 border-bottom border-warning border-opacity-25">
                    {category.title}
                  </h3>
                  
                  {/* قائمة المهارات مع أشرطة النسبة */}
                  <div className="d-flex flex-column gap-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="d-flex justify-content-between text-white fs-6 mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-warning fw-bold">{skill.level}%</span>
                        </div>
                        
                        {/* شريط التقدم */}
                        <div 
                          className="progress w-100" 
                          style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}
                        >
                          <div 
                            className="progress-bar bg-warning" 
                            role="progressbar" 
                            style={{ 
                              width: `${skill.level}%`, 
                              borderRadius: '4px',
                              boxShadow: '0 0 10px rgba(255, 193, 7, 0.4)'
                            }} 
                            aria-valuenow={skill.level} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}