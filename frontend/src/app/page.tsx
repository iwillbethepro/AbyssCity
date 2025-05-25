import Image from "next/image";
import Link from "next/link";
import InteractiveGuideImage from "@/components/InteractiveGuideImage"; // 생성한 클라이언트 컴포넌트 import (경로는 실제 위치에 맞게 수정)

// 간단한 SVG 아이콘 예시 (Heroicons에서 가져옴)
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const InformationCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

// 새로운 아이콘 (예시)
const BookOpenIcon = () => ( // 攻略記事 아이콘 대체
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-indigo-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);


export default function Home() {
  // 메뉴 아이템 데이터 (GameWith 스타일 LNB용)
  const lnbMenuItems = [
    { name: "トップページ", href: "/", current: true },
    { name: "序盤の進め方", href: "/guides/getting-started" },
    { name: "最強ランキング", href: "/rankings/overall" },
    { name: "キャラクター一覧", href: "/characters" },
    { name: "装備・アイテム", href: "/equipment" },
    { name: "掲示板", href: "/bbs" },
    { name: "よくある質問", href: "/faq" },
  ];

  const latestTopics = [
    { type: "質問", title: "新規/復帰向けおすすめレギオンは？", href: "#" },
    { type: "イベント", title: "公式イベント「アビス大戦」開催情報まとめ", href: "#" },
    { type: "攻略", title: "レベル50以降の効率的な装備集め法", href: "#" },
    { type: "雑談", title: "懐かしのアイオン思い出語り場", href: "#" },
  ];

  // 이미지 기반 가이드를 위한 데이터 구조 변경
  const popularGuides = [
      { title: "初心者向け序盤ガイド", href: "#", imageSrc: "/icons/guide_icon_beginner.png", altText: "초보자 가이드 아이콘" },
      { title: "最新アップデートまとめ", href: "#", imageSrc: "/icons/guide_icon_update.png", altText: "업데이트 정보 아이콘" },
      { title: "おすすめ装備＆入手法", href: "#", imageSrc: "/icons/guide_icon_equipment.png", altText: "장비 추천 아이콘" },
      { title: "クラス別スキル解説", href: "#", imageSrc: "/icons/guide_icon_class.png", altText: "클래스별 스킬 아이콘" },
      { title: "PvP初心者必見Q&A", href: "#", imageSrc: "/icons/guide_icon_pvp.png", altText: "PvP 가이드 아이콘" },
      { title: "レギオン募集掲示板", href: "#", imageSrc: "/icons/guide_icon_legion.png", altText: "레기온 모집 아이콘" },
      { title: "ボス攻略", href: "#", imageSrc: "/icons/guide_icon_boss.png", altText: "보스 공략 아이콘" },
      { title: "マップ情報", href: "#", imageSrc: "/icons/guide_icon_map.png", altText: "맵 정보 아이콘" },
      { title: "イベント情報", href: "#", imageSrc: "/icons/guide_icon_event.png", altText: "이벤트 정보 아이콘" },
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-['Meiryo','Noto_Sans_JP',sans-serif] text-gray-800">
      {/* 헤더 */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 로고 및 사이트명 */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/abysscity_icon.jpg" // public 폴더에 있는 아이콘 이미지
                  alt="Abyss City Logo"
                  width={36}
                  height={36}
                  className="rounded"
                />
                <span className="text-indigo-700 font-bold text-xl tracking-tight">Abyss City</span>
              </Link>
            </div>

            {/* 검색창 (GameWith 스타일 - 좀 더 크게) */}
            <div className="flex-1 px-4 lg:px-12">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="攻略情報、掲示板などを検索"
                  type="search"
                />
              </div>
            </div>
            
            {/* 로그인/회원가입 버튼 */}
            <div className="flex items-center space-x-3">
              <button className="text-sm text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">新規登録</button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md shadow-sm">ログイン</button>
            </div>
          </div>
        </div>
        {/* GNB (글로벌 네비게이션 바) - 헤더 하단 */}
        <nav className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-12 space-x-6 text-sm font-medium">
                    <Link href="/" className="text-gray-700 hover:text-indigo-600">ホーム</Link>
                    <Link href="/guides" className="text-indigo-600 border-b-2 border-indigo-600 pb-3 -mb-px">攻略記事</Link> {/* 활성 탭 예시 */}
                    <Link href="/bbs" className="text-gray-700 hover:text-indigo-600">掲示板</Link>
                    <Link href="/rankings" className="text-gray-700 hover:text-indigo-600">ランキング</Link>
                    <Link href="/characters" className="text-gray-700 hover:text-indigo-600">キャラクター</Link>
                    <Link href="/databases" className="text-gray-700 hover:text-indigo-600">データベース</Link>
                    <Link href="/about" className="text-gray-700 hover:text-indigo-600">このサイトについて</Link>
                </div>
            </div>
        </nav>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        {/* 대형 배너 */}
        <section className="mb-8">
          <Image
            src="/aion_banner.jpg" 
            alt="Tower of Aion Banner"
            width={1200} 
            height={300} 
            className="rounded-lg object-cover shadow-lg w-full"
            priority 
          />
        </section>

        {/* 2단 레이아웃: 좌측 LNB + 우측 본문 */}
        <div className="lg:flex lg:space-x-8">
          {/* 좌측 LNB (Local Navigation Bar) */}
          <aside className="lg:w-72 xl:w-80 space-y-6 mb-8 lg:mb-0">
            {/* 사이트 정보 및 부가 메뉴 */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                    <Image
                        src="/abysscity_icon.jpg"
                        alt="Abyss City"
                        width={40}
                        height={40}
                        className="rounded"
                    />
                    <div className="ml-3">
                        <h2 className="font-semibold text-md">Abyss City</h2>
                        <p className="text-xs text-gray-500">アイオン攻略・コミュニティ</p>
                    </div>
                </div>
                <span className="block text-center bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded mb-3">日本サーバー対応</span>
                <p className="text-xs text-gray-600 mb-3">
                    タワーオブアイオンの最新攻略情報、掲示板、各種データを提供するコミュニティサイトです。
                </p>
                <Link href="/about" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-3 rounded-md">
                    このサイトについて
                </Link>
            </div>

            {/* GameWith 스타일 메뉴 목록 */}
            <div className="bg-white rounded-lg shadow">
              <h3 className="text-sm font-semibold text-gray-500 px-4 py-3 border-b border-gray-200">メインメニュー</h3>
              <nav className="divide-y divide-gray-100">
                {lnbMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 ${
                      item.current ? "text-indigo-600 font-medium" : "text-gray-700"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRightIcon />
                  </Link>
                ))}
              </nav>
            </div>

            {/* 추가 정보 섹션 (예: 광고, 외부 링크 등) */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">関連情報</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-indigo-600 hover:underline">公式Twitter</Link></li>
                <li><Link href="#" className="text-indigo-600 hover:underline">開発者ブログ</Link></li>
              </ul>
            </div>
          </aside>

          {/* 우측 메인 콘텐츠 */}
          <main className="flex-1 space-y-8">
            {/* 공지사항 섹션 */}
            <section className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <InformationCircleIcon />
                <h2 className="ml-2 text-xl font-semibold">お知らせ</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md text-sm">
                <p><span className="font-bold">Abyss City</span>へようこそ！当サイトはタワー オブ アイオン日本版プレイヤーのための情報共有コミュニティです。皆さんの攻略情報や活発な議論をお待ちしています！</p>
                <p className="mt-2">サイトに関するご意見・ご要望は<Link href="/feedback" className="underline font-medium">こちら</Link>まで。</p>
              </div>
            </section>

            {/* 주목 가이드 / 인기 콘텐츠 (이미지 기반) */}
            <section className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-6">
                <BookOpenIcon />
                <h2 className="text-xl font-semibold">序盤〜終盤まで役立つ攻略情報</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {popularGuides.map((guide) => (
                  <Link key={guide.title} href={guide.href} className="group block text-center">
                    <div className="relative w-24 h-24 mx-auto mb-2 border-2 border-gray-200 rounded-lg group-hover:border-indigo-500 transition-colors overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center">
                      <InteractiveGuideImage // 기존 Image 컴포넌트 대신 사용
                        src={guide.imageSrc}
                        alt={guide.altText || guide.title}
                        width={64}
                        height={64}
                        className="object-contain group-hover:scale-110 transition-transform"
                        // fallbackSrc="/icons/placeholder_icon.png" // 필요하다면 대체 이미지 경로 지정
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">{guide.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* 커뮤니티 최신 토픽 */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">コミュニティ最新トピック</h2>
              <ul className="space-y-3">
                {latestTopics.map((topic, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <Link href={topic.href} className="group">
                      <span className={`text-xs font-bold ${topic.type === "質問" ? "text-green-600" : topic.type === "イベント" ? "text-red-600" : "text-blue-600"}`}>
                        [{topic.type}]
                      </span>
                      <span className="ml-2 text-gray-700 group-hover:text-indigo-600 group-hover:underline">{topic.title}</span>
                      <p className="text-xs text-gray-400 mt-1">コメント数: {Math.floor(Math.random() * 20)} | 最終更新: 2025/05/{25 - index}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Link href="/bbs" className="inline-block bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg text-sm">
                  掲示板をもっと見る
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-300 mt-12">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2025 Abyss City. All rights reserved.</p>
          <p className="text-xs mt-1">タワー オブ アイオンのゲーム内画像・データに関する著作権は開発元に帰属します。</p>
          <div className="mt-4 space-x-4">
            <Link href="/terms" className="text-xs hover:underline">利用規約</Link>
            <Link href="/privacy" className="text-xs hover:underline">プライバシーポリシー</Link>
            <Link href="/contact" className="text-xs hover:underline">お問い合わせ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
