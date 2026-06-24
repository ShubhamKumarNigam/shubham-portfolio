"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  Home, User, FlaskConical, BookOpen, Database, FolderOpen, GraduationCap,
  Mic, Award, BookOpenCheck, Layers, Wrench, FolderGit2
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { BrandMark } from "./BrandMark";

interface NavChild {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about/", icon: User },
  {
    label: "Research",
    href: "",
    icon: FlaskConical,
    children: [
      { label: "Research Areas", href: "/research/", icon: Layers },
      { label: "Publications", href: "/publications/", icon: BookOpen },
      { label: "Datasets & Models", href: "/datasets-models/", icon: Database },
    ],
  },
  {
    label: "Projects",
    href: "",
    icon: FolderOpen,
    children: [
      { label: "Completed Projects", href: "/projects/", icon: FolderGit2 },
      { label: "Working Projects", href: "/working-projects/", icon: Wrench },
    ],
  },
  {
    label: "Academia",
    href: "",
    icon: GraduationCap,
    children: [
      { label: "Invited Talks", href: "/talks/", icon: Mic },
      { label: "Achievements", href: "/achievements/", icon: Award },
      { label: "Teaching", href: "/teaching/", icon: BookOpenCheck },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeLink = "text-ink dark:text-ink-dark";
  const inactiveLink = "text-ink2 dark:text-ink2-dark hover:text-ink dark:hover:text-ink-dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 dark:bg-paper-dark/85 backdrop-blur border-b border-hairline dark:border-hairline-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandMark />

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded ${
                      item.children.some((c) => isActive(c.href)) ? activeLink : inactiveLink
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded relative ${
                      isActive(item.href) ? activeLink : inactiveLink
                    }`}
                  >
                    {isActive(item.href) && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-ink dark:bg-ink-dark rounded-full" />
                    )}
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark shadow-lg py-1"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                            isActive(child.href)
                              ? "text-accent dark:text-accent-link bg-accent-tint/50 dark:bg-accent-tint/10"
                              : "text-ink2 dark:text-ink2-dark hover:bg-paper dark:hover:bg-paper-dark"
                          }`}
                        >
                          <child.icon size={14} />
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              href="/contact/"
              className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-ink2 dark:text-ink2-dark hover:text-ink dark:hover:text-ink-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
            >
              Contact
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-ink dark:text-ink-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-paper dark:bg-paper-dark md:hidden"
          >
            <div className="px-6 py-6 space-y-1 overflow-y-auto h-full">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <div className="flex items-center gap-2 px-3 py-3 text-lg font-heading text-ink dark:text-ink-dark">
                        {item.label}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center gap-2 px-6 py-2.5 text-base font-heading border-l-2 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                            isActive(child.href)
                              ? "text-accent dark:text-accent-link border-accent"
                              : "text-ink2 dark:text-ink2-dark border-hairline dark:border-hairline-dark"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-3 text-lg font-heading border-l-2 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                        isActive(item.href)
                          ? "text-accent dark:text-accent-link border-accent"
                          : "text-ink dark:text-ink-dark border-hairline dark:border-hairline-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-3 py-3 text-lg font-heading text-ink dark:text-ink-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
