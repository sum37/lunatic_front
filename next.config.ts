const nextConfig = {
  output: "export", // ✅ 정적 파일 모드 활성화
  images: {
    unoptimized: true, // ✅ GitHub Pages에서 이미지 최적화 비활성화
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/lunatic_front/" : "", // ✅ 저장소명과 동일하게 설정
};

export default nextConfig;
