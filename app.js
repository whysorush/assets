// Growthally Advisors - Application Logic
// Page initialization and dynamic content rendering

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeroVideo();
    renderTransactions();
    renderAchievements();
    renderClients();
    renderFounders();
    renderTeamMembers();
    renderServices();
    initMarquees();
    initCounters();
});

// ========================================
// Hero Video Initialization
// ========================================
function initHeroVideo() {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(e => {
            console.log('Video autoplay prevented:', e);
            document.addEventListener('click', function() {
                heroVideo.play().catch(console.log);
            }, { once: true });
        });
    }
}

// ========================================
// Transactions Marquee
// ========================================
function renderTransactions() {
    const container = document.getElementById('transactions-container');
    if (!container) return;

    const allTransactions = [
        ...GROWTHALLY_DATA.transactions.active.map(t => ({ ...t, status: 'active' })),
        ...GROWTHALLY_DATA.transactions.completed.map(t => ({ ...t, status: 'completed' }))
    ];

    const cardsHTML = allTransactions.map(transaction => {
        const isActive = transaction.status === 'active';
        return `
            <div class="transaction-card ${isActive ? 'active' : ''}">
                <div class="transaction-header">
                    <img src="${transaction.logo}" alt="${transaction.company_name}" class="transaction-logo" loading="lazy">
                    <div class="transaction-info">
                        <h3 title="${transaction.company_name}">${transaction.company_name}</h3>
                        <div class="transaction-type">${transaction.deal_type}</div>
                    </div>
                </div>
                <div class="transaction-amount">${transaction.amount}</div>
                <div class="transaction-meta">
                    <span class="transaction-badge ${isActive ? 'active' : 'completed'}">
                        ${isActive ? '⏳ Active' : '✓ Done'}
                    </span>
                    ${transaction.completed_date ? transaction.completed_date : 'In Progress'}
                </div>
            </div>
        `;
    }).join('');

    // Duplicate for seamless loop
    container.innerHTML = cardsHTML + cardsHTML;
}

// ========================================
// Achievements Counter
// ========================================
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    container.innerHTML = GROWTHALLY_DATA.achievements.map((achievement, index) => {
        const delay = index * 0.15;
        return `
            <div class="col-md-4 col-sm-6">
                <div class="achievement-item" data-wow-delay="${delay}s">
                    <div class="achievement-number">
                        <span class="counter" data-target="${achievement.value}">0</span>${achievement.suffix}
                    </div>
                    <div class="achievement-label">${achievement.label}</div>
                </div>
            </div>
        `;
    }).join('');
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCount();
    };

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if (!counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ========================================
// Clients Marquee
// ========================================
function renderClients() {
    const container = document.getElementById('clients-container');
    if (!container) return;

    const clientsHTML = GROWTHALLY_DATA.clients.map(client => `
        <div class="client-logo-item">
            <img src="${client.logo}" alt="${client.alt}" loading="lazy" onerror="this.style.display='none'">
        </div>
    `).join('');

    // Duplicate for seamless loop
    container.innerHTML = clientsHTML + clientsHTML;
}

// ========================================
// Founders Section
// ========================================
function renderFounders() {
    const container = document.getElementById('founders-container');
    if (!container) return;

    const founders = GROWTHALLY_DATA.team.filter(member => 
        member.position.includes('Founder')
    );

    container.innerHTML = founders.map((founder, index) => {
        const isReverse = index % 2 !== 0;
        return `
            <div class="founder-row ${isReverse ? 'reverse' : ''}">
                <div class="founder-photo">
                    <img src="${founder.image}" alt="${founder.name}" loading="lazy">
                </div>
                <div class="founder-content">
                    <h3>${founder.name}</h3>
                    <div class="position">${founder.position}</div>
                    <div class="bio">${founder.bio}</div>
                    ${founder.linkedin !== '#' ? `
                        <a href="${founder.linkedin}" class="linkedin-link" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin"></i> LinkedIn Profile
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// Team Members Grid
// ========================================
function renderTeamMembers() {
    const grid = document.getElementById('team-grid');
    const details = document.getElementById('team-details');
    if (!grid) return;

    const teamMembers = GROWTHALLY_DATA.team.filter(member => 
        !member.position.includes('Founder')
    );

    grid.innerHTML = teamMembers.map((member, index) => `
        <div class="col-md-6 col-lg-4">
            <div class="team-member-card" data-member-index="${index}">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <div class="team-member-overlay">
                    <h4>${member.name}</h4>
                    <p>${member.position}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Show first member details by default
    if (details && teamMembers.length > 0) {
        showTeamMemberDetails(0, teamMembers, details);
    }

    // Add click handlers
    const cards = grid.querySelectorAll('.team-member-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            showTeamMemberDetails(index, teamMembers, details);
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
}

function showTeamMemberDetails(index, teamMembers, detailsContainer) {
    const member = teamMembers[index];
    if (!member || !detailsContainer) return;

    detailsContainer.innerHTML = `
        <h4>${member.name}</h4>
        <div class="position">${member.position}</div>
        <div class="bio">${member.bio}</div>
        ${member.linkedin !== '#' ? `
            <a href="${member.linkedin}" class="linkedin-link" target="_blank" rel="noopener">
                <i class="fab fa-linkedin"></i> Connect on LinkedIn
            </a>
        ` : ''}
    `;
}

// ========================================
// Services Section
// ========================================
function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = GROWTHALLY_DATA.services.map((service, index) => {
        const delay = index * 0.1;
        return `
            <div class="col-md-6 col-lg-4">
                <div class="service-card" data-wow-delay="${delay}s">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h4>${service.title}</h4>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// Marquee Animations
// ========================================
function initMarquees() {
    // Transactions marquee pause on hover
    const transactionsWrapper = document.querySelector('.transactions-marquee-section');
    const transactionsContainer = document.getElementById('transactions-container');
    
    if (transactionsWrapper && transactionsContainer) {
        transactionsWrapper.addEventListener('mouseenter', () => {
            transactionsContainer.style.animationPlayState = 'paused';
        });
        transactionsWrapper.addEventListener('mouseleave', () => {
            transactionsContainer.style.animationPlayState = 'running';
        });
    }

    // Clients marquee pause on hover
    const clientsWrapper = document.querySelector('.clients-marquee-wrapper');
    const clientsContainer = document.getElementById('clients-container');
    
    if (clientsWrapper && clientsContainer) {
        clientsWrapper.addEventListener('mouseenter', () => {
            clientsContainer.style.animationPlayState = 'paused';
        });
        clientsWrapper.addEventListener('mouseleave', () => {
            clientsContainer.style.animationPlayState = 'running';
        });
    }
}

// ========================================
// Career Modal Functions
// ========================================
function openJobDescription(jobId) {
    const modal = document.getElementById('jobModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const jobDescriptions = {
        'credit-analyst': {
            title: 'Credit Analyst',
            content: `
                <div class="job-description">
                    <h4>Job Overview</h4>
                    <p>We are seeking a detail-oriented Credit Analyst to join our Risk Management team.</p>
                    
                    <h4>Key Responsibilities</h4>
                    <ul>
                        <li>Analyze financial statements and credit reports</li>
                        <li>Assess creditworthiness of potential borrowers</li>
                        <li>Prepare risk assessment reports</li>
                        <li>Work with debt syndication team on complex transactions</li>
                    </ul>
                    
                    <h4>Requirements</h4>
                    <ul>
                        <li><strong>Qualification:</strong> CA/MBA in Finance</li>
                        <li><strong>Experience:</strong> 2+ years in credit analysis</li>
                        <li>Strong analytical and quantitative skills</li>
                    </ul>
                    
                    <div class="apply-cta">
                        <a href="mailto:careers@growthally.org?subject=Application for Credit Analyst Position" class="btn-primary">
                            Apply Now
                        </a>
                    </div>
                </div>
            `
        },
        'relationship-manager': {
            title: 'Relationship Manager',
            content: `
                <div class="job-description">
                    <h4>Job Overview</h4>
                    <p>We are looking for an experienced Relationship Manager to build and maintain client relationships.</p>
                    
                    <h4>Key Responsibilities</h4>
                    <ul>
                        <li>Develop and maintain strong client relationships</li>
                        <li>Identify new business opportunities</li>
                        <li>Provide tailored financial solutions</li>
                    </ul>
                    
                    <h4>Requirements</h4>
                    <ul>
                        <li><strong>Qualification:</strong> CA/MBA in Finance</li>
                        <li><strong>Experience:</strong> 3-5 years in client relationship management</li>
                        <li>Strong interpersonal skills</li>
                    </ul>
                    
                    <div class="apply-cta">
                        <a href="mailto:careers@growthally.org?subject=Application for Relationship Manager Position" class="btn-primary">
                            Apply Now
                        </a>
                    </div>
                </div>
            `
        },
        'client-acquisition-manager': {
            title: 'Manager - Client Acquisition',
            content: `
                <div class="job-description">
                    <h4>Job Overview</h4>
                    <p>We are seeking a dynamic Manager for Client Acquisition to lead our business development efforts.</p>
                    
                    <h4>Key Responsibilities</h4>
                    <ul>
                        <li>Develop and execute client acquisition strategies</li>
                        <li>Identify and pursue new business opportunities</li>
                        <li>Build relationships with key stakeholders</li>
                    </ul>
                    
                    <h4>Requirements</h4>
                    <ul>
                        <li><strong>Qualification:</strong> MBA in Marketing/Business</li>
                        <li><strong>Experience:</strong> 5-8 years in business development</li>
                        <li>Proven track record in client acquisition</li>
                    </ul>
                    
                    <div class="apply-cta">
                        <a href="mailto:careers@growthally.org?subject=Application for Manager - Client Acquisition Position" class="btn-primary">
                            Apply Now
                        </a>
                    </div>
                </div>
            `
        }
    };
    
    const job = jobDescriptions[jobId];
    if (job && modal && modalTitle && modalContent) {
        modalTitle.textContent = job.title;
        modalContent.innerHTML = job.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeJobDescription() {
    const modal = document.getElementById('jobModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('jobModal');
    if (event.target === modal) {
        closeJobDescription();
    }
});

// ========================================
// Brochure Download
// ========================================
function downloadBrochure() {
    const brochureUrl = 'assets/presentation.pdf';
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'Growthally-Company-Brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

