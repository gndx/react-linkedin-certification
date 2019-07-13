import React from 'react';
import PropTypes from 'prop-types';

const fileButton = 'https://download.linkedin.com/desktop/add2profile/buttons/';
const profileAdd = 'https://www.linkedin.com/profile/add?startTask=';

const styles = {
  width: '120px',
  height: '24px',
};

const LinkedInCertificate = ({ lang, certificationName }) => (
  <a
    href={`${profileAdd}${certificationName}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      src={`${fileButton}${lang}.png`}
      alt="LinkedIn Add to Profile button"
      style={styles}
    />
  </a>
);

LinkedInCertificate.defaultProps = {
  lang: 'en_US',
  certificationName: '',
};

LinkedInCertificate.propTypes = {
  lang: PropTypes.string,
  certificationName: PropTypes.string,
};

export default LinkedInCertificate;
