"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP HEADER (DESKTOP + MOBILE)                                          */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        {/* DESKTOP HEADER (lg and up) - Clean 3-section layout */}
        <div className="hidden lg:flex h-20 max-w-[1280px] mx-auto px-6 items-center justify-between gap-6">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1 group-hover:border-primary/40 transition-colors">
              <img
                src={siteConfig.brand.logoUrl}
                alt={`${siteConfig.brand.name} Logo`}
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              {siteConfig.brand.name}
            </span>
          </Link>

          {/* Primary Navigation - Centered Pill Group (Home, Services, Premium Plans, How It Works) */}
          <nav
            className="flex items-center gap-1.5 bg-surface-container-low/60 p-1.5 rounded-full border border-outline-variant/20"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.links.map((link, idx) => {
              const isFirst = idx === 0;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-md text-label-md px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isFirst
                      ? "bg-surface-container-high text-primary font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={siteConfig.navigation.loginHref}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-2 py-1.5 transition-colors font-medium"
            >
              Login
            </Link>

            <Link
              href={siteConfig.navigation.partnerHref}
              className="inline-flex items-center justify-center font-label-md text-label-md text-primary bg-surface-container-low hover:bg-surface-container px-3.5 py-1.5 rounded-full border border-outline-variant/30 transition-all font-medium"
            >
              Become a Professional
            </Link>

            <a
              href={siteConfig.navigation.checkAvailabilityHref}
              className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg shadow-sm active:scale-[0.99] transition-all font-medium gap-1.5"
            >
              <span className="material-symbols-outlined text-[17px]">near_me</span>
              <span>Check Availability</span>
            </a>

            <Link
              href={siteConfig.navigation.dashboardHref}
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm text-on-primary hover:opacity-90 transition-opacity"
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
          <div className="flex items-center gap-2">
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
              <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-0.5">
                <img
                  src={siteConfig.brand.logoUrl}
                  alt={`${siteConfig.brand.name} Logo`}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                {siteConfig.brand.name}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.navigation.checkAvailabilityHref}
              className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-full bg-surface-container flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-secondary">
                location_on
              </span>
              <span className="font-label-sm text-[12px] truncate max-w-[110px]">
                {siteConfig.brand.defaultCity} • {siteConfig.brand.defaultPincode}
              </span>
              <span className="material-symbols-outlined text-[13px]">
                expand_more
              </span>
            </a>
            <Link
              href={siteConfig.navigation.dashboardHref}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm text-on-primary"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px] sm:text-[20px]">
                person
              </span>
            </Link>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface/98 backdrop-blur-xl border-t border-outline-variant/40 px-4 py-5 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {siteConfig.navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2.5"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    {link.href === "/" ? "home" : link.href.includes("services") ? "handyman" : link.href.includes("plans") ? "verified" : "route"}
                  </span>
                  {link.label}
                </Link>
              ))}
              <Link
                href="#faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">quiz</span>
                FAQs
              </Link>
              <Link
                href={siteConfig.navigation.partnerHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-secondary font-label-md text-label-md font-semibold hover:bg-secondary-container/40 flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-[18px]">badge</span>
                Become a Professional
              </Link>
            </div>

            <div className="pt-3 border-t border-outline-variant/40 flex flex-col gap-2">
              <Link
                href={siteConfig.navigation.loginHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-10 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center"
              >
                Sign In
              </Link>
              <a
                href={siteConfig.navigation.checkAvailabilityHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-10 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center shadow-sm"
              >
                Check Availability
              </a>
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
            href={siteConfig.navigation.dashboardHref}
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
