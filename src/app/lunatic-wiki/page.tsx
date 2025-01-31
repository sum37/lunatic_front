"use client";

import React from "react";
import "../../styles/LunaticWiki.css"; // ✅ 스타일 추가
import Header from "@/components/Header";

const LunaticWiki = () => {
  return (
    <div className="total-container">
      <Header />
      <header className="wiki-header">
        <h1>루나틱위키를 작성해주실 능력자를 구하고 있습니다.</h1>
        <p>관심있으신 분들은 연락주세요</p>
        <p>sum37@kaist.ac.kr</p>
        <p>17기 이수민</p>
      </header>
      <div className="overlay-box" />

      {/* <nav className="wiki-sidebar">
        <h2>📂 목차</h2>
        <ul>
          <li><a href="#about">Lunatic 소개</a></li>
          <li><a href="#history">역사</a></li>
          <li><a href="#members">주요 멤버</a></li>
          <li><a href="#battles">주요 배틀</a></li>
          <li><a href="#performances">주요 공연</a></li>
        </ul>
      </nav>

      <main className="wiki-content">
        <section id="about">
          <h2>🌟 Lunatic 소개</h2>
          <p>Lunatic은 KAIST의 공식 스트릿 댄스 동아리로, 다양한 배틀과 공연을 주최 및 참여하고 있습니다.</p>
        </section>

        <section id="history">
          <h2>📜 역사</h2>
          <p>2000년대 초반 창설된 Lunatic은 그동안 수많은 배틀과 공연을 진행해 왔습니다.</p>
        </section>

        <section id="members">
          <h2>👥 주요 멤버</h2>
          <p>각 기수별 주요 멤버 정보가 제공됩니다.</p>
        </section>

        <section id="battles">
          <h2>🔥 주요 배틀</h2>
          <p>KAIST 내외에서 열린 주요 배틀 정보를 기록합니다.</p>
        </section>

        <section id="performances">
          <h2>🎭 주요 공연</h2>
          <p>학교 축제 및 외부 공연 기록이 포함됩니다.</p>
        </section>
      </main> */}
    </div>
  );
};

export default LunaticWiki;
