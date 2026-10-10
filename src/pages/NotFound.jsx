import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <main className="career-page" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      minHeight: '80vh',
      padding: '120px 20px'
    }}>
      <div className="section-container" style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <Logo size="large" showTagline={false} />
        </div>
        
        <div className="card-modern" style={{ padding: '60px 40px' }}>
          <Compass size={64} style={{ color: 'var(--primary-orange)', margin: '0 auto 24px' }} />
          <h1 className="section-title" style={{ fontSize: '4rem', marginBottom: '8px' }}>404</h1>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', marginBottom: '16px', fontWeight: '700' }}>Page Not Found</h2>
          <p className="section-description" style={{ margin: '0 auto 40px', maxWidth: '400px' }}>
            The architecture you are looking for doesn't exist or has been relocated.
          </p>
          
          <Link to="/" className="btn btn-primary btn-lg">
            <ArrowLeft size={20} /> <span style={{ marginLeft: '8px' }}>Return to Systems</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
