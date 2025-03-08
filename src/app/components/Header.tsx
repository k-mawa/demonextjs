"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            信濃酒造
          </h1>
        </Link>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-8 h-8 text-gray-700 dark:text-gray-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            ホーム
          </Link>
          <Link
            href="#about"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            私たちについて
          </Link>
          <Link
            href="#sake"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            日本酒
          </Link>
          <Link
            href="#wine"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            ワイン
          </Link>
          <Link
            href="#tour"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            酒蔵見学
          </Link>
          <Link
            href="/contact"
            className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>

      {/* モバイルメニュー - 画面全体に表示 */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-10 flex flex-col justify-center items-center">
          <nav className="flex flex-col space-y-8 py-8 text-center">
            <Link
              href="/"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="#about"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              私たちについて
            </Link>
            <Link
              href="#sake"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              日本酒
            </Link>
            <Link
              href="#wine"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ワイン
            </Link>
            <Link
              href="#tour"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              酒蔵見学
            </Link>
            <Link
              href="/contact"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
