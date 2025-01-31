"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import '../../styles/Performances.css'; // 기존 스타일 그대로 사용
import { fetchPerformances } from "../../../utils/api"; // API 호출 함수 변경
import Image from "next/image";
import Stage from "../../../public/stage.png";

interface Performance {
  _id: string;
  teamName: string;
  genre: string[];
  season: string;
  teamMembers: string[];
  youtube: string;
}

function Performances() {
  const [performanceData, setPerformanceData] = useState<Performance[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getPerformances = async () => {
      const data = await fetchPerformances(); // API 호출 함수 변경
      setPerformanceData(data);
    };
    getPerformances();
  }, []);

  const totalPages = Math.ceil(performanceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPerformances = performanceData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="total-container">

      <Header />

          <div className="title-container">
            <Image className="title-image-stage" alt="Trophy" src={Stage} />
            <h1 className="title-text">역대 공연</h1> {/* 제목 변경 */}
          </div>
        
          <div className="table-container">
            <table className="performance-table">
              <thead>
                <tr>
                  <th>공연팀명</th>
                  <th>장르</th>
                  <th>시즌</th>
                  <th>팀원</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* 기존 데이터 표시 */}
                {currentPerformances.map((performance) => (
                  <tr key={performance._id}>
                    <td>{performance.teamName}</td>
                    <td>{performance.genre.join(", ")}</td>
                    <td>{performance.season}</td>
                    <td>{performance.teamMembers.join(", ")}</td>
                    <td>
                    {performance.youtube && (
    <button
      onClick={() => {
        window.open(performance.youtube, "_blank", "noopener,noreferrer");
      }}
      className="youtube-button"
    >
      🔗
    </button>
  )}
                    </td>
                  </tr>
                ))}

                {/* 부족한 행 채우기 */}
                {Array.from({ length: Math.max(0, 10 - currentPerformances.length) }).map((_, index) => (
                  <tr key={`empty-${index}`} className="empty-row">
                    <td colSpan={5}></td> {/* 빈 칸 */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        <div className="overlay-box"/>
    </div>
  );
}

export default Performances;
