import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface BannerProps {
  deadline: Date;
}

const Banner: React.FC<BannerProps> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      const timeDifference = deadlineDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTimeLeft('Deadline has passed!');
        setIsBannerVisible(false);
      }

      setTimeLeft(`due on ${new Date(deadline).toLocaleDateString()}`);
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 60000); // update every minute

    return () => clearInterval(timer); // cleanup interval on component unmount
  }, [deadline]);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div style={styles.banner}>
        <div style={styles.textContainer}>
            <span style={styles.text}>REMINDER: In progress application {timeLeft}!</span>
        </div>
      <button style={styles.closeButton} onClick={handleCloseBanner}>X</button>
    </div>
  );
};

Banner.propTypes = {
  deadline: PropTypes.instanceOf(Date).isRequired,
};

const styles = {
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '4px',
    height: '100px',
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '32px', 
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Banner;
