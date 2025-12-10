import { useState } from 'react';
import type { RefObject } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import type { SectionType } from '../../types';
import { ProfileSection } from './ProfileSection';
import { Navigation } from './Navigation';
import { SocialLinks } from './SocialLinks';
import './Sidebar.css';

interface SidebarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
  mainContentRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  educationRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
}

export const Sidebar = (props: SidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      <aside className={`sidebar ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''}`}>
        <div className="sidebar-content">
          <ProfileSection />
          <Navigation {...props} onNavigate={closeMobileMenu} />
          <SocialLinks />
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div className="sidebar-overlay" onClick={closeMobileMenu} />
      )}
    </>
  );
};
