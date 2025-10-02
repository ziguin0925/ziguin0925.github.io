import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="select-none w-full bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* 브랜드 섹션 */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JeongRyongWoo
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              혁신적인 기술과 창의적인 아이디어로 더 나은 디지털 경험을 제공합니다.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', href: 'https://github.com/ziguin0925', icon: 'M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' },
                { name: 'Instagram', href: 'https://www.instagram.com/ryong_w0_0', icon: 'M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 30 30">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '#' },
                { name: 'Blog', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 서비스 */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}
        </div> 

        {/* 하단 구분선과 저작권 */}
        <div className="pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 JeongRyongWoo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
