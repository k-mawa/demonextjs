import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - 信濃酒造",
  description:
    "信濃酒造へのお問い合わせはこちらから。見学予約、商品についてのお問い合わせなど、お気軽にご連絡ください。",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
            お問い合わせ
          </h1>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-none shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              信濃酒造へのお問い合わせは、以下のフォームからお願いいたします。見学のご予約、商品に関するお問い合わせなど、お気軽にご連絡ください。
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    お名前 <span className="text-gray-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    メールアドレス <span className="text-gray-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  お問い合わせ件名 <span className="text-gray-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">選択してください</option>
                  <option value="tour">酒蔵見学について</option>
                  <option value="product">商品について</option>
                  <option value="wholesale">卸売のお問い合わせ</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  お問い合わせ内容 <span className="text-gray-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-black focus:ring-gray-500 border-gray-300 rounded-none mt-1"
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline"
                  >
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-gray-500">*</span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-none text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              アクセス
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-none shadow-md p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">信濃酒造</h3>
                  <address className="not-italic text-gray-700 dark:text-gray-300 space-y-2">
                    <p>
                      〒380-0000
                      <br />
                      長野県長野市信濃町1234
                    </p>
                    <p>
                      <span className="font-bold">TEL:</span> 026-123-4567
                    </p>
                    <p>
                      <span className="font-bold">Email:</span>{" "}
                      info@shinano-shuzo.example.com
                    </p>
                    <p>
                      <span className="font-bold">営業時間:</span>{" "}
                      9:00〜17:00（月〜土）
                    </p>
                  </address>
                </div>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-none">
                  {/* ここに地図を表示 */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    地図が表示されます
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
