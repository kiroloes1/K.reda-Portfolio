let projectData = [
  {
     id: "proj1",
    imageSrc: "./pic/projectData/p3-simplePortofolio.png",
    title: "Simple Portfolio",
    description: "A personal responsive portfolio to showcase projects and skills.",
    Category: "Portfolio",
    date:"old",
    link:"https://kiroloes1.github.io/My-Website/#Projects",
        
        listImage:["/pic/image/bootstrap/P3.png","./pic/image/bootstrap/P33.png","./pic/image/bootstrap/P333.png",
        "./pic/image/bootstrap/P3333.png",
    ]
  },
  {
     id: "proj2",
    imageSrc: "./pic/projectData/p4-eduPlatform.png",
    title: "Education Platform",
    description: "A platform for learning with courses, users, and testing functionality.",
    Category: "Education"
    ,
    date:"recrntaly"
    ,
        link: "https://kiroloes1.github.io/EduPlatform/",
        listImage:["./pic/image/bootstrap/P4.png","./pic/image/bootstrap/P44.png","./pic/image/bootstrap/P444.png",
        "./pic/image/bootstrap/P4444.png","./pic/image/bootstrap/P44444.png",
        "./pic/image/bootstrap/P444444.png"
    ]
  },
  {
     id: "proj3",
    imageSrc: "./pic/projectData/p5-e-shopping.png",
    title: "E-Shopping Website",
    description: "An e-commerce front-end for product browsing and purchase.",
    Category: "E-commerce"
    ,
    link:"https://kiroloes1.github.io/Fashion-Store/index.html",
    date:"recrntaly"
    ,      listImage:["./pic/image/bootstrap/P5.png","./pic/image/bootstrap/P55.png","./pic/image/bootstrap/P555.png",
        "./pic/image/bootstrap/P5555.png","./pic/image/bootstrap/P55555.png",
        "./pic/image/bootstrap/P555555.png","./pic/image/bootstrap/P5555555.png","./pic/image/bootstrap/P55555555.png","./pic/image/bootstrap/P555555555.png"
        ,"./pic/image/bootstrap/P5555555555.png","./pic/image/bootstrap/P55555555555.png"
    ]
  },

  {
     id: "proj4",
    imageSrc: "./pic/projectData/p6-mangment.png",
    title: "Management System",
    description: "A management interface for handling users or products.",
    Category: "Dashboard / Admin"
        ,
            link: "https://kiroloes1.github.io/manegment-website/index.html",
    date:"recrntaly",
        listImage:["./pic/image/bootstrap/P8.png","./pic/image/bootstrap/P88.png","./pic/image/bootstrap/P888.png",
        "./pic/image/bootstrap/P8888.png","./pic/image/bootstrap/P88888.png",
        "./pic/image/bootstrap/P888888.png"
    ]
  },

  {
     id: "proj5",
    imageSrc: "./pic/projectData/p8-lapstore.png",
    title: "LapStore",
    description: "An online store for laptops with detailed product views.",
    Category: "E-commerce"
        ,
        link: "https://kiroloes1.github.io/lap-store/index.html",
    date:"recrntaly",
      listImage:["./pic/image/bootstrap/P9.png","./pic/image/bootstrap/P99.png","./pic/image/bootstrap/P999.png",
        "./pic/image/bootstrap/P9999.png","./pic/image/bootstrap/P99999.png",
        "./pic/image/bootstrap/P999999.png",
        "./pic/image/bootstrap/P9999999.png","./pic/image/bootstrap/P99999999.png",
        "./pic/image/bootstrap/P999999999.png"
    ]
  },
  {
     id: "proj6",
    imageSrc: "./pic/projectData/p9-simpleLandingPage.png",
    title: "Simple Landing Page",
    description: "A clean landing page for promoting a product or service.",
    Category: "Landing Page"
        ,
        link: "https://kiroloes1.github.io/Landin-Page/",
    date:"recrntaly",
    listImage:["./pic/projectData/p9-simpleLandingPage.png"]
  },

  {
     id: "proj7",
    imageSrc: "./pic/projectData/project1.png",
    title: "Bootstrap project",
    description: "Custom web project with unique features.",
    Category: "Other"
        ,
    date:"recrntaly",
    link: "https://kiroloes1.github.io/shopping-by-bootstrap/?#footer",
    listImage:["./pic/image/bootstrap/P1.png","./pic/image/bootstrap/P11.png","./pic/image/bootstrap/P111.png",
        "./pic/image/bootstrap/P1111.png","./pic/image/bootstrap/P11111.png",
        "./pic/image/bootstrap/P111111.png"
    ]
  },

    {
         id: "proj8",
    imageSrc: "./pic/projectData/p7-basthalk.png",
    title: "Basthalk",
    description: "A communication or chat platform interface.",
    Category: "Communication"
        ,
        link: "https://kiroloes1.github.io/basthalk/",
    date:"recrntaly",
           listImage:["./pic/image/bootstrap/P7.png","./pic/image/bootstrap/p77.png","./pic/image/bootstrap/P777.png",
        "./pic/image/bootstrap/P7777.png","./pic/image/bootstrap/P77777.png",
        "./pic/image/bootstrap/P777777.png","./pic/image/bootstrap/P7777777.png","./pic/image/bootstrap/P77777777.png"
    ]
  },

    {
         id: "proj9",
    imageSrc: "./pic/projectData/p10-bestCoffee.png",
    title: "Best Coffee",
    description: "A modern website for a coffee brand or shop.",
    Category: "Business"
        ,
    date:"recrntaly",
    link: "https://kiroloes1.github.io/Best_Coffee/#",
               listImage:["./pic/image/bootstrap/P6.png","./pic/image/bootstrap/p66.png","./pic/image/bootstrap/P666.png",
        "./pic/image/bootstrap/P6666.png"
    ]
  },

  {
     id: "proj10",
    imageSrc: "./pic/projectData/project2-localtube.png",
    title: "LocalTube",
    description: "A local video platform similar to YouTube.",
    Category: "Media / Video"
        ,
         link: "https://kiroloes1.github.io/localTube/",
    date:"old",
    listImage:["./pic/projectData/project2-localtube.png"]
  }
];

const card=document.querySelector(".product-element")


projectData.forEach((project) => {
  const carouselId = `carousel-${project.id}`;

  let carouselInner = "";

  if (project.listImage && project.listImage.length > 0) {
    const imagesHTML = project.listImage.map((img, index) => {
      return `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${img}" class="d-block w-100 img-fluid" alt="${project.title}">
        </div>
      `;
    }).join("");

    carouselInner = `
<div id="carouselExample-${project.id}" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    ${project.listImage.map((img, idx) => `
      <div class="carousel-item ${idx === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100" alt="...">
      </div>
    `).join('')}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample-${project.id}" data-bs-slide="prev">
    <span class="fa-solid fa-chevron-left fa-2x text-dark"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample-${project.id}" data-bs-slide="next">
    <span class="fa-solid fa-chevron-right fa-2x text-dark"></span>
  </button>
</div>
    `;
  } else {
    carouselInner = `<p>No additional images available.</p>`;
  }

  card.innerHTML += `
    <div class="col-11 col-sm-10 col-md-5 col-lg-4 col-xl-3 m-2">
      <div class="card project-card border-0 overflow-hidden">
        <div>
          <img 
            src="${project.imageSrc}" 
            class="card-img-top project-img" 
            data-bs-toggle="modal" 
            data-bs-target="#${project.id}" 
            alt="${project.title}"
          >
        </div>
        <div class="card-body bg-white">
          <h5 class="card-title fw-bold">${project.title}</h5>
          <p class="card-text text-muted">${project.description}</p>
          <div class="d-flex justify-content-between text-muted small mt-3">
            <span><i class="bi bi-folder2-open"></i> ${project.Category}</span>
            <span><i class="bi bi-calendar-event"></i> ${project.date}</span>
          </div>
          ${
            project.link
              ? `<div class="mt-3 text-end">
                  <a href="${project.link}" target="_blank" class="btn btn-outline-secondary btn-sm d-flex justify-content-center">
                    <i class="bi bi-box-arrow-up-right"></i> Visit Site
                  </a>
                </div>`
              : ""
          }
        </div>
      </div>
    </div>

    <div class="modal fade" id="${project.id}" tabindex="-1" aria-labelledby="modalLabel-${project.id}" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalLabel-${project.id}">${project.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${carouselInner}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            ${
              project.link 
                ? `<a href="${project.link}" target="_blank" class="btn btn-primary">Visit Site</a>` 
                : ""
            }
          </div>
        </div>
      </div>
    </div>
  `;
});
