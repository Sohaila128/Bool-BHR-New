function MainNavigation() {
  document.write(`
  <!------- Header ------->
  <div class="header bg-primary flex-column flex-md-row bg-white p-1">
    <div class="container d-flex justify-content-between flex-md-row">
      <!-- Header Content -->
      <div class="d-flex">
        <!-- Email Link -->
        <a href="" target="_blank" class="text-secondary text-decoration-none link-primary d-flex align-items-center mx-2">
          <span class="fs-14 mx-1 mt-1">operations@alfarhoodport.com</span>
          <div><img src="images/sms.svg" alt=""></div>
        </a>
        <!-- Phone Link -->
        <a href="" target="_blank" class="text-secondary text-decoration-none link-primary d-flex align-items-center">
          <span class="fs-14 mx-1 mt-1">+966 56 627 2746</span>
          <div><img src="images/phone.svg" alt=""></div>
        </a>
      </div>
  
      <!-- Social Media Icons (Visible on medium and larger screens) -->
      <div class="d-flex justify-content-lg-between justify-content-between d-none d-md-block">
        <a href="" class="text-decoration-none mx-2">
          <i class="fa-brands fa-facebook-f text-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-twitter text-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-instagram text-secondary rounded-2 link-primary"></i>
        </a>
        <a href="" class="text-decoration-none mx-2" target="_blank">
          <i class="fa-brands fa-whatsapp text-secondary rounded-2 link-primary"></i>
        </a>
      </div>
    </div>
  </div>
  <!------------ Header End ------------>
  <!-- Start Navbar -->
  <nav class="navbar navbar-expand-lg bg-gradient py-0">
    <div class="container">
      <!-- Logo -->
      <a href="index.html" class="navbar-brand ms-auto me-lg-0">
        <img src="images/logo.svg"/>
      </a>
      <!-- Navbar Toggler for Mobile View -->
      <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar" class="navbar-nav ms-auto mb-lg-0 d-flex px-3">
          <!-- Home Link -->
          <li class="nav-item mx-2 fw-600">
            <a class="nav-link text-white active link-white text-capitalize" href="index.html">الصفحة الرئيسية</a>
          </li>
          <!-- Rest Areas Link -->
          <li class="nav-item mx-2 fw-600">
            <a class="nav-link text-white link-white text-capitalize" href="rest-areas.html">الأستراحات</a>
          </li>
          <!-- About Us Link -->
          <li class="nav-item mx-2 fw-600">
            <a class="nav-link text-white link-white text-capitalize" href="about-us.html">من نحن</a>
          </li>
          <!-- Contact Us Link -->
          <li class="nav-item mx-2 fw-600">
            <a class="nav-link text-white link-white text-capitalize" href="contact-us.html"> تواصل معنا</a>
          </li>
        </ul>
        <!-- Language Switch Link -->
        <a class="nav-link text-white link-white text-capitalize d-flex align-items-center" href="">
          English
          <div><img src="images/translate.svg" class="mx-2" alt=""></div>
        </a>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
  `);
}
function MainFooter() {
  document.write(`
  <footer class="py-5 bg-gradient">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
        <a href="index.html" class="d-flex align-items-center text-decoration-none">
          <div>
            <img src="images/logo.svg" class="img-fluid" alt="">
          </div>
          <div>
            <img src="images/image_31515-removebg-preview 2.svg" class="img-fluid" alt="">
          </div>
        </a>
        <p class="text-white">برك البحرين تتيح لك مشاهدة جميع الاستراحات والبرك والشاليهات والمخيمات والملاعب داخل مملكة البحرين, كما يمكنك التأكد ايضا من الأيام المتاحة للحجز عن طريق التويم الموجود داخل كل قسم, ويمكنك التواصل مع المالك لتأكيد الحجز في الموعد الذي قمت باختياره من خلالنا, والعديد من المميزات والخصائص تجدوه من خلالنا. </p>
      </div>
      <div class="col-lg-4 col-md-6  mt-5 mt-lg-0">
        <div>
          <h3 class="text-white mb-4">برك البحرين</h3>
          <div class="row">
            <div class="col-md-6 d-flex flex-column">
              <a href="rest-areas.html" class="text-decoration-none text-white mb-3">الأستراحات</a>
              <a href="terms-conditions.html" class="text-decoration-none text-white mb-3">الشروط والأحكام</a>
              <a href="contact-us.html" class="text-decoration-none text-white mb-3">تواصل معانا</a>
            </div>
            <div class="col-md-6 d-flex flex-column">
              <a href="privacy-policy.html" class="text-decoration-none text-white mb-3">سياسة الخصوصية</a>
              <a href="faq.html" class="text-decoration-none text-white mb-3">الأسئلة الشائعة</a>
              <a href="about-us.html" class="text-decoration-none text-white mb-3">من نحن</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12  mt-5 mt-lg-0">
        <div class="row">
          <div class="col-lg-7 col-md-6">
            <h3 class="text-white mb-4">تواصل معانا</h3>
            <div>
              <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
                <div>
                  <img src="images/location.svg" alt="">
                </div>
              <span class="text-white mx-1 mt-1"> مملكة البحرين</span> 
              </a>
              <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
                <div>
                  <img src="images/call.svg" alt="">
                </div>
              <span class="text-white mx-1 mt-1"> 973 56 627 2746+</span> 
              </a>
              <a href="" target="_blank" class="d-flex align-items-center mb-2 text-decoration-none">
                <div>
                  <img src="images/sms-two.svg" alt="">
                </div>
              <span class="text-white mx-1 mt-1">operations@poolbhr.com</span> 
              </a>  
            </div>
            <ul class="list-unstyled mt-5 p-0">
              <div class="row g-4">
                <div class="col-lg-12 d-flex justify-content-lg-between col-6 col-md-12 justify-content-between">
                  <a href="" class="text-decoration-none" target="_blank">
                    <i class="fa-brands fa-whatsapp text-white fs-4 rounded-2"></i>
                  </a>
                  <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-instagram  text-white fs-4 rounded-2"></i></a>
                  <a href="" class="text-decoration-none" target="_blank">
                    <i class="fa-brands fa-twitter text-white fs-4 rounded-2"></i>
                  </a>
                  
                  <a href="" class="text-decoration-none" target="_blank"><i class="fa-brands fa-facebook-f text-white fs-4 rounded-2"></i></a>
                </div>
              
              </div>
            </ul>  
          </div>
          <div class="col-lg-5 col-md-6">
            <h3 class="text-white mb-4" style="white-space: nowrap;"> حمل التطبيق </h3>
            <div>
              <img src="images/app-store-and-google-play 2.svg" alt="" class="img-fluid mb-3">
            </div>
            <div>
              <img src="images/app-store-and-google-play 3.svg" alt="" class="img-fluid mb-3">
            </div>
          </div>
        </div>
      </div>
    </div>
      <hr class="text-white border-white"/>
    <div class="d-flex align-items-start justify-content-between flex-column flex-md-row">
      <div class="d-flex align-items-center">
        <div>
          <img src="images/location.svg" alt="">
        </div>
      <span class="text-white mx-1 mt-1"> مملكة البحرين</span> 
      </div>
      <div class="text-white">
        <span style="white-space:nowrap; class="text-white fw-normal"> Powered By <a target="_blank" href="https://www.linkedin.com/in/sohaila-abo-el-wafa-a2b417248/" class="fw-semibold text-decoration-none fw-normal text-white">  Sohaila Abo El-Wafa</a></span>
      </div>
      <div class="text-white">
        <span style="white-space:nowrap; class="text-white fw-normal"> جميع الحقوق محفوظة لدي   <span class="fw-semibold fw-normal text-white">برك البحرين</span> @2024 </span>
      </div>
    </div>
  </div>
</footer>
  `);
}

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white">
  <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  <h1 class="text-primary">Pool BHR</h1>
  </div>
  <div class="offcanvas-body bg-white hover-links">
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item fw-bold ">
          <a class="nav-link text-primary active link-secondary" href="index.html">الصفحة الرئيسية</a>
      </li>
      <li class="nav-item fw-bold ">
          <a class="nav-link text-primary active link-secondary" href="rest-areas.html">الأستراحات</a>
      </li>
      <li class="nav-item fw-bold ">
          <a class="nav-link text-primary active link-secondary" href="about-us.html">من نحن</a>
      </li>
      <li class="nav-item fw-bold ">
          <a class="nav-link text-primary active link-secondary" href="contact-us.html">تواصل معنا</a>
      </li>
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}


function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}