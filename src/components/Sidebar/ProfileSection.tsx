import { HiLocationMarker, HiMail, HiTerminal, HiGlobe } from 'react-icons/hi';
import furkanImg from '../../assets/furkan.jpeg';

export const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src={furkanImg} alt="Furkan" className="profile-image" />
      <h1 className="profile-name">Furkan Buğra Karcı</h1>
      <p className="profile-title">Mobile Developer</p>
      <div className="contact-info">
        <div className="contact-item">
          <HiLocationMarker className="contact-icon" />
          <span>Ankara</span>
        </div>
        <a href="mailto:furkankarci80@outlook.com" className="contact-item">
          <HiMail className="contact-icon" />
          <span>furkankarci80@outlook.com</span>
        </a>
        <a href="https://github.com/furblood13" target="_blank" rel="noopener noreferrer" className="contact-item">
          <HiTerminal className="contact-icon" />
          <span>github.com/furblood13</span>
        </a>
        <a href="https://apps.apple.com/us/developer/furkan-bugra-karci/id1786455388" target="_blank" rel="noopener noreferrer" className="contact-item">
          <HiGlobe className="contact-icon" />
          <span>App Store Page</span>
        </a>
      </div>
    </div>
  );
};
