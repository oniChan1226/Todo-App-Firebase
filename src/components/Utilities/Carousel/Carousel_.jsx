import Carousel from "react-material-ui-carousel";

const Carousel_ = () => {
  const carouselItems = [
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/life-balance-choices-signpost-sunrise-sky-backgrounds-89731238.jpg",
      caption: "first slide caption",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/ai-generative-river-with-signboard-word-life_784584-9381.jpg",
      caption: "second slide caption",
    },
    {
      imgSrc:
        "https://i0.wp.com/photofocus.com/wp-content/uploads/2019/04/JuliePowell_Into-to-Still-Life.jpg?fit=1920%2C1080&ssl=1",
      caption: "third slide caption",
    },
  ];

  return (
    <div className="col-span-full w-full mt-10 md:mt-16 mb-5 h-auto md:h-[80vh] px-5">
      <Carousel className="w-full h-auto md:h-[80vh] px-5">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-auto md:h-[80vh]">
            <img
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4 text-white text-center">
              {item.caption}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel_;
