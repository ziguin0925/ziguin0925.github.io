import React from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NotFound = () => {
    useGSAP(() => {
        // 페이지 로드 애니메이션
        gsap.fromTo('.not-found-container',
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }
        );

        // 404 숫자 애니메이션
        gsap.fromTo('.error-number',
            {
                scale: 0.5,
                rotation: 10
            },
            {
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)",
                delay: 0.3
            }
        );

        // 텍스트 애니메이션
        gsap.fromTo('.error-text',
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.6
            }
        );

        // 버튼 애니메이션
        gsap.fromTo('.error-buttons',
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.9
            }
        );

        // 배경 요소들 애니메이션
        gsap.fromTo('.bg-decoration',
            {
                opacity: 0,
                scale: 0.8,
                rotation: 45
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 2,
                ease: "power2.out",
                stagger: 0.2,
                delay: 1.2
            }
        );
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* 배경 장식 요소들 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="bg-decoration absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="bg-decoration absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
                <div className="bg-decoration absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
            </div>

            <div className="not-found-container relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* 404 숫자 */}
                    {/* 
                        sm: 640px 이상 (작은 태블릿)
                        md: 768px 이상 (태블릿)
                        lg: 1024px 이상 (작은 데스크톱)
                        xl: 1280px 이상 (데스크톱)
                        2xl: 1536px 이상 (대형 데스크톱) 
                    */}

                    <div className="error-number mb-8">
                        <h1 
                            className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none"
                            style={{ fontSize: 'clamp(2rem, 9vw, 6.5rem)' }}
                        >
                            404
                        </h1>
                        <div className="mt-4 h-1 sm:h-2 w-24 sm:w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    {/* 에러 메시지 */}
                    <div className="error-text mb-12">
                        <h2 
                            className="font-bold text-gray-800 mb-4 sm:mb-6"
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.75rem)' }}
                        >
                            페이지를 찾을 수 없습니다
                        </h2>
                        <p 
                            className="text-gray-600 leading-relaxed max-w-2xl mx-auto px-4"
                            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                        >
                            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
                            URL을 다시 확인하시거나 아래 버튼을 이용해 메인 페이지로 돌아가세요.
                        </p>
                    </div>

                    {/* 버튼들 */}
                    <div className="error-buttons flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Link
                            to="/"
                            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                        >
                            <span className="relative z-10">메인 페이지로 돌아가기</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
                            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                        >
                            이전 페이지로 돌아가기
                            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">←</span>
                        </button>
                    </div>

                    {/* 추가 정보 */}
                    <div className="mt-12 sm:mt-16 text-center">
                        <div className="inline-flex items-center space-x-2 text-gray-500">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>도움이 필요하시면 고객지원팀에 문의해주세요</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;