document.addEventListener('DOMContentLoaded', function() {
    // 导航栏响应式菜单
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // 切换导航菜单
        nav.classList.toggle('active');
        
        // 汉堡按钮动画
        burger.classList.toggle('toggle');
        
        // 链接动画
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // 点击导航链接后关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 下载简历按钮
    const downloadResumeBtn = document.getElementById('download-resume');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('简历下载功能即将上线');
        });
    }
    
    // 添加滚动动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 为各个部分添加动画
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 为研究卡片添加动画
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // 为时间线项添加动画
    const timelineItems = document.querySelectorAll('.timeline-item, .cv-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
    
    // 为荣誉项添加动画
    const honorItems = document.querySelectorAll('.honor-item');
    honorItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // 为联系项添加动画
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // 添加暗黑模式切换功能（未来扩展）
    // const darkModeToggle = document.createElement('button');
    // darkModeToggle.id = 'dark-mode-toggle';
    // darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    // document.body.appendChild(darkModeToggle);
    
    // darkModeToggle.addEventListener('click', () => {
    //     document.body.classList.toggle('dark-mode');
    //     const icon = darkModeToggle.querySelector('i');
    //     if (document.body.classList.contains('dark-mode')) {
    //         icon.classList.remove('fa-moon');
    //         icon.classList.add('fa-sun');
    //     } else {
    //         icon.classList.remove('fa-sun');
    //         icon.classList.add('fa-moon');
    //     }
    // });
});

// 添加汉堡按钮动画
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('toggle');
});

// 添加CSS类用于汉堡按钮动画
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .burger.toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        .burger.toggle .line2 {
            opacity: 0;
        }
        .burger.toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        header.scrolled {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            background-color: rgba(255, 255, 255, 0.98);
        }
        
        /* 滚动动画 */
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        section.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .research-card, .timeline-item, .cv-item, .honor-item, .contact-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .research-card.animate, .timeline-item.animate, .cv-item.animate, .honor-item.animate, .contact-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* 暗黑模式按钮样式 */
        #dark-mode-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
            transition: all 0.3s ease;
        }
        
        #dark-mode-toggle:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
});