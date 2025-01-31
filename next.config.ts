import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ 정적 사이트 변환 모드
  images: {
    unoptimized: true, // ✅ GitHub Pages에서는 이미지 최적화 비활성화
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/내-저장소명/" : undefined, // ✅ GitHub Pages에서 올바른 URL 설정
};

export default nextConfig;
