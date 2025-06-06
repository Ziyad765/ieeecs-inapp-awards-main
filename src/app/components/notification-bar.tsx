'use client';

import { useState } from 'react';
import { X, Bell } from 'lucide-react';

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={styles.notificationBar} data-notification-bar>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <Bell size={20} color="#CC232E" />
        </div>
        <div style={styles.textContainer}>
          <span style={styles.text}>
            🎉 <strong>Registration Now Open!</strong> Submit your abstracts by June 15th, 2025. 
            <span style={styles.highlight}> Cash prizes for all finalists!</span>
          </span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          style={styles.closeButton}
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  notificationBar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#FFF3CD',
    borderBottom: '2px solid #CC232E',
    zIndex: 1001,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 30px',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative' as const,
  },
  iconContainer: {
    marginRight: '12px',
    flexShrink: 0,
  },
  textContainer: {
    flex: 1,
    textAlign: 'center' as const,
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.4',
  },
  highlight: {
    color: '#CC232E',
    fontWeight: '700',
  },
  closeButton: {
    position: 'absolute' as const,
    right: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    color: '#666',
    transition: 'all 0.2s ease',
  },
};
