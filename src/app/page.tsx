import './page.css';
import { Award, Users, Building2, Trophy, Calendar, Phone, Mail } from 'lucide-react';
import ImageSlider from './components/image-slider';
export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.logoRow} className="logoRow">
            <div style={styles.logoContainer} className="logoContainer">
              <img src="/inapp-logo1.png" alt="InApp Logo" style={styles.inappLogo} className="inapp-logo"/>
            </div>
            <div style={styles.logoContainer}>
              <img src="/logo.png" alt="IEEE CS Logo" style={styles.ieeecsLogo} className="ieeecslogo"/>
            </div>
         </div>

          {/* <img src="/heading.png" alt="Heading Text" style={styles.headingImage} /> */}
       
        <h1 style={styles.heading} className="responsiveHeading">InApp - IEEE CS Student Project Awards</h1>
        <p style={styles.subheading} className="responsiveSubheading">Inspiring New Solutions, Propelling Innovation, Realizing Excellence</p>
       
        <a
          href="https://your-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Apply Now
        </a>
      </section>
      
    <section style={styles.aboutSection} id="about">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>About</div>
            <h2 style={styles.sectionTitle}>Empowering Innovation Through Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Discover the partnership that's shaping the future of technology education and innovation
            </p>
          </div>

          <ImageSlider />

          <div style={styles.aboutCardsGrid} className="about-cards-grid">
            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Award size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>IEEE CS - InApp Awards</h3>
                <p style={styles.aboutCardText}>
                  The objective behind the establishment of IEEE CS-InApp Awards is to provide a challenging and creative ground for students to showcase their skills in software development.
                </p>
                <p style={styles.aboutCardText}>
                  For the 14th edition, we invite students internationally to submit their projects for evaluation by industry pioneers. This prestigious competition has been recognizing outstanding student innovations for over a decade.
                </p>
              </div>
            </div>

            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Users size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>IEEE Computer Society</h3>
                <p style={styles.aboutCardText}>
                  The IEEE Computer Society Kerala Chapter is a professional organization promoting the advancement of computer science and engineering in Kerala and beyond.
                </p>
                <p style={styles.aboutCardText}>
                  We organize technical talks, workshops, seminars, and conferences while supporting students through chapters, competitions, and scholarships. Our mission is to foster innovation and excellence in computing education and research.
                </p>
              </div>
            </div>

            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Building2 size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>InApp</h3>
                <p style={styles.aboutCardText}>
                  Founded in 2000, InApp is a technology services company committed to excellence with a passionate team focused on delivering value through innovative solutions.
                </p>
                <p style={styles.aboutCardText}>
                  With offices in USA, India, Japan and a 200+ strong team, InApp serves clients ranging from Fortune 500 companies to SMBs. We specialize in digital transformation, cloud solutions, and cutting-edge software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" style={styles.historySection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>History</div>
            <h2 style={styles.sectionTitle}>Legacy of Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Over a decade of recognizing and celebrating student innovation in technology
            </p>
          </div>

          <div style={styles.historyContent}>
            <div style={styles.historyStats}>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>14</h3>
                <p style={styles.statLabel}>Years of Awards</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>500+</h3>
                <p style={styles.statLabel}>Projects Submitted</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>100+</h3>
                <p style={styles.statLabel}>Winners Recognized</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>50+</h3>
                <p style={styles.statLabel}>Institutions Participated</p>
              </div>
            </div>

            <div style={styles.historyText}>
              <p style={styles.historyParagraph}>
                The IEEE CS-InApp Awards began as a vision to create a platform where student innovation could flourish and be recognized.
                What started as a regional competition has grown into an internationally recognized program that attracts the brightest minds
                from universities worldwide.
              </p>
              <p style={styles.historyParagraph}>
                Each year, we witness groundbreaking projects that push the boundaries of technology, from AI-powered solutions to
                sustainable computing innovations. Our alumni have gone on to establish successful startups, join leading tech companies,
                and continue making significant contributions to the field of computer science.
              </p>
              <div style={styles.historyLink}>
                <a href="#" style={styles.linkButton}>
                  View Previous Year Winners →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section id="awards" style={styles.awardsSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Awards</div>
            <h2 style={styles.sectionTitle}>Competition Details & Guidelines</h2>
            <p style={styles.sectionSubtitle}>
              Everything you need to know about participating in the IEEE CS InApp Awards
            </p>
          </div>

          <div style={styles.awardsGrid} className="awards-grid">
            {/* Award Rules Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <Trophy size={24} color="#CC232E" />
                <h3 style={styles.awardsCardTitle}>Award Rules</h3>
              </div>
              <div style={styles.awardsCardContent}>
                <ol style={styles.rulesList}>
                  <li>There is no fee for participation.</li>
                  <li>Open to all B.E/B.Tech students from affiliated colleges/Universities worldwide.</li>
                  <li>Teams can have up to five members from the same Institution with a faculty guide.</li>
                  <li>Submit a two-page abstract in the specified format.</li>
                  <li>Project must be original work.</li>
                  <li>Submit certified abstract online.</li>
                  <li>Two-stage expert evaluation process.</li>
                  <li>Winners selected for second round via email notification.</li>
                  <li>Second round evaluation through video conferencing.</li>
                  <li>Final demonstration before judging panel via video conferencing.</li>
                  <li>Evaluation based on Innovativeness, Feasibility, and Relevance.</li>
                  <li>Award evaluation committee decisions are final.</li>
                </ol>
              </div>
            </div>

            {/* Prizes Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <Award size={24} color="#CC232E" />
                <h3 style={styles.awardsCardTitle}>Prizes</h3>
              </div>
              <div style={styles.awardsCardContent}>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>🥇</div>
                  <div>
                    <h4 style={styles.prizeTitle}>First Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹50,000</p>
                  </div>
                </div>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>🥈</div>
                  <div>
                    <h4 style={styles.prizeTitle}>Consolation Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹25,000</p>
                  </div>
                </div>
                <div style={styles.bonusCard}>
                  <p style={styles.bonusText}>
                    Cash Prizes for all Finalists
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div style={styles.timelineCard} className="timeline-card">
            <div style={styles.timelineHeader}>
              <Calendar size={24} color="#CC232E" />
              <h3 style={styles.timelineTitle}>Important Dates</h3>
            </div>
            <div style={styles.timelineContent}>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>Call for Abstracts</h4>
                  <p style={styles.timelineDate}>6th June, 2025</p>
                </div>
              </div>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>Submission Deadline</h4>
                  <p style={styles.timelineDate}>15th June, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Contact</div>
            <h2 style={styles.sectionTitle}>Get in Touch</h2>
            <p style={styles.sectionSubtitle}>
              Have questions? Our team is here to help you succeed
            </p>
          </div>

          <div style={styles.contactGrid} className="contact-grid">
            <div style={styles.contactCard} className="contact-card">
              <div style={styles.contactCardHeader}>
                <div style={styles.contactAvatar}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactName}>Contact Team</h3>
                  <p style={styles.contactRole}>Awards Team</p>
                </div>
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactItem}>
                  <Mail size={18} color="#CC232E" />
                  <a href="mailto:awards@inapp.com" style={styles.contactLink}>
                    awards@inapp.com
                  </a>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 86061 64747</span>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 73560 47629</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>©️2025 InApp - IEEE CS Student Project Awards. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

const styles = {
  container: {
    paddingTop: '0px',
  },
  hero: {
    height: '100vh',
    backgroundImage: 'url(/bg1.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center' as const,
    padding: '0 20px',
  },

    logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  } as React.CSSProperties,
  inappLogo: {
    maxWidth: '120%',
    maxHeight: '120%',
    objectFit: 'contain',
  } as React.CSSProperties,
  ieeecsLogo: {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
  } as React.CSSProperties,
  
  logoContainer: {
  width: '300px',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 20px',
},
  logoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '-30px',
  },
  heading: {
    fontFamily: 'Nexa',
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    color: '#ffffff',
    textTransform: 'uppercase' as React.CSSProperties['textTransform'],

  },
  subheading: {
    fontFamily: 'Rothek',
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#ffffff',
    fontSize: '1.4rem',
    marginBottom: '20px',
  },
    headingImage: {
    width: '100%', // adjust as needed
    maxWidth: '1000px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },

 sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '4rem',
  },
  sectionBadge: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    fontSize: '1.4rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  // About Section
  aboutSection: {
    padding: '8rem 0',
    backgroundColor: '#f8f9fa',
  },

  // History Section
  historySection: {
    padding: '8rem 0',
    backgroundColor: 'white',
  },
  historyContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginTop: '3rem',
  },
  historyStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  statCard: {
    textAlign: 'center' as const,
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    border: '2px solid #CC232E',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#CC232E',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666',
    margin: 0,
    fontWeight: '600',
  },
  historyText: {
    paddingLeft: '2rem',
  },
  historyParagraph: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  historyLink: {
    marginTop: '2rem',
  },
  linkButton: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
  },
  aboutCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  aboutCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  aboutCardIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#CC232E',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    position: 'relative' as const,
  },
  aboutCardContent: {
    position: 'relative' as const,
    zIndex: 2,
  },
  aboutCardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1.2rem',
  },
  aboutCardText: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '1.2rem',
  },
  // Awards Section
  awardsSection: {
    padding: '8rem 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  },
  awardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  awardsCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  awardsCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  awardsCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  awardsCardContent: {
    color: '#666',
  },
  rulesList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
    fontSize: '1rem',
  },
  prizeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
  },
  prizeIcon: {
    fontSize: '2rem',
  },
  prizeTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  prizeAmount: {
    fontSize: '1rem',
    color: '#CC232E',
    fontWeight: '600',
    margin: 0,
  },
  bonusCard: {
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '15px',
    textAlign: 'center' as const,
    boxShadow: '0 8px 25px rgba(204, 35, 46, 0.3)',
    border: '2px solid #CC232E',
  },
  bonusText: {
    margin: 0,
    fontSize: '1rem',
  },

  // Timeline
  timelineCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  timelineTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    flexShrink: 0,
  },
  timelineInfo: {
    flex: 1,
  },
  timelineEventTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  timelineDate: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  contactSection: {
    padding: '8rem 0',
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    color: '#1a1a1a',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    width: '100%',
  },
  contactCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  contactAvatar: {
    width: '60px',
    height: '60px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  contactRole: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#1a1a1a',
  },
  contactLink: {
    fontSize: '1rem',
    color: '#CC232E',
    textDecoration: 'none',
    fontWeight: '500',
  },

  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '20px 0',
    position: 'relative' as const,
    bottom: 0,
    width: '100%',
  },


};
