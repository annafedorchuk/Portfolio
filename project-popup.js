(function () {
  var __ppHTML = `<!-- ══ PROJECT POPUP ══ -->
<div class="project-popup" id="projectPopup">
  <div class="pp-inner" id="ppInner">

    <!-- sticky top bar (title + close) -->
    <div class="pp-top">
      <p class="pp-title" id="ppTitle"></p>
      <button class="pp-close" id="ppClose">Close</button>
    </div>

    <!-- HERO (first screen) -->
    <div class="pp-hero">
      <div class="pp-body">
        <div class="pp-left">
          <div class="pp-block">
            <span class="pp-label">(Services)</span>
            <div class="pp-services" id="ppServices"></div>
          </div>
          <div class="pp-block">
            <span class="pp-label">(Published)</span>
            <p class="pp-timeline" id="ppTimeline"></p>
          </div>
          <div class="pp-block">
            <span class="pp-label">(About this project)</span>
            <div class="pp-about" id="ppAbout"></div>
          </div>
          <div class="pp-block" id="ppWebsiteBlock" style="display:none">
            <span class="pp-label">(Visit website)</span>
            <a class="pp-website" id="ppWebsite" href="#" target="_blank" rel="noopener"></a>
          </div>
          <div class="pp-block" id="ppBehanceBlock" style="display:none">
            <span class="pp-label">(Visit behance case)</span>
            <a class="pp-website" id="ppBehance" href="#" target="_blank" rel="noopener"></a>
          </div>
        </div>
        <div class="pp-right"><img id="ppImage" src="" alt=""></div>
      </div>
    </div>

    <!-- BIG IMAGE (full-width, after hero) -->
    <div class="pp-bigimg" id="ppBigImg"></div>

    <!-- PROCESS ACCORDION (scrolls below hero) -->
    <div class="pp-process" id="ppProcess"></div>

    <!-- GALLERY (scrolls below hero) -->
    <div class="pp-gallery" id="ppGallery"></div>

    <!-- COMPOSITE (gallery 4) — before the autoslider -->
    <div class="pp-comp comp4" id="ppComp4"></div>

    <!-- AUTOSLIDER (draggable) -->
    <div class="pp-slider" id="ppSlider"><div class="pp-track" id="ppTrack"></div></div>

    <!-- TEXT BLOCK (after slider, aligned to logo) -->
    <div class="pp-text" id="ppText"></div>

    <!-- END GALLERY (images after the text block) -->
    <div class="pp-gallery pp-endgallery" id="ppEndGallery"></div>

    <!-- COMPOSITE (gallery 5) — last section -->
    <div class="pp-comp comp5" id="ppComp5"></div>

  </div>
</div>`;
  var __wrap=document.createElement("div");__wrap.innerHTML=__ppHTML.trim();
  while(__wrap.firstChild)document.body.appendChild(__wrap.firstChild);
  var cursorDot=document.getElementById("cursorDot")||{classList:{add:function(){},remove:function(){}}};
    const PROJECTS = {
      efiros: {
        title: 'Efiros — MCP for AI agents in engineering',
        services: ['UI/UX Design', 'Web design', 'Design system', 'Marketing design', 'Motion'],
        timeline: '2026',
        about: [
          'Efiros is an AI-powered engineering intelligence platform that gives AI agents real-time awareness of software delivery systems. Instead of relying on static reports or assumptions, Efiros connects directly to Git workflows through MCP, enabling agents to make decisions based on the current state of engineering delivery.',
          'The goal was to design a modern website that clearly communicates Efiros\' AI-powered engineering intelligence platform. The experience focuses on presenting complex technical concepts through a clean visual hierarchy, concise messaging, and engaging illustrations.',
          'The result is a professional digital experience that highlights Efiros\' capabilities, builds trust with engineering teams, and makes the platform easier to understand for potential customers.'
        ],
        website: 'efiros.com',
        image: 'efiros/project overview/cover.png',
        bigImage: 'efiros/project overview/big image.mp4',
        process: {
          heading: 'AI engineering platform designed to make software delivery more visible, connected, and intelligent.',
          intro: [
            'The project focused on transforming complex AI and engineering concepts into a clear and engaging website experience. Through competitor analysis, content structuring, and UX research, we identified opportunities to simplify messaging, improve navigation, and strengthen the visual hierarchy.'
          ],
          rows: [
            {
              title: 'Discovery & research',
              desc: 'The AI engineering landscape was analyzed to define a clear content hierarchy and navigation. The website structure was designed to communicate Efiros\' capabilities and guide users through the product experience.',
              deliverables: ['6 competitors analyzed', 'Conceptual moodboard', 'Structure blocks defined']
            },
            {
              title: 'Web design',
              desc: 'A cohesive visual system and clear navigation were established to simplify complex AI concepts. The design combines structured layouts, product-focused visuals, and concise messaging to create a modern and trustworthy digital experience.',
              deliverables: ['Development-ready designs', 'High-fidelity mockups', 'Responsive layouts', 'UI kit']
            },
            {
              title: 'Marketing design',
              desc: 'A collection of marketing assets was created to support the Efiros brand across digital channels. This included social media concepts, post and cover designs, presentation visuals, moodboards, promotional graphics, image collages, and branded visual assets, all aligned with a consistent visual identity.',
              deliverables: ['Brand Visuals', 'Illustrations', 'Presentation Design', 'Social Media Design', 'Banners', 'Posters']
            }
          ]
        },
        gallery: [
          { full: 'efiros/project overview/gallery 1/1.mp4' },
          ['efiros/project overview/gallery 2/1.png', 'efiros/project overview/gallery 2/2.png']
        ],
        slider: [
          'efiros/project overview/autoslider/1.png',
          'efiros/project overview/autoslider/2.png',
          'efiros/project overview/autoslider/3.mp4',
          'efiros/project overview/autoslider/4.png',
          'efiros/project overview/autoslider/5.png'
        ],
        outro: {
          heading: 'The platform\'s advanced AI capabilities were translated into a clear and intuitive website experience.',
          paragraphs: [
            'The final website provides Efiros with a modern and scalable digital presence that clearly communicates its AI-powered engineering platform. A structured content hierarchy, intuitive navigation, and consistent visual language make complex technical concepts easier to understand while strengthening trust and engagement.'
          ]
        },
        endGallery: [
          { composite: 'efiros3', images: ['efiros/project overview/gallery 3/1.png', 'efiros/project overview/gallery 3/2.png', 'efiros/project overview/gallery 3/3.png'] }
        ]
      },
      aura: {
        title: 'Aura — Meditation app',
        services: ['Mobile app design', 'UI/UX Design', 'Design system', 'Marketing design', 'Motion'],
        timeline: '2025',
        about: [
          'The goal was to create a mobile meditation experience that supports mental wellbeing, helping users manage stress, improve concentration, and develop mindful habits that fit naturally into everyday life.',
          'Designed with simplicity and personalization in mind, the app brings together guided meditations, breathing techniques, sleep programs, and progress insights within a calm and intuitive environment. The experience encourages users to explore content tailored to their needs, establish routines, and stay engaged on their wellness journey.',
          'The result is a digital product that makes mindfulness more accessible and sustainable, empowering users to create moments of calm, strengthen their focus, and support their overall wellbeing through consistent daily practice.'
        ],
        behance: 'https://www.behance.net/gallery/228882403/Meditation-app',
        image: 'aura/project overview/cover.png',
        bigImage: 'aura/project overview/big image video.mp4',
        process: {
          heading: 'Meditation and wellness app designed to make mindfulness more accessible, personalized, and engaging.',
          intro: [
            'Created to help users build healthy habits through guided meditations, sleep programs, breathing exercises, and daily wellness routines within a calm and intuitive mobile experience.',
            'The existing market is often crowded with complex navigation, overwhelming content libraries, and limited personalization. Through competitive analysis, user journey mapping, feature benchmarking, and UX research, key opportunities were identified to simplify content discovery and encourage long term engagement.',
            'These insights guided the design of a meditation experience focused on personalization, ease of use, and habit formation. The result is a mobile app that helps users reduce stress, improve focus, and integrate mindfulness naturally into their everyday lives.'
          ],
          rows: [
            {
              title: 'Discovery & research',
              desc: 'The meditation app landscape was analyzed to identify user expectations, emerging trends, and opportunities for differentiation. A moodboard helped define the visual direction, balancing calm aesthetics with a modern wellness feel.',
              deliverables: ['4 competitor apps analyzed', 'Conceptual moodboard', 'Key app features defined']
            },
            {
              title: 'UX design',
              desc: 'Based on research insights, key user journeys were mapped, including onboarding, meditation discovery, daily practice, sleep programs, progress tracking, and profile management. Low fidelity wireframes were then created to establish content hierarchy, navigation patterns, and interaction flows across the core user experience.',
              deliverables: ['User flows', 'Core screen wireframes']
            },
            {
              title: 'UI design',
              desc: 'Multiple visual concepts were created to explore different interpretations of a modern wellness experience. The selected direction was developed into high fidelity screens, combining soft earthy tones, calming imagery, and minimal interfaces to create a feeling of balance, mindfulness, and emotional comfort.',
              deliverables: ['Development-ready designs', 'High-fidelity mockups', 'Responsive layouts']
            },
            {
              title: 'Design system',
              desc: 'Alongside the final UI, a complete design system was developed, covering buttons, cards, navigation patterns, imagery, and component states. All assets were structured and documented to ensure consistency across the product and support a smooth handoff to development.',
              deliverables: ['Dev-ready designs', 'UI kit']
            }
          ]
        },
        gallery: [
          { composite: 'aura1', images: ['aura/project overview/gallery 1/1.png', 'aura/project overview/gallery 1/2.png', 'aura/project overview/gallery 1/3.png'] },
          ['aura/project overview/gallery 2/image1.png']
        ],
        slider: [
          'aura/project overview/autoslider/1.png',
          'aura/project overview/autoslider/2.png',
          'aura/project overview/autoslider/3.png',
          'aura/project overview/autoslider/4.png',
          'aura/project overview/autoslider/5.png',
          'aura/project overview/autoslider/6.png',
          'aura/project overview/autoslider/Full Review of Devices.mp4'
        ],
        outro: {
          heading: 'Designed for Focus, Balance, and Daily Growth',
          paragraphs: [
            'The completed design transformed the concept into a polished meditation experience focused on simplicity, personalization, and long term engagement. Clear navigation, calming visuals, and thoughtfully structured content make it easy for users to discover relevant sessions, build healthy routines, and stay consistent with their mindfulness practice.',
            'The result is a scalable mobile product that supports users at every stage of their wellness journey while creating a strong foundation for future growth and content expansion.'
          ]
        },
        endGallery: [['aura/project overview/gallery 3/1.png', 'aura/project overview/gallery 3/2.png']]
      },
      gammalab: {
        title: 'Gammalab — Gamma spectrometry interface',
        services: ['UI/UX Design', 'Product design', 'Design system', 'Marketing design', 'Motion'],
        timeline: '2025',
        about: [
          'Gamma is a modern interface concept for gamma spectrometry software designed to simplify the analysis of radiation measurement data. The platform transforms complex scientific workflows into a clear, intuitive experience, helping specialists monitor spectra, manage measurements, and interpret results with confidence.',
          'The goal was to design a clean, data driven interface that makes advanced analytical processes easier to understand and navigate. The experience emphasizes visual clarity, efficient information hierarchy, and carefully structured dashboards to support accurate decision making in laboratory and industrial environments.',
          'The result is a professional interface that balances technical precision with usability, allowing users to focus on data analysis while reducing visual complexity and improving workflow efficiency.'
        ],
        behance: 'https://www.behance.net/gallery/232622849/Gamma-spectrometry-interface',
        image: 'gamma/project overwiew/cover.png',
        bigImage: 'gamma/project overwiew/big video.mp4',
        process: {
          heading: 'Fast and accurate gamma spectrometry interface for time critical laboratory analysis.',
          intro: [
            'The project focused on designing an interface optimized for environments where speed and precision directly influence measurement quality. Since radionuclides begin to decay immediately after sampling, every second matters, making fast access to information and intuitive workflows essential.',
            'User interviews with laboratory specialists revealed the most critical tasks, pain points, and decision making patterns. These insights guided the information architecture, navigation, and visual hierarchy, creating an interface that minimizes cognitive load, reduces the time required to perform key actions, and supports reliable analysis in high precision nuclear environments.'
          ],
          rows: [
            {
              title: 'Discovery & research',
              desc: 'The gamma spectrometry workflow was analyzed to understand how specialists interact with measurement data in time critical laboratory environments. User interviews and domain research helped identify the most important tasks, information priorities, and usability challenges.',
              deliverables: ['5 laboratory workflows analyzed', 'User interviews with gamma spectrometry specialists']
            },
            {
              title: 'UX design',
              desc: 'The UX process focused on reducing the time required to complete critical laboratory tasks while ensuring that complex spectrometry data remained easy to understand. User workflows were mapped to identify the shortest paths to key actions, followed by brainstorming sessions that explored multiple interaction concepts.',
              deliverables: ['Brainstorming workshops', 'Task flow diagrams', 'User workflow mapping', 'Information architecture and dashboard structure defined', 'Low fidelity wireframes']
            },
            {
              title: 'UI design',
              desc: 'The visual interface was designed to support fast data interpretation while maintaining consistency across the entire platform. Key application screens, reusable widgets, and dashboard components were created alongside a comprehensive UI kit.',
              deliverables: ['Development-ready designs', 'High-fidelity mockups', 'Core system widgets', 'Data visualization components', 'UI kit', 'Component library', 'Custom icon set', 'Typography system', 'Color palette', 'Branded visual elements']
            }
          ]
        },
        gallery: [
          { composite: 'gamma1', images: ['gamma/project overwiew/gallery 1/image 1.png', 'gamma/project overwiew/gallery 1/image 2.png'] },
          ['gamma/project overwiew/gallery 2/image 1.png'],
          ['gamma/project overwiew/gallery 3/image 1.png', 'gamma/project overwiew/gallery 3/image 2.png']
        ],
        slider: [
          'gamma/project overwiew/autoslider/1.png',
          'gamma/project overwiew/autoslider/2.png',
          'gamma/project overwiew/autoslider/3.png',
          'gamma/project overwiew/autoslider/4.png',
          'gamma/project overwiew/autoslider/5.png',
          'gamma/project overwiew/autoslider/6.png',
          'gamma/project overwiew/autoslider/7.png'
        ],
        outro: {
          heading: 'A precise, data driven interface built for fast and confident gamma spectrometry analysis.',
          paragraphs: [
            'The final interface gives laboratory specialists a clear, structured environment for monitoring spectra, managing measurements, and interpreting results with confidence. Carefully organised dashboards, consistent components, and a strong visual hierarchy reduce cognitive load and help users act quickly on time critical data while maintaining accuracy in high precision nuclear environments.'
          ]
        },
        endGallery: [
          { composite: 'gamma4', images: ['gamma/project overwiew/gallery 4/image.png', 'gamma/cover.mp4'] }
        ]
      },
      acecare: {
        title: 'AceCare — Healthcare App & Branding',
        services: ['Mobile app design', 'UI/UX Design', 'Design system', 'Marketing design', 'Motion'],
        timeline: '2026',
        about: [
          'The goal of this project was to create a mobile app that helps people with cancer navigate their treatment journey with confidence and peace of mind. The experience combines personalized guidance, symptom tracking, medication reminders, and trusted resources in a simple, supportive interface.',
          'The result is an accessible digital companion that empowers users to stay informed, organized, and connected throughout every stage of care.'
        ],
        image: 'AceCare/project overview/cover.png',
        bigImage: 'AceCare/project overview/big image.png',
        process: {
          heading: 'A mobile app designed to support people through every stage of the cancer journey.',
          intro: [
            'AceCare brings together personalized guidance, treatment tracking, symptom management, appointments, medications, and educational resources in one calm and intuitive experience. The goal was to reduce uncertainty, simplify everyday care, and help patients feel more informed and supported throughout treatment.',
            'The design process was driven by user research, focusing on real patient needs, emotional challenges, and daily routines. These insights shaped a clear information architecture and a simple interface that makes essential information easy to access while creating a reassuring experience for patients and their caregivers.'
          ],
          rows: [
            {
              title: 'Discovery & research',
              desc: 'Research focused on understanding the daily experiences of people undergoing cancer treatment. Through user interviews, journey mapping, and competitor analysis, key challenges, unmet needs, and opportunities were identified to create a supportive, intuitive mobile experience.',
              deliverables: ['3 competitor apps analyzed', 'Conceptual moodboard', 'User interviews with patients and caregivers']
            },
            {
              title: 'UX design',
              desc: 'Based on research insights, the core patient journey was mapped, including onboarding, symptom tracking, medication reminders, appointments, health records, and AI assisted support. Low fidelity wireframes were created to define the information architecture, navigation, and user flows, ensuring a simple and reassuring experience throughout every stage of care.',
              deliverables: ['User flows', 'Information architecture', 'Low fidelity wireframes', 'Core screen wireframes']
            },
            {
              title: 'UI design',
              desc: 'The visual interface was designed to create a calm, accessible, and reassuring experience for people navigating cancer care. Every screen, component, and interaction was crafted to improve readability, reduce cognitive load, and provide quick access to essential information while maintaining consistency across the entire mobile application.',
              deliverables: ['High fidelity mobile screens', 'UI kit', 'Branded visual elements']
            }
          ]
        },
        gallery: [
          { composite: 'acecare1', images: ['AceCare/project overview/gallery 1/324.png', 'AceCare/project overview/gallery 1/Image.png'] },
          ['AceCare/project overview/gallery 2/1.png']
        ],
        slider: [
          'AceCare/project overview/autoslider/video.mp4',
          'AceCare/project overview/autoslider/2.png',
          'AceCare/project overview/autoslider/video3.mp4',
          'AceCare/project overview/autoslider/5.png',
          'AceCare/project overview/autoslider/video2.mp4'
        ],
        outro: {
          heading: 'A calm, supportive companion designed to guide patients through every stage of care.',
          paragraphs: [
            'The final app brings personalized guidance, symptom tracking, medication reminders, appointments, and trusted resources together in one reassuring experience. A clear information architecture, accessible visual language, and thoughtful interactions reduce uncertainty and cognitive load, helping patients and caregivers stay informed, organized, and connected throughout the treatment journey.'
          ]
        },
        endGallery: [
          { composite: 'acecare3', images: ['AceCare/project overview/gallery 3/1.png', 'AceCare/project overview/gallery 3/2.png'] }
        ]
      },
      faith: {
        title: 'Faith — Giving platform',
        services: ['UI/UX Design', 'Web design', 'Admin platform', 'Design system', 'Marketing design', 'Motion'],
        timeline: '2024–2025',
        about: [
          'The challenge was to create a platform that supports givers, advisors, and charity leaders while making the giving journey more transparent and engaging.',
          'Built around transparency and impact, the experience combines financial tools with social features, including organizational updates, activity feeds, and reporting. This approach helps users stay connected to the causes they support while maintaining full visibility over their giving activity.',
          'The result is a platform that transforms giving from a transactional process into a more engaging and meaningful experience.'
        ],
        behance: 'https://www.behance.net/gallery/226776733/Giving-platform',
        image: 'faith/project overview/cover.png',
        bigImageCols: ['faith/project overview/video left side.mp4', 'faith/project overview/right image.png'],
        process: {
          heading: 'Giving platform redesign focused on transparency, engagement, and meaningful charitable impact.',
          intro: [
            'Designed to support givers, advisors, and charity leaders through a connected digital experience that balances fund management with storytelling and community engagement.',
            'The existing platform was centered around financial management, with limited visibility into charitable impact and organizational activity. Through stakeholder interviews, platform audits, competitive analysis, and user flow mapping, key pain points and opportunities were identified.',
            'The findings informed a redesign focused on improving transparency, simplifying workflows, and creating a more connected experience for givers, advisors, and charity leaders.'
          ],
          rows: [
            {
              title: 'Discovery & technical research',
              desc: 'An in-depth review of the existing platform identified usability gaps, content challenges, and opportunities to create a more engaging giving experience. Research explored how financial tools, impact reporting, and social features could coexist within a single ecosystem serving multiple user roles. Technical analysis helped define MVP priorities, platform requirements, and opportunities for future scalability.',
              deliverables: ['Key competitors analysis', 'Analysis the current platform', 'Development research', 'MVP scope outlined', 'Brand & web research', '2 design concepts']
            },
            {
              title: 'UX mapping & platform architecture',
              desc: 'User journeys were mapped to understand how different audiences interact with giving, reporting, and charitable content throughout the platform. Information architecture was restructured to reduce complexity, improve content discoverability, and create clearer pathways between fund management, impact tracking, and community engagement features.',
              deliverables: ['Wireframes & user flows', 'Interaction schemas', 'Core platform screens', 'UX recommendations', 'Interactive prototype', 'Accessibility recommendations']
            },
            {
              title: 'UI design',
              desc: 'A modern interface was designed to balance financial transparency with engagement and discovery. Clear visual hierarchy, accessible navigation, and reusable design components support key platform activities, from fund management and impact reporting to exploring updates from charitable organizations.',
              deliverables: ['Development-ready designs', 'High-fidelity mockups', 'Responsive layouts']
            },
            {
              title: 'Work with admin platform',
              desc: 'The admin platform was designed to support the operational side of the giving ecosystem, providing tools for managing funds, grants, organizations, and user accounts. Key workflows focused on reviewing and approving charity applications, fund creation requests, transfers between funds, and financial activities across the platform.',
              deliverables: ['Redesign of the current platform experience', 'Discovery sessions with stakeholders and operational teams', 'Back-office workflow optimization', 'Development-ready screens and specifications']
            },
            {
              title: 'Design system',
              desc: 'A scalable design system was created to ensure consistency across both user-facing and administrative experiences. Reusable components, design patterns, and interaction standards helped streamline the design process, improve collaboration with development teams, and support future platform growth while maintaining a cohesive user experience.',
              deliverables: ['Scalable design system', 'Data table patterns', 'Design tokens', 'Color system', 'Developer & QA handover doc', 'Library with animations', 'Data visualization components']
            },
            {
              title: 'Marketing materials',
              desc: 'A cohesive set of marketing assets was created to communicate the platform’s value, strengthen brand recognition, and support user engagement across digital channels. The visual language was aligned with the product experience to ensure consistency across every touchpoint.',
              deliverables: ['PDF Impact reports', 'Social media assets', 'Email templates', 'Campaign visuals', 'Presentation materials', 'Marketing illustrations']
            }
          ]
        },
        gallery: [
          ['faith/project overview/gallery 1/1.png', 'faith/project overview/gallery 1/2.png'],
          ['faith/project overview/gallery 2/promo logo.mp4'],
          ['faith/project overview/gallery 3/1.png', 'faith/project overview/gallery 3/2.png']
        ],
        comp4: {
          navy: 'faith/project overview/gallery 4/3.png',
          laptop: 'faith/project overview/gallery 4/2.png',
          family: 'faith/project overview/gallery 4/1.png'
        },
        comp5: {
          land: 'faith/project overview/gallery 5/2.png',
          card: 'faith/project overview/gallery 5/1.png'
        },
        outro: {
          heading: 'A faithful giving journey begins with connection, transparency, purpose, and impact.',
          paragraphs: [
            'The redesign transformed a transaction-focused platform into a more connected giving experience. By bringing together fund management, charitable impact, and community engagement, the platform helps givers stay connected to the causes they support while providing advisors, ministries, and charity leaders with the tools needed to grow their impact.',
            'The result is a scalable digital ecosystem designed to make generosity more accessible, transparent, and meaningful for every participant in the giving journey.'
          ]
        },
        slider: [
          'faith/project overview/autoslider/1.png',
          'faith/project overview/autoslider/2.png',
          'faith/project overview/autoslider/3.png',
          'faith/project overview/autoslider/4.png',
          'faith/project overview/autoslider/5.png',
          'faith/project overview/autoslider/6.png',
          'faith/project overview/autoslider/7.png',
          'faith/project overview/autoslider/8.png'
        ]
      }
    };

    const popup = document.getElementById('projectPopup');
    const ppTitle = document.getElementById('ppTitle');
    const ppServices = document.getElementById('ppServices');
    const ppTimeline = document.getElementById('ppTimeline');
    const ppAbout = document.getElementById('ppAbout');
    const ppImage = document.getElementById('ppImage');
    const ppInner = document.getElementById('ppInner');
    const ppBigImg = document.getElementById('ppBigImg');
    const ppProcess = document.getElementById('ppProcess');
    const ppGallery = document.getElementById('ppGallery');
    const ppEndGallery = document.getElementById('ppEndGallery');
    const ppWebsite = document.getElementById('ppWebsite');
    const ppWebsiteBlock = document.getElementById('ppWebsiteBlock');
    const ppBehance = document.getElementById('ppBehance');
    const ppBehanceBlock = document.getElementById('ppBehanceBlock');

    // build an <img> or <video> element depending on the file extension
    const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);
    function mediaTag(src) {
      return isVideo(src)
        ? `<video src="${src}" autoplay muted loop playsinline></video>`
        : `<img src="${src}" alt="">`;
    }
    function makeMedia(src) {
      let el;
      if (isVideo(src)) {
        el = document.createElement('video');
        el.src = src; el.autoplay = true; el.muted = true; el.loop = true; el.playsInline = true;
      } else {
        el = document.createElement('img'); el.src = src; el.alt = '';
      }
      return el;
    }

    // black placeholder with a progress bar shown on a container until its media has loaded
    function mediaPlaceholder(container) {
      if (!container) return;
      const existingFill = container.querySelector(':scope > .mload-fill');
      if (existingFill) existingFill.remove();
      let pending = 0;
      const clear = () => {
        container.classList.remove('media-loading');
        const f = container.querySelector(':scope > .mload-fill');
        if (f) f.remove();
      };
      const done = () => { if (--pending <= 0) clear(); };
      container.querySelectorAll('img, video').forEach((m) => {
        if (getComputedStyle(m).display === 'none') return;   // skip hidden media (e.g. hover videos)
        if (m.tagName === 'IMG') {
          if (m.complete && m.naturalWidth > 0) return;
          pending++;
          m.addEventListener('load', done, { once: true });
          m.addEventListener('error', done, { once: true });
        } else {
          if (m.readyState >= 2) return;
          pending++;
          m.addEventListener('loadeddata', done, { once: true });
          m.addEventListener('error', done, { once: true });
        }
      });
      if (pending > 0) {
        container.classList.add('media-loading');
        container.appendChild(Object.assign(document.createElement('span'), { className: 'mload-fill' }));
        setTimeout(clear, 15000);   // safety net
      }
    }

    // media blocks rise + fade in as they scroll into view inside the popup
    let ppRevealObserver = null;
    let ppRevealTargets = [];
    function ppRevealSetup(els) {
      if (ppRevealObserver) { ppRevealObserver.disconnect(); ppRevealObserver = null; }
      ppRevealTargets = els.filter(Boolean);
      ppRevealTargets.forEach((el) => { el.classList.add('pp-reveal'); el.classList.remove('in-view'); });
      ppRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in-view'); ppRevealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      ppRevealTargets.forEach((el) => ppRevealObserver.observe(el));
    }
    // fallback: reveal on popup scroll too, so nothing can stay hidden
    document.getElementById('ppInner').addEventListener('scroll', () => {
      for (let i = ppRevealTargets.length - 1; i >= 0; i--) {
        const r = ppRevealTargets[i].getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          ppRevealTargets[i].classList.add('in-view');
          ppRevealTargets.splice(i, 1);
        }
      }
    }, { passive: true });
    const ppComp4 = document.getElementById('ppComp4');
    const ppComp5 = document.getElementById('ppComp5');
    const ppSlider = document.getElementById('ppSlider');
    const ppTrack = document.getElementById('ppTrack');
    const ppText = document.getElementById('ppText');

    let sliderRAF = null;
    let processObserver = null;
    let ppScrollLines = null;

    function buildProcess(p) {
      ppProcess.innerHTML = '';
      if (processObserver) { processObserver.disconnect(); processObserver = null; }
      if (ppScrollLines) { ppInner.removeEventListener('scroll', ppScrollLines); ppScrollLines = null; }
      if (!p) return;

      const intro = document.createElement('div');
      intro.className = 'pr-intro';
      intro.innerHTML =
        `<h3 class="pr-heading">${p.heading}</h3>` +
        p.intro.map(t => `<p>${t}</p>`).join('') +
        `<span class="pr-process-label">(Process)</span>`;
      ppProcess.appendChild(intro);

      const rows = document.createElement('div');
      rows.className = 'pr-rows';
      p.rows.forEach((r, i) => {
        const num = String(i + 1).padStart(2, '0');
        const row = document.createElement('div');
        row.className = 'pr-row';
        row.innerHTML =
          `<span class="pr-num">(${num})</span>` +
          `<span class="pr-dot"></span>` +
          `<div class="pr-main">` +
            `<span class="pr-title">${r.title}</span>` +
            `<div class="pr-content">` +
              `<p class="pr-desc">${r.desc}</p>` +
              `<span class="pr-deliv-label">(Deliverables)</span>` +
              `<ul class="pr-deliv">${r.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>` +
            `</div>` +
          `</div>`;
        rows.appendChild(row);
      });
      ppProcess.appendChild(rows);

      // accordion toggle: click header toggles (open one closes others; click open → closes)
      rows.querySelectorAll('.pr-row').forEach(row => {
        row.addEventListener('click', (e) => {
          if (e.target.closest('.pr-content')) return;   // don't toggle when clicking inside expanded text
          const wasOpen = row.classList.contains('open');
          rows.querySelectorAll('.pr-row').forEach(r => r.classList.remove('open'));
          if (!wasOpen) row.classList.add('open');
        });
        const title = row.querySelector('.pr-title');
        title.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-hover'));
        title.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-hover'));
      });

      // draw the divider lines left-to-right when the section scrolls into view
      const drawLines = () => {
        rows.classList.add('lines-in');
        if (processObserver) { processObserver.disconnect(); processObserver = null; }
        if (ppScrollLines) { ppInner.removeEventListener('scroll', ppScrollLines); ppScrollLines = null; }
      };
      // primary: viewport-rooted observer (reliable; ppInner has a transform so it's a poor IO root)
      processObserver = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) drawLines();
      }, { threshold: 0.05 });
      processObserver.observe(rows);
      // fallback: scroll check, in case the observer is delayed
      ppScrollLines = () => { if (rows.getBoundingClientRect().top < window.innerHeight) drawLines(); };
      ppInner.addEventListener('scroll', ppScrollLines, { passive: true });
    }

    function buildGallery(groups, target) {
      target = target || ppGallery;
      target.innerHTML = '';
      if (!groups) return;
      groups.forEach(group => {
        if (group && group.composite) {
          const c = document.createElement('div');
          c.className = 'pp-comp ' + group.composite;
          c.innerHTML = group.images
            .map((src, i) => `<div class="comp-item ci${i + 1}">${mediaTag(src)}</div>`)
            .join('');
          target.appendChild(c);
        } else if (group && group.full) {
          const f = document.createElement('div');
          f.className = 'pp-gfull';
          f.appendChild(makeMedia(group.full));
          target.appendChild(f);
        } else {
          const r = document.createElement('div');
          r.className = 'pp-grow';
          group.forEach(src => r.appendChild(makeMedia(src)));
          target.appendChild(r);
        }
      });
    }

    function buildSlider(imgs) {
      if (sliderRAF) { cancelAnimationFrame(sliderRAF); sliderRAF = null; }
      ppTrack.innerHTML = '';
      ppTrack.style.transform = 'translateX(0)';
      if (!imgs || !imgs.length) { ppSlider.style.display = 'none'; return; }
      ppSlider.style.display = '';
      // duplicate the set for a seamless loop
      [...imgs, ...imgs].forEach(src => {
        let el;
        if (/\.(mp4|webm|mov)$/i.test(src)) {
          el = document.createElement('video');
          el.src = src; el.autoplay = true; el.muted = true; el.loop = true; el.playsInline = true;
        } else {
          el = document.createElement('img');
          el.src = src; el.alt = '';
        }
        ppTrack.appendChild(el);
      });

      let pos = 0, half = 0;
      let dragging = false, lastX = 0;
      const measure = () => { half = ppTrack.scrollWidth / 2; };
      ppTrack.querySelectorAll('img').forEach(im => { if (!im.complete) im.addEventListener('load', measure); });
      setTimeout(measure, 80);

      const onDown = (e) => { dragging = true; lastX = e.clientX; ppSlider.classList.add('grabbing'); };
      const onMove = (e) => {
        if (!dragging) return;
        const dx = e.clientX - lastX; lastX = e.clientX;
        pos += dx;
      };
      const onUp = () => { dragging = false; ppSlider.classList.remove('grabbing'); };
      ppSlider.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);

      function tick() {
        if (!dragging) pos -= 0.6;            // auto-scroll left
        if (half) {                           // infinite wrap
          if (pos <= -half) pos += half;
          if (pos > 0) pos -= half;
        }
        ppTrack.style.transform = `translateX(${pos}px)`;
        sliderRAF = requestAnimationFrame(tick);
      }
      tick();
    }

    function openProject(key) {
      const d = PROJECTS[key];
      if (!d) return;
      ppTitle.textContent = d.title;
      ppTimeline.textContent = d.timeline;
      ppServices.textContent = d.services.join(',  ');
      ppAbout.innerHTML = d.about.map(p => `<p>${p}</p>`).join('');
      if (d.website) {
        ppWebsiteBlock.style.display = '';
        ppWebsite.textContent = d.website.replace(/^https?:\/\//, '');
        ppWebsite.href = /^https?:\/\//.test(d.website) ? d.website : 'https://' + d.website;
      } else {
        ppWebsiteBlock.style.display = 'none';
      }
      if (d.behance) {
        ppBehanceBlock.style.display = '';
        ppBehance.textContent = 'View on Behance';
        ppBehance.href = d.behance;
      } else {
        ppBehanceBlock.style.display = 'none';
      }
      ppImage.src = d.image;
      if (d.bigImageCols) {
        ppBigImg.className = 'pp-bigimg pp-bigimg-2col';
        ppBigImg.innerHTML = d.bigImageCols.map((src) => `<div class="bi-col">${mediaTag(src)}</div>`).join('');
      } else {
        ppBigImg.className = 'pp-bigimg';
        ppBigImg.innerHTML = d.bigImage ? mediaTag(d.bigImage) : '';
      }
      ppComp4.innerHTML = d.comp4
        ? `<div class="comp-item c-navy"><img src="${d.comp4.navy}" alt=""></div>` +
          `<div class="comp-item c-laptop"><img src="${d.comp4.laptop}" alt=""></div>` +
          `<div class="comp-item c-family"><img src="${d.comp4.family}" alt=""></div>`
        : '';
      ppComp5.innerHTML = d.comp5
        ? `<div class="comp-item c-land"><img src="${d.comp5.land}" alt=""></div>` +
          `<div class="comp-item c-card"><img src="${d.comp5.card}" alt=""></div>`
        : '';
      ppText.innerHTML = d.outro
        ? `<div class="pp-text-col"><h3 class="pp-text-h">${d.outro.heading}</h3>${d.outro.paragraphs.map(p => `<p>${p}</p>`).join('')}</div>`
        : '';
      buildProcess(d.process);
      buildGallery(d.gallery);
      buildGallery(d.endGallery, ppEndGallery);
      buildSlider(d.slider);
      // loading placeholders (black cover + progress bar) until each block's media is ready
      mediaPlaceholder(document.querySelector('.pp-right'));
      if (d.bigImageCols) {
        ppBigImg.querySelectorAll('.bi-col').forEach(mediaPlaceholder);
      } else {
        mediaPlaceholder(ppBigImg);
      }
      document.querySelectorAll('#ppComp4 .comp-item, #ppComp5 .comp-item').forEach(mediaPlaceholder);
      [ppGallery, ppEndGallery].forEach((g) => {
        g.querySelectorAll('.comp-item, .pp-grow, .pp-gfull').forEach(mediaPlaceholder);
      });
      mediaPlaceholder(ppSlider);
      // scroll-in reveal for every media block (big image, galleries, composites, slider)
      const revealEls = [ppSlider];
      if (d.bigImageCols) {
        ppBigImg.querySelectorAll('.bi-col').forEach((el, i) => { el.style.animationDelay = (i * 0.12).toFixed(2) + 's'; revealEls.push(el); });
      } else {
        revealEls.push(ppBigImg);
      }
      [ppGallery, ppEndGallery].forEach((g) => revealEls.push(...g.querySelectorAll('.pp-grow, .pp-gfull')));
      // comp4/comp5 (Faith's final composites) reveal as ONE unit, so both images appear together
      [ppComp4, ppComp5].forEach((c) => { if (c.children.length) revealEls.push(c); });
      [ppGallery, ppEndGallery].forEach((g) => {
        g.querySelectorAll('.pp-comp').forEach((c) => {
          c.querySelectorAll('.comp-item').forEach((ci, i) => { ci.style.animationDelay = (i * 0.12).toFixed(2) + 's'; revealEls.push(ci); });
        });
      });
      ppRevealSetup(revealEls);
      ppInner.scrollTop = 0;
      popup.classList.add('open');
      document.documentElement.classList.add('pp-scroll-lock');   // freeze the page behind
      // shareable link: the URL now points straight at this project (e.g. …#aura)
      try { history.replaceState(null, '', '#' + key); } catch (e) {}
    }
    function closeProject() {
      popup.classList.remove('open');
      document.documentElement.classList.remove('pp-scroll-lock');
      if (sliderRAF) { cancelAnimationFrame(sliderRAF); sliderRAF = null; }
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    }
    window.openProject = openProject;

    document.querySelectorAll('[data-project]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openProject(el.dataset.project);
      });
    });

    document.getElementById('ppClose').addEventListener('click', closeProject);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProject(); });
    // click on the dark overlay (outside the card) closes the modal
    popup.addEventListener('click', (e) => { if (e.target === popup) closeProject(); });

    // cursor hover on popup close
    document.getElementById('ppClose').addEventListener('mouseenter', () => cursorDot.classList.add('cursor-hover'));
    document.getElementById('ppClose').addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-hover'));

    // loading placeholders for the static page media (hero photos, work cards, grid covers, about photos)
    document.querySelectorAll('.photo-clip, .wi, .gc-img, .ap-photo').forEach(mediaPlaceholder);

    // deep link: a shared URL like …work.html#aura opens that project right away
    const hashKey = decodeURIComponent(location.hash.replace('#', ''));
    if (hashKey && PROJECTS[hashKey]) openProject(hashKey);
  window.openProject=openProject;
})();
