import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Project } from '../projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link
      to={project.link}
      className="project-card group relative block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`relative h-full bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 border-2 border-transparent hover:border-blue-200 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-2`}>
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-semibold text-white shadow-lg">
            <SparklesIcon className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}

        {/* 배경 장식 */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
        <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* 콘텐츠 */}
        <div className="relative z-10">
          {/* 아이콘 */}
          <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
            <span className="text-2xl font-bold text-white">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* 제목 */}
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          {/* 설명 */}
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
            <span>프로젝트 보기</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* 호버 오버레이 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
      </div>
    </Link>
  );
};

export default ProjectCard;

