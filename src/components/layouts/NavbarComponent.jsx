import { GraduationCap, Search, Sun } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">EduPlatform</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                to="/courses"
                className="text-sm font-medium hover:text-primary"
              >
                Courses
              </Link>
              <Link
                to="/category"
                className="text-sm font-medium hover:text-primary"
              >
                Category
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-primary"
              >
                About Us
              </Link>
              <Link
                to="/learning"
                className="text-sm font-medium hover:text-primary"
              >
                My Learning
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-8 bg-background"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Sun className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="default" asChild className="hidden md:flex">
              <Link href="/login">Login/Register</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/courses"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary"
              >
                Courses
              </Link>
              <Link
                href="/category"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary"
              >
                Category
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/learning"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary"
              >
                My Learning
              </Link>
            </div>
            <div className="px-4 py-3">
              <Button variant="default" className="w-full" asChild>
                <Link href="/login">Login/Register</Link>
              </Button>
            </div>
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full pl-8 bg-background"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
