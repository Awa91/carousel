import Carousel from "./Carousel"
import vid from "/smiling.mp4"
// import b480 from "/blackTourmaline480p.mp4"
// import b720 from "/blackTourmaline720p.mp4"
// import b1080 from "/blackTourmaline1080.mp4"
import vid1 from './airline/blackTourmaline480p.mp4';
import FieldSet from "./FieldSet";
import Home from "./airline/Home";
import RotatingWords from "./airline/RotatingWords";
import CardSlider from "./airline/CardSlider";
import ResponsiveCarousel from "./airline/ResponsiveCarousel";
import AnimatedCard from "./airline/AnimatedCard";
import FancyTestimonialSlider from "./airline/FancyTestimonialSlider";
import CenteringText from "./airline/CenteringText";
import TypographyAnimation from "./airline/ComplexAnim";

const slides = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
 
]

const testimonials = [
  {
    img:'./1.jpg',
    quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    name: 'Jessie J',
    role: 'Acme LTD'
  },
  {
    img: './2.jpg',
    quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: 'Nick V',
    role: 'Malika Inc.'
  },
  {
    img:'./3.jpg',
    quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: 'Amelia W',
    role: 'Panda AI'
  }
]
const bgImg = './1.jpg';
function App() {

  return (
    <>
   <div>
    {/* <div className="relative">
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-lg"> */}
       <div className="bg-black sm:bg-red-700 md:bg-yellow-400 lg:bg-pink-800 xl:bg-blue-800 2xl:bg-green-800">
       Hello World</div>

    <div className="relative">
   

    <div className="  sm:mx-28 md:mx-32  lg:mx-40 xl:mx-44 2xl:mx-72 mb-4 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-4 bg-black">
      <div className="col-auto ">

        <Carousel autoSlide={true}>
          {[...slides.map((s) => (
            <img src={s}  className=""/>
          )), <video src={vid1} autoPlay muted loop />, ]}
        </Carousel>

      </div>
      <div className="card">
        <p className="text-pink">Hello</p>
      </div>
    </div>
          <ResponsiveCarousel/>
    <RotatingWords/>
    <CardSlider/>
    <FancyTestimonialSlider testimonials={testimonials}/>
    <CenteringText/>
    <div className="relative">
      <div className="sm:mx-28 md:mx-32  lg:mx-40 xl:mx-44 2xl:mx-72 mb-4 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-4">
      <div className="col-auto">
      <AnimatedCard/>

      <p>Tailwind Animation Examples
  Use Below examples of animations in tailwind css to animate html elements.</p>
 
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-44 mx-4"> 
  {/* Your grid items go here* */}
  <div className="bg-indigo-100   text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center animate-fadein">fadeIn</div>
  <div className="bg-indigo-100  text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeout">fadeOut</div>
  <div class="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeinup">fadeInUp</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeindown">fadeInDown</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeintopleft">fadeIn <br/>TopLeft </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeintopright">fadeIn <br/>TopRight </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeinbottomleft">fadeIn <br/>BottomLeft </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeinbottomright">fadeIn <br/>BottomRight </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeinbounceright">fadeIn <br/>BounceRight </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeinbounceleft">fadeIn <br/>BounceLeft </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeinbouncedown">fadeIn <br/>BounceDown </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeinbounceup">fadeIn <br/>BounceUp </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeinleft">fadeInLeft</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeinright">fadeInRight</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeoutdown">fadeOutDown</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeoutleft">fadeOutLeft</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeoutup">fadeOutUp</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeoutright">fadeOutRight</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeouttopleft">fadeOut <br/>TopLeft </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center  hover:animate-fadeouttopright">fadeOut <br/>TopRight </div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideindown">slideInDown</div>
  <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideinleft">slideInLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideinright">slideInRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideinup">slideInUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideoutdown">slideOutDown</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideoutleft">slideOutLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideoutright">slideOutRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideoutup">slideOutUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slidedown">slideDown</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideleft">slideLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideright">slideRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideup">slideUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-tada">Tada</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-spinnergrow">SpinnerGrow</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-placeholderwave">PlaceholderWave</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-showupclock">showUpClock</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-dropin">dropIn</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-dropout">dropOut</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyin">flyIn</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyinup">flyInUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyindown">flyInDown</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyinleft">flyInLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyinright">flyInRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyout">flyOut</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyoutup">flyOutUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyoutdown">flyOutDown</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyoutleft">flyOutLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyoutright">flyOutRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-browsein">browseIn</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-browseout">browseOut</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center  text-center hover:animate-browseoutleft">browse <br/>OutLeft </div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center  text-center hover:animate-browseoutright">browse <br/>OutRight </div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-jiggle">jiggle</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flash">flash</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-shake">Shake</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-glow">Glow</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-wiggle">Wiggle</div>
  <p>Zoom In/Out Animation Examples</p>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomin">ZoomIn</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomout">ZoomOut</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomoutleft">ZoomOutLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomoutright">ZoomOutRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomoutup">ZoomOutUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomoutdown">ZoomOutDown</div>
        
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoominup">ZoomInUp</div>
  
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoominbottomright">ZoomInBottomRight</div>
        
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoominbottomleft">ZoomInBottomLeft</div>
    
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomintopright">ZoomInTopRight</div>
    
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomintopleft">ZoomInTopLeft</div>
    
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomindown">ZoomInDown</div>
    
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoominright">ZoomInRight</div>
        
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoominleft">ZoomInLeft</div>
<p>Vertical Flip Animation Examples</p>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flip">flip</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipup">flipUp</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipdown">flipDown</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipleft">flipLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipright">flipRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fliptopleft">flipTopLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fliptopright">flipTopRight</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipbottomleft">flipBottomLeft</div>
      <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flipbottomright">flipBottomRight</div>
      
  </div> 
     
      <TypographyAnimation/>

      </div>
      </div>
    </div>
    </div>



   <div className="relative bg-blue-300">
   <div
          className="relative inset-x-0.5 z-0 "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p>Hr</p>
          <p>Hr</p>
        </div>
   </div>

   <div className="h-8 w-20 bg-blue-600 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0">Fade in</div>
   <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
  Save Changes
</button>

{/* <Home/> */}
{/* Responsive Design */}
{/* <div className="bg-black sm:bg-red-700 md:bg-yellow-400 lg:bg-pink-800 xl:bg-blue-800 2xl:bg-green-800">
 Hello World

</div>
<FieldSet/> */}

{/*1.  Adding Magins and Padding */}
{/* <div className="m-4 p-6 bg-orange-400 text-white">
  This element has margin-4 and padding-6.
</div> */}
{/* In this example, the m-4 class adds a margin of 1rem (16px) to all sides 
of the <div>, and p-6 adds a padding of 1.5rem (24px) to all sides. 
   */}


{/* 2. Styling Text and Colors */}
{/* <div className="m-4 p-6  bg-orange-400 text-white">
<h1 className="text-4xl font-bold text-blue-500 ">
  Welcome to Tailwind CSS!
</h1>
</div> */}

{/* 3. Borders and Shadows  */}
{/* <div className="border-2 border-radius-rounded bg-pink-500 border-gray-400 shadow-lg p-4">
  This div has a gray border, a shadow, and some padding.
</div> */}

{/* 4. Responsive Display */}
{/* <div className="hidden md:block lg:flex">
 <p>
 This content is hidden on small screens, visible on medium screens, and displayed as a flex container on large screens.
 </p>
 <li>
 <a>Hello</a>
 </li>
 <li>
 <a>Hello</a>
 </li>
 <ul>
 <li>
 <a>Hello</a>
 </li>
 <li>
 <a>Hello</a>
 </li>
 </ul>
</div> */}
{/* This example utilizes responsive utility classes. The content is hidden by default (hidden), becomes visible on medium screens (md:block), and adopts a flex container layout on large screens (lg:flex).
     */}


{/* 
Responsive Design with Tailwind
Responsive Padding */}
{/* <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-green-600">
  Responsive padding for different screen sizes.
</div> */}

{/* Responsive Text Size */}
{/* <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-slate-600">
 
  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
  Responsive padding and text size for different screen sizes.
</p>
</div> */}

{/* Flexbox and Grid with Tailwind */}

{/* Flex Container */}
<div className="flex items-center justify-between bg-red-400">
  <p>
  Flex container with centered items.
  </p>
  <p>
  Flex container with centered items.
  </p>
  <p>
  Flex container with centered items.
  </p>
  <p>
  Flex container with centered items.
  </p>
  <p>
  Flex container with centered items.
  </p>
</div>
{/* This creates a flex container with items centered 
along the cross-axis (items-center) and distributed 
evenly along the main axis (justify-between). */}



{/* Grid Layout */}
{/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-500"> */}
  {/* Your grid items go here */}
  {/* <p>
  Grid item #1.
  </p>
  <p>
  Grid item #2.
  </p>
  <p>
  Grid item #3.
  </p>
  <p>
  Grid item #4.
  </p>
  <p>
  Grid item #5.
  </p>
</div> */}

{/* This sets up a grid layout with two columns 
(grid-cols-2 for small devices) 
with a gap of 1rem (16px) between grid items (gap-4). 
And agrid layout with three colums for medium devices with the same gap.
  */}



  {/* Adding Custom Colors */}
  {/* 
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#3498db',
      },
    },
  },
};
   */}

   {/* Defining Custom Font Sizes */}
   {/* 
   // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
}; */}

{/* Plugins and Extensions */}
{/* 
Installing a Plugin
npm install @tailwindcss/typography
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    // Other plugins go here
  ],
}; */}


{/*Optimizing for Production

Purging Unused Styles*/}





     {/* Element 1  */}
  
{/* <div className=" animate-slidein opacity-0 [--slidein-delay:300ms] ... "  >
  <div className="...">Introducing Linear Asks</div> */}
  {/* <img loading="lazy" src="/4.jpg" className="..." alt="Icon" /> */}
{/* </div> */}

{/* Element 2  */}
{/* <h1 className=" animate-slidein opacity-0 [--slidein-delay:300ms] ...">
  Linear is a better way
  <br />
  to build products
</h1> */}

{/* Element 3  */}
{/* <p className=" animate-slidein opacity-0 [--slidein-delay:500ms]  ...">
  Meet the new standard for modern software development.
  <br />
  Streamline issues, sprints, and product roadmaps.
</p> */}

 {/* Element 4  */}
{/* <div className=" animate-slidein opacity-0 [--slidein-delay:700ms]  ...">
  <div className="...">Get started</div>
  <img loading="lazy" src="..." className="..." alt="Arrow icon" />
</div> */}

</div>
</>
  )
}

export default App
