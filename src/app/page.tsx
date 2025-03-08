import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop"
            alt="長野県の美しい山々と田園風景"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">信濃酒造</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            長野県の自然が育む、伝統の日本酒と新たな挑戦のワイン
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#sake"
              className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-none transition-colors"
            >
              日本酒を見る
            </Link>
            <Link
              href="#wine"
              className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-none transition-colors"
            >
              ワインを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 私たちについて */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary dark:text-primary">
            私たちについて
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                伝統と革新が融合する酒蔵
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                信濃酒造は、長野県の美しい自然に囲まれた場所で、江戸時代から続く伝統的な酒造りの技術を守りながら、新しい挑戦を続けています。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                代々受け継がれてきた日本酒造りの技術と情熱を大切にしながら、20年前からは長野県の気候を活かしたワイン造りにも挑戦。自社の水田とブドウ畑で育てた原料にこだわり、地域に根ざした酒造りを行っています。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                私たちの目標は、長野県の豊かな自然と文化を映し出す、唯一無二の味わいをお届けすること。伝統を守りながらも、常に新しい可能性を追求し続けています。
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503263524195-5e9b13d45a20?q=80&w=2071&auto=format&fit=crop"
                alt="伝統的な酒蔵の様子"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 日本酒セクション */}
      <section id="sake" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary dark:text-primary">
            日本酒
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-none overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1974&auto=format&fit=crop"
                alt="日本酒と水田"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">
                自社栽培の米から生まれる逸品
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                信濃酒造の日本酒は、自社の水田で栽培した酒米「美山錦」と「金紋錦」を使用。長野県の清らかな水と、代々受け継がれてきた技術で丁寧に醸されています。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                特に人気の「信濃の雫」は、フルーティーな香りと繊細な味わいが特徴の純米大吟醸。全国の日本酒コンクールでも高い評価を受けています。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃の雫</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    純米大吟醸
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃の誉</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    特別純米酒
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃の風</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    純米吟醸
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃の月</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    本醸造
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ワインセクション */}
      <section id="wine" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary dark:text-secondary">
            ワイン
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                長野の気候が育むブドウから
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                20年前から始めたワイン造り。長野県の冷涼な気候と昼夜の寒暖差を活かし、自社ブドウ畑で栽培したメルローとシャルドネから、日本酒とは異なる魅力を持つワインを生み出しています。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                日本酒造りで培った発酵の技術と、ワイン専門家との協力により、日本酒蔵ならではの個性的なワインが誕生しました。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃メルロー</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    赤ワイン
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃シャルドネ</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    白ワイン
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃ロゼ</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ロゼワイン
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">信濃スパークリング</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    発泡性ワイン
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-none overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1596133141493-78e4cb3eea75?q=80&w=2070&auto=format&fit=crop"
                alt="ブドウ畑の風景"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 酒蔵見学セクション */}
      <section id="tour" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent dark:text-accent">
            酒蔵見学
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-none shadow-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1575985812491-e549a36e0bb5?q=80&w=2070&auto=format&fit=crop"
                  alt="酒蔵見学の様子"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">酒造りの現場を体験</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  信濃酒造では、日本酒とワインの製造工程を見学できるツアーを開催しています。酒米の精米から仕込み、熟成までの工程や、ブドウの栽培からワイン醸造までの過程を、専門ガイドがご案内します。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">見学内容</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      <li>酒蔵内部の見学</li>
                      <li>ワイナリー見学</li>
                      <li>製造工程の説明</li>
                      <li>試飲体験（5種類）</li>
                      <li>お土産付き</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">開催情報</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>
                        <span className="font-semibold">日時:</span> 毎週土・日
                        10:00〜/14:00〜
                      </li>
                      <li>
                        <span className="font-semibold">所要時間:</span> 約90分
                      </li>
                      <li>
                        <span className="font-semibold">料金:</span> 大人
                        2,500円/人
                      </li>
                      <li>
                        <span className="font-semibold">定員:</span>{" "}
                        各回15名まで
                      </li>
                      <li>
                        <span className="font-semibold">予約:</span> 要事前予約
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-none transition-colors"
                  >
                    見学予約はこちら
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary dark:text-primary">
            お知らせ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  2023.12.15
                </p>
                <h3 className="font-bold mb-3 text-lg">
                  年末年始の営業について
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  12月28日から1月5日まで休業いたします。オンラインショップは通常通り注文可能ですが、発送は1月6日以降となります。
                </p>
                <a
                  href="#"
                  className="text-primary dark:text-primary hover:underline text-sm font-semibold"
                >
                  詳細を見る →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  2023.11.20
                </p>
                <h3 className="font-bold mb-3 text-lg">
                  新商品「信濃の雫 冬限定」発売
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  冬季限定の純米大吟醸「信濃の雫
                  冬限定」を発売しました。雪解け水で仕込んだ特別な一本をぜひお楽しみください。
                </p>
                <a
                  href="#"
                  className="text-primary dark:text-primary hover:underline text-sm font-semibold"
                >
                  詳細を見る →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  2023.10.05
                </p>
                <h3 className="font-bold mb-3 text-lg">
                  全国酒類コンクールで金賞受賞
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  当蔵の「信濃メルロー2020」が全国ワインコンクールで金賞を受賞しました。皆様の応援に感謝いたします。
                </p>
                <a
                  href="#"
                  className="text-primary dark:text-primary hover:underline text-sm font-semibold"
                >
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
