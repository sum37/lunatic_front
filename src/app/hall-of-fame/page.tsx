"use client";


import React, { useEffect, useState } from "react";
import { fetchTop5Winners, fetchTop5Judges, fetchTop5Performers } from "../../../utils/api";
import "../../styles/HallOfFame.css"; // ✅ 스타일 추가
import Header from "@/components/Header";
import Image from "next/image";
import HOF from "../../../public/hof.png";
import hof_battle from "../../../public/hof_battle.png";
import hof_perf from "../../../public/hof_perf.png";
import hof_judge from "../../../public/hof_judge.png";
import {Winner, Judge, Performer} from "../../types/types";

const HallOfFame = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [judges, setJudges] = useState<Judge[]>([]);
  const [performers, setPerformers] = useState<Performer[]>([]);

  useEffect(() => {
    const getData = async () => {
      setWinners(await fetchTop5Winners());
      setJudges(await fetchTop5Judges());
      setPerformers(await fetchTop5Performers());
    };
    getData();
  }, []);

  return (
    <div className="total-container">
      <Header />
      <div className ="title-container-hof">
        <Image className="title-image-hof" alt="Trophy" src={HOF}/>
        <h1 className="title-text-hof">명예의 전당</h1>
      </div>
      

      <div className="hof-container"> {/* ✅ 가로 정렬을 위한 컨테이너 */}
        <div className="hof-section">
          <div className="hof-title">
            <Image className="hof-title-image" alt="Trophy" src={hof_battle} />
            <h2 className="hof-title-text">우승 부문</h2>
          </div>
          
          <ul>{winners.map((w, i) => <li key={i}>{w.name} ({w.generation}) {w.winBattlesCount}회</li>)}</ul>
        </div>

        <div className="hof-section">
          <div className="hof-title">
            <Image className="hof-title-image" alt="Trophy" src={hof_judge} />
            <h2 className="hof-title-text">저지 부문</h2>
          </div>
          <ul>{judges.map((j, i) => <li key={i}>{j.name} ({j.generation}) {j.judgesCount}회</li>)}</ul>
        </div>

        <div className="hof-section">
          <div className="hof-title">
            <Image className="hof-title-image" alt="Trophy" src={hof_perf} />
            <h2 className="hof-title-text">공연 부문</h2>
          </div>
          <ul>{performers.map((p, i) => <li key={i}>{p.name} ({p.generation}) {p.performancesCount}회</li>)}</ul>
        </div>
      </div>
      <div className="overlay-box" />
    </div>
  );
};

export default HallOfFame;
