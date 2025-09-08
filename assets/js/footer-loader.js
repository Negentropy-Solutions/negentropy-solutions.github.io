// Footer loader script
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="pb-2 pb-lg-5" id="contact">

          <div class="container">
            <div class="row border-top border-top-secondary pt-7">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1"><img class="mb-4" src="assets/img/logo.svg" width="184" alt="" /></div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
                <p class="fs-2 mb-lg-4">Contact</p>
                <b>India Office</b><br>
                IC-01, Block A, SJCE STEP<br>
                JSS Technical Institute Campus<br>
                Mysuru - 570006, Karnataka, India
                <br/>
                <br/>
                <b>US Office</b><br>
                Negentropy Solutions LLC<br>
                1401 21ST ST STE R<br>
                SACRAMENTO, CA 95811<br>
                United States
                <br/>
                <br/>
                <b>Email</b><br>
                hello@negentropysolutions.com
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
                <p class="fs-2 mb-lg-4">Quick Links</p>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="${window.location.pathname.includes('index.html') || window.location.pathname === '/' ? '#home' : 'index.html#home'}">Home</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="${window.location.pathname.includes('index.html') || window.location.pathname === '/' ? '#about' : 'index.html#about'}">About Us</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="${window.location.pathname.includes('index.html') || window.location.pathname === '/' ? '#services' : 'index.html#services'}">Services</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="${window.location.pathname.includes('index.html') || window.location.pathname === '/' ? '#erpnext' : 'index.html#erpnext'}">ERPNext</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="fullfillo.html">FullFillo</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
                <p class="fs-2 mb-lg-4">Legal stuff</p>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="disclaimer.html">Disclaimer</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="privacy-policy.html">Privacy Policy</a></li>
                  <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="terms-of-service.html">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div><!-- end of .container-->

        </section>
        <!-- <section> close ============================-->
        <!-- ============================================-->



        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="text-center py-0">

          <div class="container">
            <div class="container border-top py-3">
              <div class="row justify-content-between">
                <div class="col-12 col-md-auto mb-1 mb-md-0">
                  <p class="mb-0">&copy; 2025 Negentropy Solutions Private Limited</p>
                </div>

              </div>
            </div>
          </div><!-- end of .container-->

        </section>
        <!-- <section> close ============================-->
        <!-- ============================================-->
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
