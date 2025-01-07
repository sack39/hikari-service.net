<!-- drawer -->
<script>
  $("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    $("#js-drawer-icon").toggleClass("is-checked");
    $(".header").toggleClass("is-checked");
    $("#js-drawer-content").toggleClass("is-checked");
    $("body").toggleClass("is-fixed");
  });
</script>

<!-- works splide -->
<script>
  new Splide(".splide-works", {
    type: "loop",
    arrows: true,
    pagination: true,
    gap: 12,
    autoWidth: true,
    drag: "free",
    focus: "center",
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    mediaQuery: "min",
    breakpoints: {
      768: {
        gap: 24,
        autoScroll: {
          speed: 1.5,
        },
      },
      2200: {
        gap: 36,
      },
    },
    classes: {
      arrows: "splide__arrows works-item__arrows",
      arrow: "splide__arrow works-item__arrow",
      prev: "splide__arrow--prev works-item__button-prev",
      next: "splide__arrow--next works-item__button-next",

      pagination: "splide__pagination works-item__pagination", // container
      page: "splide__pagination__page works-item__pagination-bullet", // each button
    },
  }).mount(window.splide.Extensions);
</script>

<!-- blog splide -->
<script>
  new Splide(".splide-blog", {
    type: "loop",
    arrows: true,
    pagination: false,
    gap: 12,
    autoWidth: true,

    mediaQuery: "min",
    breakpoints: {
      1024: {
        destroy: true,
      },
    },

    classes: {
      arrows: "splide__arrows blog-item__arrows",
      arrow: "splide__arrow blog-item__arrow",
      prev: "splide__arrow--prev blog-item__button-prev",
      next: "splide__arrow--next blog-item__button-next",
    },
  }).mount();
</script>

<!-- blog 文字制限 -->
<script>
  const windowWidth = window.innerWidth;

  if (windowWidth < 1024) {
    const limits = document.querySelectorAll(".blog-item__text");
    const len = 73;

    limits.forEach((limit) => {
      const str = limit.textContent;
      if (str.length > len) {
        limit.textContent = str.substring(0, len) + "…";
      }
    });
  } else {
    const limits = document.querySelectorAll(".blog-item__text");
    const len = 100;

    limits.forEach((limit) => {
      const str = limit.textContent;
      if (str.length > len) {
        limit.textContent = str.substring(0, len) + "…";
      }
    });
  }
</script>

<!-- works scrollHint -->
<script>
  $(function () {
    var scrollHint;
    $(window).on("load resize", function () {
      var w = $(window).width();
      if (w <= 1024) {
        if (scrollHint) {
          return;
        } else {
          scrollHint = new ScrollHint(".js-scrollable", {
            remainingTime: 3000,
            suggestiveShadow: true,
            i18n: {
              scrollable: "スクロールできます",
            },
          });
        }
      } else {
        if (scrollHint) {
          scrollHint.destroy();
          scrollHint = undefined;
        }
      }
    });
  });
</script>

<!-- smooth scroll -->
<script>
  // pc
  $('a[href^="#"]').on("click", function (e) {
    const speed = 700;
    const id = $(this).attr("href");
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
  });

  // sp
  $('#js-drawer-content a[href^="#"]').on("click", function (e) {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("is-checked");
    $("body").removeClass("is-fixed");
  });
</script>

<!-- fade in/up animation -->
<script>
  const intersectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
      } else {
        // entry.target.classList.remove("is-in-view");
      }
    });
  });

  const inViewItems = document.querySelectorAll(".js-in-view");
  inViewItems.forEach(function (inViewItem) {
    intersectionObserver.observe(inViewItem);
  });
</script>