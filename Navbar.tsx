import { useState } from 'react';
import { APP_LOGO, APP_TITLE } from '@/const';

interface NavbarProps {
  onFontSizeChange?: (size: 'small' | 'medium' | 'large') => void;
  onSearch?: (query: string) => void;
  onSuggest?: () => void;
}

export default function Navbar({ onFontSizeChange, onSearch, onSuggest }: NavbarProps) {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFontSize = (size: 'small' | 'medium' | 'large') => {
    setFontSize(size);
    onFontSizeChange?.(size);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`正在搜索: ${searchQuery}`);
      onSearch?.(searchQuery);
    } else {
      alert('请输入搜索内容');
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="flex items-center gap-3 py-7">
          {APP_LOGO && (
            <img src={APP_LOGO} alt="Logo" className="h-12 w-auto" />
          )}
          <span className="text-white font-bold text-2xl tracking-wide hidden sm:inline">
            {APP_TITLE}
          </span>
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">首页</a></li>
          <li><a href="#features" className="nav-link">功能</a></li>
          <li><a href="#download" className="nav-link">下载</a></li>
          <li><a href="#docs" className="nav-link">文档</a></li>
          <li><a href="#contact" className="nav-link">联系</a></li>
        </ul>

        {/* Controls */}
        <div className="navbar-controls">
          {/* Suggest Button */}
          <button
            onClick={onSuggest}
            className="font-btn text-sm px-2.5 py-1.5"
          >
            建议反馈
          </button>

          {/* Font Size Controls */}
          <div className="flex gap-1">
            <button
              onClick={() => handleFontSize('small')}
              className={`font-btn ${fontSize === 'small' ? 'active' : ''}`}
            >
              小
            </button>
            <button
              onClick={() => handleFontSize('medium')}
              className={`font-btn ${fontSize === 'medium' ? 'active' : ''}`}
            >
              中
            </button>
            <button
              onClick={() => handleFontSize('large')}
              className={`font-btn ${fontSize === 'large' ? 'active' : ''}`}
            >
              大
            </button>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="搜索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              className="search-input"
            />
            <button
              onClick={handleSearch}
              className="search-btn"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
