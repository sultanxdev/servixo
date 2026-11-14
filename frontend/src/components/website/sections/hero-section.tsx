"use client";

import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [pinCode, setPinCode] = useState("560103");
  const [pinStatus, setPinStatus] = useState<"available" | "unavailable" | "invalid">("available");
  const [searchedPin, setSearchedPin] = useState("560103");

  const handleCheckPin = (e?: React.FormEvent, customVal?: string) => {
    if (e) e.preventDefault();
    const val = (customVal !== undefined ? customVal : pinCode).trim();
    setSearchedPin(val);

    if (!/^\d{6}$/.test(val)) {
      setPinStatus("invalid");
      return;
    }

    if (val === "190001" || val.startsWith("19")) {
      setPinStatus("unavailable");
    } else {
      setPinStatus("available");
    }
  };

  const setPinDemo = (pin: string) => {
    setPinCode(pin);
    handleCheckPin(undefined, pin);
  };

  return (
            <section id="pincode-checker" className="relative w-full pt-4 lg:pt-6 pb-12 lg:pb-20 overflow-hidden">
              {/* Subtle architectural ambient glow */}
              <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>

              <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
                {/* ========================================================================= */}
                {/* MOBILE VIEW (Visible under lg)                                           */}
                {/* ========================================================================= */}
                <div className="flex lg:hidden flex-col space-y-5">
                  {/* Trust Badge Pill */}
                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container shadow-sm">
                    <span className="material-symbols-outlined text-[15px] text-secondary font-bold">
                      verified_user
                    </span>
                    <span className="font-label-sm text-label-sm tracking-tight font-medium">
                      Verified Pros • Fixed Visits • Zero Surcharges
                    </span>
                  </div>

                  {/* Editorial Headline & Copy */}
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-extrabold">
                      Your Home. Your Services.
                      <br />
                      <span className="text-primary">All in One Plan.</span>
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Book trusted home services, manage subscriptions, and get certified professional assistance at your convenience.
                    </p>
                  </div>

                  {/* Interactive Mobile PIN Code Checker Card */}
                  <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-md space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          pin_drop
                        </span>
                        Service Availability Checker
                      </span>
                      <span className="text-[11px] font-semibold text-secondary px-2 py-0.5 rounded-full bg-secondary-container">
                        Live Coverage
                      </span>
                    </div>

                    <form onSubmit={handleCheckPin} className="flex items-center gap-2">
                      <div className="relative flex-1 h-11">
                        <span className="absolute inset-y-0 left-3 flex items-center text-outline pointer-events-none">
                          <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          value={pinCode}
                          onChange={(e) => setPinCode(e.target.value)}
                          placeholder="560103"
                          className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md placeholder-outline focus:outline-none focus:bg-surface transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="h-11 px-5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shrink-0 shadow-sm active:scale-95 transition-transform flex items-center justify-center"
                      >
                        Check
                      </button>
                    </form>

                    {/* Quick Demo Helpers on Mobile */}
                    <div className="flex items-center gap-1 text-[11px]">
                      <span className="text-on-surface-variant">Quick demo:</span>
                      <button
                        type="button"
                        onClick={() => setPinDemo("560103")}
                        className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold"
                      >
                        Active
                      </button>
                      <button
                        type="button"
                        onClick={() => setPinDemo("190001")}
                        className="px-2 py-0.5 rounded bg-surface-container text-on-tertiary-fixed-variant font-semibold"
                      >
                        Waitlist
                      </button>
                      <button
                        type="button"
                        onClick={() => setPinDemo("5600")}
                        className="px-2 py-0.5 rounded bg-surface-container text-error font-semibold"
                      >
                        Invalid
                      </button>
                    </div>

                    {/* Active Status Pill Alert */}
                    {pinStatus === "available" && (
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-secondary-container/40 text-on-secondary-container">
                        <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <div className="flex flex-col text-left">
                          <p className="font-label-sm text-label-sm font-semibold text-on-surface">
                            Services Active in Bengaluru ({searchedPin})
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                            8 curated home services ready for booking under your active plan.
                          </p>
                        </div>
                      </div>
                    )}

                    {pinStatus === "unavailable" && (
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-tertiary-fixed/40 text-on-surface">
                        <span className="material-symbols-outlined text-[18px] text-tertiary mt-0.5 shrink-0">
                          location_off
                        </span>
                        <div className="flex flex-col text-left">
                          <p className="font-label-sm text-label-sm font-semibold text-on-surface">
                            Not Yet Operational in {searchedPin}
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                            Join our priority waitlist to get notified when service coverage extends to your sector.
                          </p>
                        </div>
                      </div>
                    )}

                    {pinStatus === "invalid" && (
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-error-container/40 text-on-surface">
                        <span className="material-symbols-outlined text-[18px] text-error mt-0.5 shrink-0">
                          warning
                        </span>
                        <div className="flex flex-col text-left">
                          <p className="font-label-sm text-label-sm font-semibold text-error">
                            Enter 6-digit Indian PIN
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                            Example: 560103, 560038, or 560001.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Editorial Mobile Hero Card with Technician Dossier */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container-low flex flex-col">
                    <div className="relative w-full h-56">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrn-AEY_GH_ft0etSdA16WH4Qh08cBc4O_3m6aBESO482HxlU4yadfOnwRWPyVN1EPBx2xrGglt_ULvX01yz7FRvXotVYk60VXraOQ18hnKR-y1HeZ6zBAYTI-KnNJHNSGTw7p1-dYmQwLIViY-pXDP5tVbvJziOP-G1pNIXNQEFt5BS_gNjGO1lgDKpMFqykixSa1ilW1FvQcK6aS5C8kFUtOfaqlSA0h9OzqUlw"
                        alt="Professional technician in crisp polo holding diagnostic toolkit in a sunlit Bengaluru apartment"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>

                      {/* Top Status Pill */}
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-md flex items-center gap-1.5 text-on-surface">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="font-label-sm text-label-sm font-bold">
                          Annual Care Plan: 4 of 6 Visits Left
                        </span>
                      </div>

                      {/* Bottom Dossier Profile */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary-container p-0.5 shrink-0 shadow">
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsR21YMp3aCrVV-E-LTKhZDJNV443wniCffunDdvIs5T4yvfajLf_LF_geWwzQuYGFG_tXj2VzWLUD2ML31N83Q8_mYZiZp04hEiB78eGX-UvmQ1ubuIdAjfsBOxFQ99DK86HQYZpsKRXBaoNjAUN_hx1MKesVV4AFEMtnNADx_wPrfLkTGyKoClRL1RHkvnRnzwBnC3Zs9A2mx6WsvDInjfNDLkyPlnN5oLNGWY"
                            alt="Rajesh Kumar - Certified technician"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-on-primary drop-shadow-sm">
                          <div className="flex items-center gap-1.5">
                            <span className="font-label-lg text-label-lg font-bold text-surface-container-lowest">
                              Rajesh Kumar
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                              verified
                            </span>
                          </div>
                          <div className="flex items-center gap-2 font-label-sm text-label-sm text-surface-container-high">
                            <span className="flex items-center gap-0.5 text-primary-fixed">
                              <span className="material-symbols-outlined text-[14px]">star</span> 4.9 (420+ jobs)
                            </span>
                            <span>•</span>
                            <span>Appliance Specialist</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Category Chips */}
                    <div className="p-3 bg-surface-container flex items-center justify-between gap-1.5 overflow-x-auto">
                      <a
                        href="#services"
                        className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm shrink-0 flex items-center gap-1 active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[15px] text-primary">
                          cleaning_services
                        </span>
                        Cleaning
                      </a>
                      <a
                        href="#services"
                        className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm shrink-0 flex items-center gap-1 active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[15px] text-tertiary">
                          plumbing
                        </span>
                        Plumbing
                      </a>
                      <a
                        href="#services"
                        className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm shrink-0 flex items-center gap-1 active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[15px] text-secondary">
                          bolt
                        </span>
                        Electrical
                      </a>
                      <a
                        href="#services"
                        className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm shrink-0 flex items-center gap-1 active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[15px] text-primary">
                          kitchen
                        </span>
                        Appliances
                      </a>
                    </div>
                  </div>

                  {/* Hero CTA Buttons */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    <a
                      href="#plans"
                      className="w-full h-12 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
                    >
                      <span>Explore Premium Plans</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                    <a
                      href="#how-it-works"
                      className="w-full h-11 rounded-xl bg-surface-container-high text-on-surface-variant font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:text-on-surface transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">play_circle</span>
                      <span>How Servixo Works</span>
                    </a>
                  </div>
                </div>

                      {/* ========================================================================= */}
                      {/* DESKTOP VIEW (Visible on lg and up)                                      */}
                      {/* ========================================================================= */}
                      <div className="hidden lg:block">
                        {/* Top Trust Strip */}
                        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm tracking-wide uppercase">
                            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                              verified
                            </span>
                            Verified Local Professionals
                          </span>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[15px]">event_repeat</span>
                            Fixed Included Visits
                          </span>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[15px]">receipt_long</span>
                            Transparent Booking
                          </span>
                        </div>

                        {/* Main Asymmetric Grid */}
                        <div className="grid grid-cols-12 gap-gutter items-center">
                          {/* Left Column: Copy & Checker Component */}
                          <div className="col-span-6 flex flex-col">
                            <h1 className="font-display text-display text-on-surface tracking-tight mb-space-sm">
                              Your Home. Your Services.
                              <br />
                              <span className="text-primary-container relative inline-block">
                                All in One Plan.
                                <svg
                                  className="absolute -bottom-1.5 left-0 w-full h-2 text-primary-fixed-dim pointer-events-none"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 200 8"
                                >
                                  <path
                                    d="M0 6C50 1 150 1 200 6"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                  ></path>
                                </svg>
                              </span>
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
                              Book trusted home services, manage your subscriptions and get professional assistance at your convenience with Servixo.
                            </p>

                            {/* Interactive PIN Code Availability Checker */}
                            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_rgba(32,41,35,0.04),0_6px_16px_-4px_rgba(32,41,35,0.03)] mb-space-md">
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <label
                                  htmlFor="pinCodeInputDesktop"
                                  className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold"
                                >
                                  <span className="material-symbols-outlined text-[18px] text-primary">
                                    pin_drop
                                  </span>
                                  Check Service In Your Locality
                                </label>
                                {/* Interactive State Quick Demo Switcher */}
                                <div className="flex items-center gap-1">
                                  <button
                                    type="button"
                                    onClick={() => setPinDemo("560103")}
                                    className={`font-label-sm text-label-sm px-2 py-0.5 rounded transition-colors ${pinStatus === "available"
                                        ? "bg-primary text-on-primary font-bold"
                                        : "bg-surface-container hover:bg-surface-container-high text-primary"
                                      }`}
                                  >
                                    Active
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setPinDemo("190001")}
                                    className={`font-label-sm text-label-sm px-2 py-0.5 rounded transition-colors ${pinStatus === "unavailable"
                                        ? "bg-tertiary-container text-on-tertiary font-bold"
                                        : "bg-surface-container hover:bg-surface-container-high text-on-tertiary-fixed-variant"
                                      }`}
                                  >
                                    Waitlist
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setPinDemo("5600")}
                                    className={`font-label-sm text-label-sm px-2 py-0.5 rounded transition-colors ${pinStatus === "invalid"
                                        ? "bg-error text-on-error font-bold"
                                        : "bg-surface-container hover:bg-surface-container-high text-error"
                                      }`}
                                  >
                                    Invalid
                                  </button>
                                </div>
                              </div>

                              <form onSubmit={handleCheckPin} className="flex flex-row gap-space-sm mb-space-sm">
                                <div className="relative flex-1">
                                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                  </span>
                                  <input
                                    id="pinCodeInputDesktop"
                                    type="text"
                                    maxLength={6}
                                    value={pinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                    placeholder="Enter 6-digit PIN (e.g. 560103, 400050)"
                                    className="w-full h-[46px] pl-10 pr-4 bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="h-[46px] px-space-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 shadow-[0_1px_3px_rgba(32,41,35,0.08),0_6px_16px_-4px_rgba(32,41,35,0.06)] active:scale-[0.99] transition-all shrink-0"
                                >
                                  <span>Check Availability</span>
                                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                              </form>

                              {/* Dynamic State Result Panels */}
                              <div>
                                {pinStatus === "available" && (
                                  <div className="flex items-start gap-2.5 p-space-sm rounded-lg bg-surface-container-low text-on-surface">
                                    <span
                                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                                      style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                      check_circle
                                    </span>
                                    <div className="flex-1">
                                      <span className="font-label-md text-label-md text-primary font-bold block">
                                        Services Active in Bengaluru East ({searchedPin})
                                      </span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        8 specialized home services ready for booking under your active plan.
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {pinStatus === "unavailable" && (
                                  <div className="flex items-start gap-2.5 p-space-sm rounded-lg bg-tertiary-fixed/30 text-on-surface">
                                    <span className="material-symbols-outlined text-tertiary-container text-[20px] shrink-0 mt-0.5">
                                      location_off
                                    </span>
                                    <div className="flex-1">
                                      <span className="font-label-md text-label-md text-on-tertiary-fixed-variant font-bold block">
                                        Servixo is not yet operational in {searchedPin}
                                      </span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        Join our priority waitlist to get notified when service coverage extends to your sector.
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {pinStatus === "invalid" && (
                                  <div className="flex items-start gap-2.5 p-space-sm rounded-lg bg-error-container/40 text-on-surface">
                                    <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">
                                      warning
                                    </span>
                                    <div className="flex-1">
                                      <span className="font-label-md text-label-md text-error font-bold block">
                                        Invalid Postal Code
                                      </span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        Please enter a valid 6-digit Indian postal code to determine operational availability.
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <p className="font-body-sm text-body-sm text-secondary mt-3 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[15px]">info</span>
                                Service availability is location-dependent. Approved professionals are allocated per booking.
                              </p>
                            </div>

                            {/* Secondary Actions */}
                            <div className="flex flex-wrap items-center gap-space-md">
                              <a
                                href="#plans"
                                className="inline-flex items-center justify-center font-label-lg text-label-lg text-on-primary bg-primary-container hover:bg-primary px-space-lg py-space-sm rounded-lg shadow-[0_1px_3px_rgba(32,41,35,0.08),0_6px_16px_-4px_rgba(32,41,35,0.06)] active:scale-[0.99] transition-all"
                              >
                                Explore Premium Plans
                              </a>
                              <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center font-label-lg text-label-lg text-primary bg-surface-container-low hover:bg-surface-container px-space-lg py-space-sm rounded-lg transition-all"
                              >
                                <span>How It Works</span>
                                <span className="material-symbols-outlined text-[18px] ml-1">arrow_downward</span>
                              </a>
                            </div>
                          </div>

                          {/* Right Column: Hero Visual with Real Image & Floating Glass Badges */}
                          <div className="col-span-6 relative">
                            <div className="relative mx-auto max-w-[520px] rounded-3xl overflow-hidden shadow-[0_16px_36px_-8px_rgba(32,41,35,0.12),0_0_0_1px_rgba(32,41,35,0.05)] bg-surface-container">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBghvV0envH9GmsD8acIqFriXf0kEs8Sd7gF1SrDMRzZsmK1YMLlaeiSAdGuUXrz3ay_6doAkwQVMUa2spanbzLiggJJWdWlZnBv6b2zDEv_t56_Ns-DOEy5Be5dsxdy_rT7996iVR7WVgyWgrHRJS5sjSqz4nKhPOmP_fsMHKXjQAycFGnsEhqpFB7GwqXeTFB387_th3YvZq63ahOgHXt12jXljMv7lZ1b0k6yGI"
                                alt="Professional Servixo technician in clean branded polo holding multimeter and diagnostics kit in a modern living room"
                                className="w-full h-[520px] object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>

                              {/* Floating Pill Category Icons along Top edge */}
                              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                                <a
                                  href="#services"
                                  className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm pointer-events-auto hover:bg-surface-container transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px] text-primary">
                                    cleaning_services
                                  </span>
                                  <span className="font-label-sm text-label-sm text-on-surface">Cleaning</span>
                                </a>
                                <a
                                  href="#services"
                                  className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm pointer-events-auto hover:bg-surface-container transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px] text-primary">
                                    plumbing
                                  </span>
                                  <span className="font-label-sm text-label-sm text-on-surface">Plumbing</span>
                                </a>
                                <a
                                  href="#services"
                                  className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm pointer-events-auto hover:bg-surface-container transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                                  <span className="font-label-sm text-label-sm text-on-surface">Electrical</span>
                                </a>
                                <a
                                  href="#services"
                                  className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm pointer-events-auto hover:bg-surface-container transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px] text-primary">hvac</span>
                                  <span className="font-label-sm text-label-sm text-on-surface">Appliances</span>
                                </a>
                              </div>

                              {/* Floating Glassmorphic Badge 1: Plan Status with Progress Ring */}
                              <div className="absolute bottom-24 left-4 max-w-[270px] bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-xl shadow-[0_12px_24px_-6px_rgba(32,41,35,0.12)]">
                                <div className="flex items-center gap-3">
                                  <div className="relative w-11 h-11 shrink-0">
                                    <svg className="w-11 h-11 transform -rotate-90" viewBox="0 0 36 36">
                                      <circle
                                        className="text-surface-container-high"
                                        cx="18"
                                        cy="18"
                                        fill="none"
                                        r="14"
                                        stroke="currentColor"
                                        strokeWidth="3.5"
                                      ></circle>
                                      <circle
                                        className="text-primary-container"
                                        cx="18"
                                        cy="18"
                                        fill="none"
                                        r="14"
                                        stroke="currentColor"
                                        strokeDasharray="88"
                                        strokeDashoffset="30"
                                        strokeLinecap="round"
                                        strokeWidth="3.5"
                                      ></circle>
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center font-label-sm text-label-sm font-bold text-primary">
                                      4/6
                                    </span>
                                  </div>
                                  <div>
                                    <span className="font-label-md text-label-md text-on-surface block leading-tight font-bold">
                                      Annual Care Plan
                                    </span>
                                    <span className="font-body-sm text-body-sm text-secondary">
                                      4 of 6 Visits Remaining
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Floating Glassmorphic Badge 2: Assigned Professional Profile */}
                              <div className="absolute bottom-4 right-4 max-w-[280px] bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-xl shadow-[0_12px_24px_-6px_rgba(32,41,35,0.12)]">
                                <div className="flex items-center gap-3">
                                  <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold">
                                    <span>R</span>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary-fixed flex items-center justify-center">
                                      <span
                                        className="material-symbols-outlined text-[11px] text-on-primary-fixed"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                      >
                                        check
                                      </span>
                                    </span>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1">
                                      <span className="font-label-md text-label-md text-on-surface font-bold">
                                        Rajesh Kumar
                                      </span>
                                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-semibold">
                                        4.9 ★
                                      </span>
                                    </div>
                                    <span className="font-body-sm text-body-sm text-secondary block leading-tight">
                                      Approved Appliance Specialist
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </section>
                );
}
