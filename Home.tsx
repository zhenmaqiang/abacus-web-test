import { useState } from 'react';
import Navbar from '@/components/Navbar';
import DateTimeCard from '@/components/DateTimeCard';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  const handleFontSize = (size: 'small' | 'medium' | 'large') => {
    setFontSize(size);
    // Apply font size to document
    const root = document.documentElement;
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    root.style.fontSize = fontSizeMap[size];
    localStorage.setItem('fontSize', size);
  };

  const handleSuggest = () => {
    const suggestion = prompt('请输入您的建议或反馈:');
    if (suggestion) {
      alert(`感谢您的建议: "${suggestion}"。我们已收到您的反馈。`);
      // TODO: Send suggestion to backend API
    }
  };

  const handleSearch = (query: string) => {
    // TODO: Implement actual search functionality
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        onFontSizeChange={handleFontSize}
        onSearch={handleSearch}
        onSuggest={handleSuggest}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-10 relative">
          {/* DateTime Card */}
          <div className="mb-8">
            <DateTimeCard />
          </div>

          {/* Hero Section */}
          <section className="hero">
            <h1>ABACUS</h1>
            <p>原子轨道第一性原理计算软件 | 大规模电子结构模拟</p>
            <p className="text-sm opacity-90">
              ABACUS (Atomic-orbital Based Ab-initio Computation at USTC) 是一个开源软件包，
              用于从第一性原理进行大规模电子结构模拟。由中科院量子信息重点实验室何力新教授团队自2007年以来开发。
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary">立即下载</a>
              <a href="#docs" className="btn btn-secondary">查看文档</a>
              <a href="#github" className="btn btn-secondary">GitHub</a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-cyan-400 inline-block">
              主要功能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  ⚛️
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">第一性原理计算</h3>
                <p className="text-gray-600 text-sm mb-4">
                  基于密度泛函理论(DFT)的高精度电子结构计算
                </p>
                <a href="#" className="text-blue-500 text-sm font-medium hover:text-blue-700">
                  了解更多 →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  🚀
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">高性能计算</h3>
                <p className="text-gray-600 text-sm mb-4">
                  支持大规模并行计算，可处理数千原子的体系
                </p>
                <a href="#" className="text-blue-500 text-sm font-medium hover:text-blue-700">
                  了解更多 →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  🔬
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">丰富的功能</h3>
                <p className="text-gray-600 text-sm mb-4">
                  结构优化、分子动力学、光学性质等多种计算功能
                </p>
                <a href="#" className="text-blue-500 text-sm font-medium hover:text-blue-700">
                  了解更多 →
                </a>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section id="download" className="mt-16 bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-cyan-400 inline-block">
              下载
            </h2>
            <p className="text-gray-600 mb-6">
              ABACUS 是一个开源项目，您可以从以下渠道获取最新版本：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-400">
                <h3 className="font-bold text-blue-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm mb-3">
                  从 GitHub 获取源代码和最新版本
                </p>
                <a href="https://github.com" className="text-blue-500 font-medium hover:text-blue-700">
                  访问 GitHub →
                </a>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-400">
                <h3 className="font-bold text-blue-900 mb-2">官方网站</h3>
                <p className="text-gray-600 text-sm mb-3">
                  从官方网站下载预编译版本
                </p>
                <a href="#" className="text-blue-500 font-medium hover:text-blue-700">
                  下载最新版本 →
                </a>
              </div>
            </div>
          </section>

          {/* Auth Section */}
          {isAuthenticated ? (
            <section className="mt-16 bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">欢迎, {user?.name}!</h2>
              <p className="text-gray-600 mb-4">您已登录到 ABACUS 门户网站。</p>
              <button
                onClick={logout}
                className="btn btn-primary"
              >
                登出
              </button>
            </section>
          ) : (
            <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">登录账户</h2>
              <p className="text-gray-600 mb-6">
                登录以访问更多功能和个性化体验。
              </p>
              <a
                href={getLoginUrl()}
                className="btn btn-primary inline-block"
              >
                登录
              </a>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 ABACUS Project. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">
            Developed by USTC Quantum Information Lab
          </p>
        </div>
      </footer>
    </div>
  );
}
