import { Navbar } from "@/components/website/layout/navbar";
import { Footer } from "@/components/website/layout/footer";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-1 w-full pt-16 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
