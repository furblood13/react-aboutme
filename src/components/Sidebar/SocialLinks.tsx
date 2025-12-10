import { HiGlobe } from 'react-icons/hi';
import { socialLinks } from '../../data/constants';

export const SocialLinks = () => {
  return (
    <div className="social-section">
      <h3 className="social-title">Connect</h3>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.name}
          >
            <img src={social.icon} alt={social.name} className="social-icon" />
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
      <div className="store-link">
        <a
          href="https://apps.apple.com/us/developer/furkan-bugra-karci/id1786455388"
          target="_blank"
          rel="noopener noreferrer"
          className="store-link-button"
        >
          <HiGlobe className="store-icon" />
          <span>App Store Page</span>
        </a>
      </div>
    </div>
  );
};
