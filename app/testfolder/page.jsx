import React from 'react';
import './styles.css'; // 스타일 파일을 불러옵니다.

function Windows11UI() {
  return (
    <div className="container">
      <div className="taskbar">
        {/* 태스크바 내용 */}
      </div>
      <div className="window">
        <div className="title-bar">
          <div className="title">Windows 11</div>
        </div>
        <div className="content">
          {/* 내용 */}
        </div>
      </div>
    </div>
  );
}

export default Windows11UI;