// Growthally Advisors - Data Layer
// All website data centralized in one place

const GROWTHALLY_DATA = {
    company: {
        name: "Growthally Advisors Pvt Ltd",
        tagline: "A Friend for Growth",
        established: "July 30, 2010",
        cin: "U74999MH2010PTC206104",
        email: "info@growthally.org",
        website: "https://growthally.org",
        whatsapp: "917506236027",
        logo: "assets/logo_bg.png",
        phone: "+91 75062 36027"
    },

    locations: {
        mumbai: {
            name: "Mumbai Office",
            address: "21A, Vasudev Chambers, Old Nagardas Cross Lane, Near Andheri Subway, Andheri East, Mumbai – 400069, Maharashtra, India",
            phone: "+91 75062 36027",
            is_headquarters: true
        },
        delhi: {
            name: "Delhi Office",
            address: "D-251, 1st Floor, Street No. 10, Laxmi Nagar, Delhi – 110092",
            is_headquarters: false
        }
    },

    achievements: [
        {
            value: "20000",
            suffix: "+ Cr",
            label: "Funds Raised"
        },
        {
            value: "3000",
            suffix: "+",
            label: "Corporates Served"
        },
        {
            value: "150",
            suffix: "+",
            label: "Banks/FIS Relationship"
        },
        {
            value: "15",
            suffix: "+",
            label: "Years of Experience"
        },
        {
            value: "50",
            suffix: "+",
            label: "Professional Team Members"
        },
        {
            value: "10",
            suffix: "+",
            label: "Expertise across Industries"
        }
    ],

    services: [
        {
            id: "debt-syndication",
            title: "Debt Syndication",
            icon: "fas fa-handshake",
            features: [
                "Term Loans",
                "Working Capital Finance",
                "Project Finance",
                "Structured Debt",
                "Refinancing Solutions"
            ]
        },
        {
            id: "equity-advisory",
            title: "Equity Advisory",
            icon: "fas fa-chart-line",
            features: [
                "PE/VC Fundraising",
                "Growth Capital",
                "Strategic Investments",
                "Investor Connect",
                "Cap Table Management"
            ]
        },
        {
            id: "leasing",
            title: "Leasing Solutions",
            icon: "fas fa-file-contract",
            features: [
                "Operating Lease",
                "Finance Lease",
                "Equipment Financing",
                "Asset Management",
                "Lease Structuring"
            ]
        },
        {
            id: "ma-advisory",
            title: "M&A Advisory",
            icon: "fas fa-building",
            features: [
                "Buy-side Advisory",
                "Sell-side Advisory",
                "Valuation Services",
                "Due Diligence",
                "Deal Structuring"
            ]
        },
        {
            id: "structured-mortgages",
            title: "Structured Mortgages",
            icon: "fas fa-sync-alt",
            features: [
                "Debt Restructuring",
                "CDR/OTS Advisory",
                "Turnaround Management",
                "Liability Management",
                "Strategic Restructuring"
            ]
        },
        {
            id: "growth-cfo",
            title: "Growth CFO Services",
            icon: "fas fa-user-tie",
            features: [
                "Financial Planning",
                "Budget & Forecasting",
                "MIS & Reporting",
                "CFO Advisory",
                "Compliance Support"
            ]
        }
    ],

    team: [
        {
            name: "Bhupinder Narendra Garg",
            position: "Founder and Director",
            bio: "An MBA with over 2 decades of rich experience in Banking and Financial Advisory, with deep expertise in Corporate Finance, Investment Banking, Debt Structuring, Leasing, Forex & Treasury, and Branch Banking. He brings extensive experience in Pharmaceuticals-focused Investment Banking and has successfully driven strategic planning, investments, and corporate lending advisory—delivering innovative financial solutions that create long-term value.",
            image: "./assets/bhupi.jpg",
            specialties: ["Banking", "Financial Advisory", "Debt Structuring"],
            linkedin: "https://www.linkedin.com/in/bhupinder-garg-05a57b89/"
        },
        {
            name: "Shekhar Shrawankumar Bhuwania",
            position: "Founder and Director",
            bio: "A Chartered Accountant, Company Secretary, and Law Graduate, he brings over 2 decades of rich and diverse experience across Finance, Investment Banking, Taxation, Legal, Secretarial, and Compliance functions. His professional journey spans leadership roles in a leading Private Sector Bank, a top-tier Law Firm, and one of the Big Four Audit Firms—equipping him with a rare blend of financial acumen, legal expertise, and strategic advisory capabilities.",
            image: "./assets/shekher.jpg",
            specialties: ["Legal Advisory", "Compliance", "Taxation"],
            linkedin: "https://www.linkedin.com/in/shekhar-bhuwania-8b186468/"
        },
        {
            name: "Ravi Jaisalmeria",
            position: "Founder and Director",
            bio: "A Chartered Accountant with 2 decade of expertise in Accountancy, Finance, and Investment Banking. He has held leadership roles with a global healthcare giant, a public listed company, and a leading bank. With deep experience in capital raising, mergers & acquisitions, and corporate restructuring, he is known for delivering strategic financial solutions that empower businesses to grow and transform.",
            image: "./assets/ravi.jpg",
            specialties: ["Investment Banking", "M&A", "Strategic Planning"],
            linkedin: "https://www.linkedin.com/in/ravi-jaiselmeria-89b75/"
        },
        {
            name: "Saurabh",
            position: "VP - Debt Syndication",
            bio: "CA, 11+ years of experience in financial services industry, excel in corporate relationship management, structuring debt solution and handling complex project finance assignments.",
            image: "./assets/saurab.jpg",
            specialties: ["Debt Syndication", "Project Finance", "Corporate Relations"],
            linkedin: "#"
        },
        {
            name: "Mayuri",
            position: "Team Leader - Debt Syndication",
            bio: "With 10+ years in debt syndication, she has been the bridge between corporates, NBFCs, and growth capital, crafting financial solutions that fuel expansion when it matters most.",
            image: "./assets/mayuri.jpg",
            specialties: ["Debt Syndication", "Corporate Finance"],
            linkedin: "#"
        },
        {
            name: "Brijen",
            position: "Sr. Relationship Manager",
            bio: "MBA in Finance with 6+ years of experience in leasing, specializing in operating leases. Skilled in financial analysis, asset management, and building strong client relationships.",
            image: "./assets/brijen.jpg",
            specialties: ["Leasing", "Financial Analysis", "Client Relations"],
            linkedin: "#"
        },
        {
            name: "Ayush",
            position: "Sr. Relationship Manager",
            bio: "Experienced relationship manager with expertise in client acquisition and financial advisory services.",
            image: "./assets/aayush.jpg",
            specialties: ["Client Acquisition", "Financial Advisory"],
            linkedin: "#"
        },
        {
            name: "Varun",
            position: "VP - Investment Banking",
            bio: "CA with 8+ years of experience with Deloitte and E&Y in transaction advisory which consists of Debt, Private equity and Merger and Acquisition.",
            image: "./assets/varun.jpg",
            specialties: ["Transaction Advisory", "Private Equity", "M&A"],
            linkedin: "#"
        },
        {
            name: "Yash",
            position: "Head - Equity",
            bio: "CA with 5+ years of experience. Have worked across the corporate spectrum - from auditing and taxation to M&A and fundraising. Previously at E & Y, was part of India's largest $2Bn+ healthcare deal, honing expertise in deal diligences amongst many other such projects. With a knack for crafting compelling narratives, translating them into numbers, and turning those into strategy, helps clients to bring ideas to life.",
            image: "./assets/yash.jpg",
            specialties: ["M&A", "Due Diligence", "Strategy"],
            linkedin: "#"
        },
        {
            name: "Laxmikant",
            position: "Head - Equity",
            bio: "CA with 5+ years of experience in Financial Due Diligence, Transaction Advisory, and Startup Growth Strategy. Formerly at E & Y, worked on buy-side and sell-side deals before founding WealthAlly, a WealthTech platform enabling innovative investments for startups and retail investors. Specializing in scaling startups, structuring fundraises, and driving strategic growth across early and late stage deals.",
            image: "./assets/lakshmikant.jpg",
            specialties: ["Due Diligence", "Startup Strategy", "Transaction Advisory"],
            linkedin: "#"
        },
        {
            name: "Aditya",
            position: "Manager- Client Acquisition",
            bio: "MBA graduate from NMIMS with a strong foundation in finance & advisory. Ex-ICICI Bank professional with proven expertise in client acquisition and origination. Recognized for driving growth, strengthening partnerships, and enabling impactful investment banking solutions.",
            image: "./assets/Aditya.jpg",
            specialties: ["Client Acquisition", "Investment Banking", "Partnerships"],
            linkedin: "#"
        },
        {
            name: "Jay",
            position: "Team Member",
            bio: "",
            image: "./assets/jay.jpg",
            specialties: [],
            linkedin: "#"
        },
        {
            name: "Jigar",
            position: "Team Member",
            bio: "",
            image: "./assets/jigar.jpg",
            specialties: [],
            linkedin: "#"
        },
        {
            name: "Nupur",
            position: "Team Member",
            bio: "",
            image: "./assets/nupur.jpg",
            specialties: [],
            linkedin: "#"
        }
    ],

    clients: [
        {
            id: 1,
            name: "Gopaldas Visram & Co. Ltd.",
            logo: "https://iphex-india.com/uploads/company_logo_2019/343_GOPALDAS_VISRAM_CO._LTD.,_comp_logo_20190114170328.jpg",
            alt: "Gopaldas Visram & Co. Ltd."
        },
        {
            id: 2,
            name: "Lloyds Metals and Energy Ltd.",
            logo: "https://bm-events.s3.ap-south-1.amazonaws.com/common/images/company-logo/lloyds-metals-and-energy-ltd--507.webp",
            alt: "Lloyds Metals and Energy Ltd."
        },
        {
            id: 3,
            name: "Man Group",
            logo: "https://mangroup.com/wp-content/uploads/elementor/thumbs/logo-colour-2-qupz2t3tyi51953prnqqx0lr8f0bd1d2nuucyvppjg.png",
            alt: "Man Group"
        },
        {
            id: 4,
            name: "Sudarshan Pharma Industries Ltd.",
            logo: "https://www.sudarshanpharma.com/wp-content/uploads/2019/05/sudarshan-pharma-logo-250.png",
            alt: "Sudarshan Pharma Industries Ltd."
        },
        {
            id: 5,
            name: "Vedantaa Institute",
            logo: "https://vedantaa.institute/Content/assets/img/VedantaMbbsLogo.png",
            alt: "Vedantaa Institute"
        },
        {
            id: 6,
            name: "Kilitch Drugs India Ltd.",
            logo: "https://kilitch.com/wp-content/uploads/2025/08/site-logo.png",
            alt: "Kilitch Drugs India Ltd."
        },
        {
            id: 7,
            name: "Relcon Infraprojects Ltd.",
            logo: "https://content.app-sources.com/s/08599441870509637/uploads/Images/WhatsApp_Image_2023-07-21_at_11.56.47_AM-9920872.jpeg?format=webp",
            alt: "Relcon Infraprojects Ltd."
        },
        {
            id: 8,
            name: "Naprod Life Sciences Pvt. Ltd.",
            logo: "https://www.naprodgroup.com/images/NaprodLogo.png",
            alt: "Naprod Life Sciences Pvt. Ltd."
        },
        {
            id: 9,
            name: "Waaree Energies Ltd.",
            logo: "https://api.waaree.com/upload/media/image_1_1_1749036191.png",
            alt: "Waaree Energies Ltd."
        },
        {
            id: 10,
            name: "PNP Industrial Solutions",
            logo: "https://static.wixstatic.com/media/f07f21_af294dd07788467ea9aec5d4b4ce0693~mv2.png/v1/fill/w_135,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/From%20Borivali%20to%20Barbados.png",
            alt: "PNP Industrial Solutions"
        },
        {
            id: 11,
            name: "Sanjay Chemicals India",
            logo: "https://www.sanjaychemindia.com/images/logo.png",
            alt: "Sanjay Chemicals India"
        },
        {
            id: 12,
            name: "Sonkamal",
            logo: "https://www.sonkamal.com/images/logo%20main.png",
            alt: "Sonkamal"
        }
    ],

    transactions: {
        active: [],
        completed: [
            {
                logo: "assets/transactions/zovian.png",
                company_name: "Xovian Aerospace",
                deal_type: "Private Equity",
                amount: "₹22 Cr",
                sector: "Aerospace",
                completed_date: "2024"
            },
            {
                logo: "assets/transactions/jag_fin.jpg",
                company_name: "Jagsonpal Pharma",
                deal_type: "M&A",
                amount: "₹94 Cr",
                sector: "Pharmaceuticals",
                completed_date: "2024"
            },
            {
                logo: "assets/transactions/llyod_fin.png",
                company_name: "Lloyds Metals",
                deal_type: "Unsecured Loan",
                amount: "₹350 Cr",
                sector: "Metals & Energy",
                completed_date: "2024"
            },
            {
                logo: "assets/transactions/waree fin.jpg",
                company_name: "Waaree Renewable Technologies Limited",
                deal_type: "Working Capital",
                amount: "₹25 Cr",
                sector: "Renewable Energy",
                completed_date: "2024"
            },
            {
                logo: "assets/transactions/sudarshan fin.jpg",
                company_name: "Sudarshan Pharma Industries Limited",
                deal_type: "Working Capital",
                amount: "₹100 Cr",
                sector: "Pharmaceuticals",
                completed_date: "2024"
            },
            {
                logo: "assets/transactions/AB_Logo.jpg",
                company_name: "AB Infrabuild Limited",
                deal_type: "Working Capital",
                amount: "₹93 Cr",
                sector: "Infrastructure",
                completed_date: "2024"
            }
        ]
    },

    testimonials: [
        {
            name: "Rajesh Kumar",
            position: "CEO, TechCorp Industries",
            text: "Growthally Advisors transformed our financing strategy. Their deep industry knowledge and extensive network helped us secure funding at competitive rates.",
            image: "assets/testimonial-1.jpg"
        },
        {
            name: "Priya Sharma",
            position: "CFO, Pharma Solutions",
            text: "The team's professionalism and dedication to understanding our unique needs made the fundraising process smooth and successful.",
            image: "assets/testimonial-2.jpg"
        },
        {
            name: "Amit Patel",
            position: "Founder, Green Energy Corp",
            text: "Their M&A advisory services were instrumental in our growth journey. Highly recommended for any business looking to scale.",
            image: "assets/testimonial-3.jpg"
        }
    ],

    videoTestimonials: [
        {
            id: 1,
            videoId: "hNCsXRU9nwc",
            title: "Client Success Story 1",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 2,
            videoId: "nuZJHAV37k8",
            title: "Client Success Story 2",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 3,
            videoId: "-KUL3R3p6VU",
            title: "Client Success Story 3",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 4,
            videoId: "NTnAkEOgqQg",
            title: "Client Success Story 4",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 5,
            videoId: "44kA97YeHTM",
            title: "Client Success Story 5",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 6,
            videoId: "2BwyrS41Cag",
            title: "Client Success Story 6",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 7,
            videoId: "XxyG1XJuTFg",
            title: "Client Success Story 7",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 8,
            videoId: "UHb9CBObCEs",
            title: "Client Success Story 8",
            description: "Growthally Advisors - Client Testimonial"
        },
        {
            id: 9,
            videoId: "jZHMDyKhMOY",
            title: "Client Success Story 9",
            description: "Growthally Advisors - Client Testimonial"
        }
    ],

    careers: [
        {
            id: "credit-analyst",
            title: "Credit Analyst",
            department: "Credit Analysis",
            location: "Mumbai",
            type: "FULL-TIME",
            experience: "2+ years",
            description: "Analyze credit risk, prepare reports, and support investment decisions in our dynamic financial advisory team.",
            overview: "We are seeking a detail-oriented Credit Analyst to evaluate creditworthiness, prepare comprehensive reports, and support investment decisions in our dynamic financial advisory team.",
            responsibilities: [
                "Develop and execute client acquisition strategies",
                "Identify and pursue new business opportunities",
                "Build and maintain relationships with key stakeholders",
                "Lead market research and competitive analysis",
                "Manage client acquisition campaigns and initiatives",
                "Collaborate with cross-functional teams for business growth"
            ],
            requirements: [
                {
                    label: "Qualification",
                    value: "MBA in Marketing/Business Administration"
                },
                {
                    label: "Experience",
                    value: "5-8 years in business development or sales"
                },
                {
                    label: "Skills",
                    value: "Proven track record in client acquisition and business growth"
                },
                {
                    label: "Additional",
                    value: "Strong leadership and team management skills, Excellent negotiation and presentation skills, Knowledge of financial services industry"
                }
            ],
            benefits: [
                "Competitive salary with performance incentives",
                "Health insurance and comprehensive benefits package",
                "Leadership development programs",
                "Flexible working arrangements"
            ]
        },
        {
            id: "relationship-manager",
            title: "Relationship Manager",
            department: "Client Relations",
            location: "Mumbai / Delhi",
            type: "FULL-TIME",
            experience: "3-5 years",
            description: "Build and maintain client relationships, drive business growth, and deliver exceptional advisory services.",
            overview: "We are seeking an experienced Relationship Manager to build and maintain strong client relationships, drive business growth, and deliver exceptional advisory services to our clients.",
            responsibilities: [
                "Build and maintain client relationships",
                "Identify client needs and provide solutions",
                "Drive business growth through client engagement",
                "Coordinate with internal teams for service delivery",
                "Prepare client presentations and reports",
                "Ensure high levels of client satisfaction"
            ],
            requirements: [
                {
                    label: "Qualification",
                    value: "MBA in Finance/Business Administration"
                },
                {
                    label: "Experience",
                    value: "3-5 years in relationship management"
                },
                {
                    label: "Skills",
                    value: "Strong interpersonal and communication skills"
                },
                {
                    label: "Additional",
                    value: "Knowledge of financial products and services, Proven track record in client management"
                }
            ],
            benefits: [
                "Competitive salary with performance incentives",
                "Health insurance and comprehensive benefits package",
                "Professional development opportunities",
                "Work-life balance initiatives"
            ]
        },
        {
            id: "client-acquisition-manager",
            title: "Manager - Client Acquisition",
            department: "Business Development",
            location: "Mumbai",
            type: "FULL-TIME",
            experience: "5-8 years",
            description: "Lead client acquisition strategies, manage business development initiatives, and drive company growth.",
            overview: "We are seeking a dynamic Manager for Client Acquisition to lead our business development efforts, develop new business opportunities, and drive growth through effective market penetration strategies.",
            responsibilities: [
                "Develop and execute client acquisition strategies",
                "Identify and pursue new business opportunities",
                "Build and maintain relationships with key stakeholders",
                "Lead market research and competitive analysis",
                "Manage client acquisition campaigns and initiatives",
                "Collaborate with cross-functional teams for business growth"
            ],
            requirements: [
                {
                    label: "Qualification",
                    value: "MBA in Marketing/Business Administration"
                },
                {
                    label: "Experience",
                    value: "5-8 years in business development or sales"
                },
                {
                    label: "Skills",
                    value: "Proven track record in client acquisition and business growth"
                },
                {
                    label: "Additional",
                    value: "Strong leadership and team management skills, Excellent negotiation and presentation skills, Knowledge of financial services industry"
                }
            ],
            benefits: [
                "Competitive salary with performance incentives",
                "Health insurance and comprehensive benefits package",
                "Leadership development programs",
                "Flexible working arrangements"
            ]
        }
    ]
};

