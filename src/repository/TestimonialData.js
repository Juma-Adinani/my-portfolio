let ImgPath = process.env.PUBLIC_URL + "assets/img/testimonials/";
const TestimonialData = {
  testimonials: [
    {
      id: 1,
      quote: `Juma is very hard working, honest with work, and intelligent.He is fast learner, and always eager to learn new technologies.Beside being hard worker and always looking for performing 110%, he is also a good socializer.Must to have on one's tech team.`,
      img: `${ImgPath}profile.jpg`,
      name: "Elijah James",
      status: "Developer",
    },
    {
      id: 2,
      quote: `I have observed Juma as a great problem solver.He is quick learner who can unlearn, relearn and adapt to the latest tech-related practices.You will find him as a great team player.When it comes to writing clean code, he is the perfect fit for any company.`,
      img: `${ImgPath}profile.jpg`,
      name: "Pascal Giki",
      status: "Developer",
    },
    {
      id: 3,
      quote: `Juma is a great team player and very easy to work with.He understands quickly and very good at researching.Would definitely want to work with him again.`,
      img: `${ImgPath}profile.jpg`,
      name: "Pascal Mgasa",
      status: "Ceo J&P Electronics Co.",
    },

    {
      id: 4,
      quote: `I was particularly impressed by Juma's ability to handle even the toughest situation-effortlessly.He writes good quality code.He is a good developer and a good friend.`,
      img: `${ImgPath}profile.jpg`,
      name: "Elizabeth Shija",
      status: "Developer",
    },
  ],
};
export default TestimonialData;
