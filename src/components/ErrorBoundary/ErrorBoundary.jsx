import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#161827',
          color: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}>
          <div style={{
            background: '#1F233A',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '16px',
            padding: '32px 24px',
            maxWidth: '460px',
            width: '100%',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚡</div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FBBF24', margin: '0 0 8px 0' }}>
              VELOOP Rewards Progression
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', margin: '0 0 20px 0' }}>
              We encountered a temporary interface sync error. Click below to refresh your dashboard session.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/Lvl-Dashboard';
              }}
              style={{
                background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #D97706 100%)',
                color: '#161827',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Reload Dashboard
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
