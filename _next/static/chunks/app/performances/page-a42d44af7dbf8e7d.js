(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{8491:(e,a,t)=>{Promise.resolve().then(t.bind(t,8960))},8960:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var A=t(5155),r=t(2115),s=t(6172);t(8839);var n=t(9807),c=t(5565);let l={src:"/내-저장소명//_next/static/media/stage.be2d8e5f.png",height:154,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEU5essKQ2LOD4EbN14AOUvPDH/HDXoyKFNIIlc9SIckaahkEEs/UpZhEEs/VppiEEtasW6BAAAAB3RSTlP+/sH8/rLmdrhubAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACpJREFUeJw1wcUBACAQA7CeG7L/trxI4Gxmxg7qWqeaoCQiQorIO7Mz8D0UJwDNDADJowAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},i=function(){let[e,a]=(0,r.useState)([]),[t,i]=(0,r.useState)(1);(0,r.useEffect)(()=>{(async()=>{a(await (0,n.Mj)())})()},[]);let h=Math.ceil(e.length/10),d=(t-1)*10,o=e.slice(d,d+10);return(0,A.jsxs)("div",{className:"total-container",children:[(0,A.jsx)(s.default,{}),(0,A.jsxs)("div",{className:"title-container",children:[(0,A.jsx)(c.default,{className:"title-image-stage",alt:"Trophy",src:l}),(0,A.jsx)("h1",{className:"title-text",children:"역대 공연"})," "]}),(0,A.jsx)("div",{className:"table-container",children:(0,A.jsxs)("table",{className:"performance-table",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{children:"공연팀명"}),(0,A.jsx)("th",{children:"장르"}),(0,A.jsx)("th",{children:"시즌"}),(0,A.jsx)("th",{children:"팀원"}),(0,A.jsx)("th",{})]})}),(0,A.jsxs)("tbody",{children:[o.map(e=>(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:e.teamName}),(0,A.jsx)("td",{children:e.genre.join(", ")}),(0,A.jsx)("td",{children:e.season}),(0,A.jsx)("td",{children:e.teamMembers.join(", ")}),(0,A.jsx)("td",{children:e.youtube&&(0,A.jsx)("button",{onClick:()=>{window.open(e.youtube,"_blank","noopener,noreferrer")},className:"youtube-button",children:"\uD83D\uDD17"})})]},e._id)),Array.from({length:Math.max(0,10-o.length)}).map((e,a)=>(0,A.jsxs)("tr",{className:"empty-row",children:[(0,A.jsx)("td",{colSpan:5})," "]},"empty-".concat(a)))]})]})}),h>1&&(0,A.jsx)("div",{className:"pagination",children:Array.from({length:h},(e,a)=>(0,A.jsx)("button",{className:"page-button ".concat(t===a+1?"active":""),onClick:()=>i(a+1),children:a+1},a+1))}),(0,A.jsx)("div",{className:"overlay-box"})]})}},6172:(e,a,t)=>{"use strict";t.d(a,{default:()=>d});var A=t(5155);t(2115);var r=t(8173),s=t.n(r),n=t(6046);t(7257);var c=t(5565);let l={src:"/내-저장소명//_next/static/media/header_youtube.3d06c7b6.png",height:20,width:30,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlP/r9OL6ugeUaTNZjsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2BkAANmEMHIysDABGKwsUMZjCwgBkwNAANmACcOHJQDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},i={src:"/내-저장소명//_next/static/media/header_insta.bef2465d.png",height:25,width:25,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////9MaXH///////////////////////+BIVw8AAAACnRSTlPAzRwAKQZLcpGuhDQhWgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJxNizEOACAIxHpwAv9/sVEXtyZtKQmgkDPCA2TDGAjWIn44qpMXp8XdpdoUtgCRMU+jtwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},h={src:"/내-저장소명//_next/static/media/header_logo.d308f7fc.png",height:40,width:274,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEVNZ7xBb8IufsxlWrRFbsGYcLktAAAABXRSTlNPhV5dlrIUmfIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAARSURBVHicY2BiZGBiYWBkBgAAPwAOC5e0JQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},d=()=>{let e=(0,n.usePathname)(),a=a=>e===a?"active":"";return(0,A.jsxs)("header",{className:"header",children:[(0,A.jsx)("div",{className:"header-left",children:(0,A.jsx)(s(),{href:"/",className:"home-button",children:(0,A.jsx)(c.default,{src:h,alt:"Logo",width:137})})}),(0,A.jsxs)("nav",{className:"header-center",children:[(0,A.jsx)(s(),{href:"/winners",className:"nav-item ".concat(a("/winners")),children:"역대 우승자"}),(0,A.jsx)(s(),{href:"/performances",className:"nav-item ".concat(a("/performances")),children:"역대 공연"}),(0,A.jsx)(s(),{href:"/hall-of-fame",className:"nav-item ".concat(a("/hall-of-fame")),children:"명예의 전당"}),(0,A.jsx)(s(),{href:"/lunatic-wiki",className:"nav-item ".concat(a("/lunatic-wiki")),children:"루나틱 위키"})]}),(0,A.jsxs)("div",{className:"header-right",children:[(0,A.jsx)("a",{href:"https://www.youtube.com/@RealLunaTV",target:"_blank",rel:"noopener noreferrer",children:(0,A.jsx)(c.default,{src:l,alt:"YouTube",width:28})}),(0,A.jsx)("a",{href:"https://www.instagram.com/lunatic_street/",target:"_blank",rel:"noopener noreferrer",children:(0,A.jsx)(c.default,{src:i,alt:"Instagram",width:28,height:28})})]})]})}},9807:(e,a,t)=>{"use strict";t.d(a,{Bx:()=>n,Cj:()=>r,Mj:()=>s,fR:()=>c,gm:()=>l});let A="https://lunatic-back.onrender.com";async function r(){let e=await fetch("".concat(A,"/battles"));if(!e.ok)throw Error("배틀 데이터를 불러오는 데 실패했습니다.");return e.json()}async function s(){let e=await fetch("".concat(A,"/performances"));if(!e.ok)throw Error("공연 데이터를 불러오는 데 실패했습니다.");return e.json()}async function n(){let e=await fetch("${API_BASE_URL}/hall-of-fame/winners");return await e.json()}async function c(){let e=await fetch("".concat(A,"/hall-of-fame/judges"));return await e.json()}async function l(){let e=await fetch("".concat(A,"/hall-of-fame/performers"));return await e.json()}},7257:()=>{},8839:()=>{}},e=>{var a=a=>e(e.s=a);e.O(0,[696,998,992,441,517,358],()=>a(8491)),_N_E=e.O()}]);