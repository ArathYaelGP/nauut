const sidebarHtml = '<div class="togo-header-container">\n' +
    '    <!-- Logo -->\n' +
    '    <div class="logo">\n' +
    '        <h1><a href="index.html">NAUUT<span>ARQUITECTOS</span></a></h1>\n' +
    '    </div>\n' +
    '    <!-- Burger menu -->\n' +
    '    <div class="burger-menu">\n' +
    '        <div class="line-menu line-half first-line"></div>\n' +
    '        <div class="line-menu"></div>\n' +
    '        <div class="line-menu line-half last-line"></div>\n' +
    '    </div>\n' +
    '    <!-- Navigation menu -->\n' +
    '    <nav class="togo-menu-fixed">\n' +
    '        <ul>\n' +
    '            <li class="current-menu"><a href="index.html">Inicio</a></li>\n' +
    '            <li><a href="about.html">Nosotros</a></li>\n' +
    '            <li><a href="services.html">Servicios</a></li>\n' +
    '            <li><a href="projects.html">Proyectos</a></li>\n' +
    '            <li><a href="projects.html">Proyectos en stok</a></li>\n' +
    // '            <li><a href="#">Pages</a>\n' +
    // '                <ul>\n' +
    // '                    <li><a href="gallery.html">Gallery</a></li>\n' +
    // '                    <li><a href="team.html">Team</a></li>\n' +
    // '                    <li><a href="team-details.html">Team Details</a></li>\n' +
    // '                    <li><a href="faq.html">Faqs</a></li>\n' +
    // '                    <li><a href="careers.html">Careers</a></li>\n' +
    // '                    <li><a href="404.html">404 Page</a></li>\n' +
    // '                    <li><a href="#">Other Pages</a>\n' +
    // '                        <ul>\n' +
    // '                            <li><a href="services-page.html">Services Page</a></li>\n' +
    // '                            <li><a href="projects-page.html">Project Page</a></li>\n' +
    // '                            <li><a href="post.html">Post Page</a></li>\n' +
    // '                        </ul>\n' +
    // '                    </li>\n' +
    // '                </ul>\n' +
    // '            </li>\n' +
    '            <li><a href="contact.html">Contacto</a></li>\n' +
    '        </ul>\n' +
    '    </nav>\n' +
    '    <!-- Menu social media -->\n' +
    '    <div class="togo-menu-social-media">\n' +
    '        <div class="social">\n' +
    '            <a href="https://www.facebook.com/NAAUT7"><i class="ti-facebook"></i></a>\n' +
    '            <a href="#"><i class="ti-twitter"></i></a>\n' +
    '            <a href="#"><i class="ti-instagram"></i></a>\n' +
    '        </div>\n' +
    '        <div class="togo-menu-copyright">\n' +
    '            <p>© 2023 NAUUT ARQUITECTOS</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'

const container = document.getElementById('sidebar');
container.innerHTML = sidebarHtml;