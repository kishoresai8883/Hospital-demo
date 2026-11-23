import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  CallMade as CallMadeIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@mui/icons-material';
import { MAIN_MENU, NavItem, NavSubItem } from '../data/hospitalData';
import { HospitalImage } from './HospitalImage';
import { Logo } from './Logo';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenAppointmentModal: () => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenAppointmentModal,
  selectedLanguage,
  onLanguageChange,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [expandedMobileSubItem, setExpandedMobileSubItem] = useState<string | null>(null);

  const handleNavClick = (slug?: string) => {
    if (!slug) return;
    onNavigate(slug);
    setHoveredMenu(null);
    setHoveredSubMenu(null);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Row 1: Top White Bar (.tb_ie9l686) */}
      <div className="w-full bg-white px-[5%] py-[6px] border-b border-black/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 items-center gap-3">
          {/* Col 1: Logo */}
          <div className="col-span-6 md:col-span-6 flex items-center">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none cursor-pointer py-1"
              aria-label="Demo Logo Hospital Home"
            >
              <Logo variant="dark" size="md" />
            </button>
          </div>

          {/* Col 3: Book Appointment Button + Mobile Menu Trigger */}
          <div className="col-span-6 md:col-span-6 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="hidden lg:inline-flex items-center gap-2 bg-[#97e078] hover:bg-[#86d465] text-white font-poppins font-medium text-[13px] lg:text-[15px] px-4 lg:px-6 py-2 lg:py-2.5 rounded-[38px] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <span>Book Appointment</span>
              <CallMadeIcon sx={{ fontSize: 16 }} />
            </button>

            <div className="lg:hidden">
              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{ color: '#000' }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Teal Navigation Bar (.tb_37mv175, background: #4bc3c3) */}
      <div className="hidden lg:block w-full bg-[#4bc3c3] px-[3%] py-[5px]">
        <nav aria-label="Main Navigation" className="max-w-[1440px] mx-auto">
          <ul
            id="menu-main-menu"
            className="flex items-center justify-center flex-wrap gap-x-1 m-0 p-0 list-none"
          >
            {MAIN_MENU.map((item: NavItem) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isHovered = hoveredMenu === item.label;
              const isActive = item.slug && currentRoute === item.slug;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.label)}
                  onMouseLeave={() => {
                    setHoveredMenu(null);
                    setHoveredSubMenu(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (item.slug) {
                        handleNavClick(item.slug);
                      } else if (item.children && item.children[0]) {
                        handleNavClick(item.children[0].slug);
                      }
                    }}
                    className={`flex items-center px-[10px] py-[8px] font-poppins text-[14.5px] font-normal text-black hover:text-white transition-colors cursor-pointer whitespace-nowrap ${isActive ? 'font-medium underline underline-offset-4' : ''
                      }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <span
                        className={`ml-[6px] text-[10px] inline-block transition-transform duration-300 ${isHovered ? 'rotate-180' : ''
                          }`}
                      >
                        ▼
                      </span>
                    )}
                  </button>

                  {/* Dropdown Sub-menu */}
                  {hasChildren && isHovered && (
                    <ul className="absolute left-0 top-full w-[280px] bg-white shadow-xl border border-black/10 py-1.5 m-0 list-none z-50 text-left">
                      {item.children!.map((sub: NavSubItem) => {
                        const hasNested = Boolean(sub.children && sub.children.length > 0);
                        const isSubHovered = hoveredSubMenu === sub.label;

                        return (
                          <li
                            key={sub.label}
                            className="relative"
                            onMouseEnter={() => setHoveredSubMenu(sub.label)}
                            onMouseLeave={() => setHoveredSubMenu(null)}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                if (hasNested && sub.children) {
                                  handleNavClick(sub.children[0].slug);
                                } else {
                                  handleNavClick(sub.slug);
                                }
                              }}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-left font-poppins text-[13.5px] text-neutral-800 hover:bg-[#e1eddf] hover:text-black transition-colors cursor-pointer border-b border-black/5 last:border-none"
                            >
                              <span className="leading-snug pr-2">{sub.label}</span>
                              {hasNested && <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />}
                            </button>

                            {/* Nested Sub-menu (e.g., Hysteroscopy / Laparoscopy) */}
                            {hasNested && isSubHovered && (
                              <ul className="absolute left-full top-0 w-[280px] bg-white shadow-xl border border-black/10 py-1.5 m-0 list-none z-50">
                                {sub.children!.map((nested) => (
                                  <li key={nested.slug}>
                                    <button
                                      type="button"
                                      onClick={() => handleNavClick(nested.slug)}
                                      className="w-full text-left px-4 py-2.5 font-poppins text-[13.5px] text-neutral-800 hover:bg-[#e1eddf] hover:text-black transition-colors cursor-pointer border-b border-black/5 last:border-none"
                                    >
                                      {nested.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Slide-out Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: { width: 300, backgroundColor: '#ffffff', color: '#000000', p: 2.5 },
          },
        }}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
          <Logo variant="dark" size="sm" />
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </div>

        <div className="mb-3 pb-3 border-b border-neutral-200">
          <p className="font-playfair font-semibold text-base text-black m-0">
            <span className="text-xl">24/7</span> Emergency Care Available
          </p>
        </div>

        <ul className="list-none m-0 p-0 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2.5 px-2 font-poppins text-[15px] font-medium text-black hover:bg-[#e1eddf] rounded cursor-pointer"
            >
              Home
            </button>
          </li>
          {MAIN_MENU.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = expandedMobileItem === item.label;

            return (
              <li key={item.label} className="border-b border-neutral-100 last:border-none">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (hasChildren) {
                        setExpandedMobileItem(isExpanded ? null : item.label);
                      } else {
                        handleNavClick(item.slug);
                      }
                    }}
                    className="w-full flex items-center justify-between py-2.5 px-2 font-poppins text-[15px] text-black hover:bg-[#e1eddf] rounded cursor-pointer text-left"
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: 20,
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    )}
                  </button>
                </div>

                {hasChildren && (
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <ul className="list-none pl-4 pr-1 py-1 m-0 space-y-1 bg-neutral-50 rounded">
                      {item.children!.map((sub) => {
                        const hasNested = Boolean(sub.children && sub.children.length > 0);
                        const isSubExpanded = expandedMobileSubItem === sub.label;

                        return (
                          <li key={sub.label}>
                            <button
                              type="button"
                              onClick={() => {
                                if (hasNested) {
                                  setExpandedMobileSubItem(isSubExpanded ? null : sub.label);
                                } else {
                                  handleNavClick(sub.slug);
                                }
                              }}
                              className="w-full flex items-center justify-between py-2 px-2 text-left font-poppins text-[13.5px] text-neutral-700 hover:text-black cursor-pointer"
                            >
                              <span>{sub.label}</span>
                              {hasNested && (
                                <KeyboardArrowDownIcon
                                  sx={{
                                    fontSize: 18,
                                    transform: isSubExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  }}
                                />
                              )}
                            </button>

                            {hasNested && (
                              <Collapse in={isSubExpanded} timeout="auto" unmountOnExit>
                                <ul className="list-none pl-3 py-1 m-0 space-y-1 border-l-2 border-[#4bc3c3]">
                                  {sub.children!.map((nested) => (
                                    <li key={nested.slug}>
                                      <button
                                        type="button"
                                        onClick={() => handleNavClick(nested.slug)}
                                        className="w-full text-left py-1.5 px-2 font-poppins text-[13px] text-neutral-600 hover:text-black cursor-pointer"
                                      >
                                        {nested.label}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </Collapse>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </Collapse>
                )}
              </li>
            );
          })}
        </ul>
      </Drawer>
    </header>
  );
};
