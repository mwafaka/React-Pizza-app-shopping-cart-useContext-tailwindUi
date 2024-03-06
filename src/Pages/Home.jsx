import { Carousel } from "@material-tailwind/react";
// Home.js


const Home = () => {
  return (
    <div>
      <Carousel style={{height:'93.4vh'}}>
       <img
         src="./caroussel1.png"
         alt="image 1"
         className="h-full w-full object-cover"
       />
       <img
         src="./caroussel2.png"
         alt="image 2"
         className="h-full w-full object-cover"
       />
       <img
         src="./caroussel3.webp"
         alt="image 3"
         className="h-full w-full object-cover"
       />
     </Carousel>
    </div>
  );
};

export default Home;