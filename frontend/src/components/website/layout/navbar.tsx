"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPincode, setCurrentPincode] = useState("Bengaluru • 560103");
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP HEADER (DESKTOP + MOBILE)                                          */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        {/* DESKTOP HEADER (lg and up) */}
        <div className="hidden lg:flex h-20 max-w-[1280px] mx-auto px-gutter items-center justify-between gap-gutter">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1">
              <img
                src="/logo/logo.png"
                alt="Servixo Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
              Servixo
            </span>
          </Link>

          <nav
            className="flex items-center gap-space-md"
            data-active-classes="bg-surface-container-high text-primary font-label-lg rounded-full px-space-md py-space-xs shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          >
            <Link
              href="/"
              className="bg-surface-container-high text-primary font-label-lg text-label-lg rounded-full px-space-md py-space-xs shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-space-xs rounded-full transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="#plans"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-space-xs rounded-full transition-all duration-200"
            >
              Premium Plans
            </Link>
            <Link
              href="#how-it-works"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-space-xs rounded-full transition-all duration-200"
            >
              How It Works
            </Link>
            <Link
              href="#faqs"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-space-xs rounded-full transition-all duration-200"
            >
              FAQs
            </Link>
          </nav>

          <div className="flex items-center gap-space-md">
            <Link
              href="/login/"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/become-professional/"
              className="inline-flex items-center justify-center font-label-md text-label-md text-primary-container bg-surface-container-low hover:bg-surface-container hover:text-primary px-space-md py-space-sm rounded-full transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
            >
              Become a Professional
            </Link>
            <a
              href="#pincode-checker"
              className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary px-space-lg py-space-sm rounded-lg shadow-[0_1px_3px_rgba(32,41,35,0.08),0_6px_16px_-4px_rgba(32,41,35,0.06)] active:scale-[0.99] transition-all duration-200 gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span>Check Availability</span>
            </a>
            <Link
              href="/customer/dashboard/"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm text-on-primary hover:opacity-95 transition-opacity"
              title="User Account"
            >
              <span className="material-symbols-outlined text-on-primary text-[20px]">
                person
              </span>
            </Link>
          </div>
        </div>

        {/* MOBILE HEADER (under lg) */}
        <div className="flex lg:hidden h-16 sm:h-20 px-4 items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:scale-95 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1">
                <img
                  src="/logo/logo.png"
                  alt="Servixo Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                Servixo
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#pincode-checker"
              className="h-9 px-3 rounded-full bg-surface-container flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">
                location_on
              </span>
              <span className="font-label-sm text-label-sm truncate max-w-[120px]">
                {currentPincode}
              </span>
              <span className="material-symbols-outlined text-[14px]">
                expand_more
              </span>
            </a>
            <Link
              href="/login/"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm text-on-primary"
            >
              <span className="material-symbols-outlined text-on-primary text-[20px]">
                person
              </span>
            </Link>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-outline-variant/50 px-4 py-5 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">home</span>
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">handyman</span>
                Services Catalog
              </Link>
              <Link
                href="#plans"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                Premium Plans
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">route</span>
                How It Works
              </Link>
              <Link
                href="#faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">quiz</span>
                FAQs
              </Link>
              <Link
                href="/become-professional/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-secondary font-label-md text-label-md font-semibold hover:bg-secondary-container/40 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">badge</span>
                Become a Professional
              </Link>
            </div>

            <div className="pt-2 border-t border-outline-variant/50 flex flex-col gap-2">
              <Link
                href="/login/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-10 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center"
              >
                Sign In
              </Link>
              <Link
                href="/signup/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-10 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. MOBILE BOTTOM NAVIGATION BAR (FIXED ON MOBILE SCREENS)                  */}
      {/* ========================================================================= */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl border-t border-outline-variant/40 shadow-[0_-1px_12px_rgba(0,0,0,0.06)]"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="flex justify-around items-center h-16 px-2">
          <Link
            href="/"
            onClick={() => setActiveTab("explore")}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-lg transition-colors active:scale-95 ${
              activeTab === "explore"
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={activeTab === "explore" ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              home
            </span>
            <span className="font-label-sm text-[11px]">Explore</span>
          </Link>

          <Link
            href="#services"
            onClick={() => setActiveTab("services")}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-lg transition-colors active:scale-95 ${
              activeTab === "services"
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={activeTab === "services" ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              grid_view
            </span>
            <span className="font-label-sm text-[11px]">Services</span>
          </Link>

          <Link
            href="#plans"
            onClick={() => setActiveTab("plans")}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-lg transition-colors active:scale-95 ${
              activeTab === "plans"
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={activeTab === "plans" ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              verified
            </span>
            <span className="font-label-sm text-[11px]">Plans</span>
          </Link>

          <Link
            href="/customer/bookings/"
            onClick={() => setActiveTab("bookings")}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-lg transition-colors active:scale-95 ${
              activeTab === "bookings"
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={activeTab === "bookings" ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              calendar_month
            </span>
            <span className="font-label-sm text-[11px]">Bookings</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
