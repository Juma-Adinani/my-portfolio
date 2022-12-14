let ImgPath = process.env.PUBLIC_URL + "assets/img/portfolio/";
const ProjectData = {
  myProjects: [
    {
      id: 1,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-web`,
      img: `${ImgPath}instadalali.JPG`,
      title: `App 1`,
      appName: `Instadalali Web App`,
      category: `Web application`,
      client: `HudumaBomba Company`,
      projectUrl: `https://instadalali.com/`,
      description: `hello world, this is amazing instadalali web application`,
    },
    {
      id: 2,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-web`,
      img: `${ImgPath}niwezeshe.JPG`,
      title: `App 2`, 
      appName: `Niwezeshe website`,
      category: `Website`,
      client: `HudumaBomba Company`,
      projectUrl: `https://niwezeshe.hudumabomba.com/`,
      description: `Awesomemly`,
    },
    {
      id: 3,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-web`,
      img: `${ImgPath}northbeyond.JPG`,
      title: `App 3`,
      appName: `North & beyond website`,
      category: `Website`,
      client: `Hennessy Limited`,
      projectUrl: `http://northbeyond.com/`,
      description: `hello world, this is amazing instadalali web application`,
    },
    {
      id: 4,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-web`,
      img: `${ImgPath}jp.JPG`,
      title: `App 4`,
      appName: `J&P ICT TRAINING WEBSITE`,
      category: `Website`,
      client: `J&P ELECTRONICS`,
      projectUrl: `empty`,
      description: `hello world, this is amazing instadalali web application`,
    },
    {
      id: 5,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-web`,
      img: `${ImgPath}royaltour.JPG`,
      title: `App 5`,
      appName: `Tanzania the Royal Tour Website`,
      category: `Website`,
      client: `Own Project`,
      projectUrl: `https://tanzaniatheroyaltour.herokuapp.com/`,
      description: `Instadalali web application`,
    },
    {
      id: 6,
      divFilterClass: `col-lg-4 col-md-6 portfolio-item filter-app`,
      img: `${ImgPath}nouri.png`,
      title: `App 6`,
      appName: `Nouri caf?? delivery app`,
      category: `Mobile Application`,
      client: `Nouri Cafe - Arusha`,
      projectUrl: `empty`,
      description: `This is awesome, made me cry for somedays`,
    },
  ],
};

export default ProjectData;
