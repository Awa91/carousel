/** @type {import('tailwindcss').Config} */
 
//const plugin = require('tailwindcss/plugin')
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
     'sm': {'min':'640px', 'max':'767px'},
     //=> @media (min-width: 640px and max-width: 767px){...}
     'md': {'min': '768px', 'max': '1023px'},
      
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      

    },
    extend: { keyframes: {

    'fade-in':{
    '0%':{
        opacity: 0,
    },
    '100%':{
        opacity: 1,
    }
    },
    "fade-out": {
        "0%": {
            opacity: 1
        },
        "100%": {
            opacity: 0
        },
    },
    "fade-in-up": {
        "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
                },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
                },
    },
    "fade-in-down": {
        "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-top-left": {
        "0%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-top-right": {
        "0%": {
            opacity: 0,
            transform: "translate3d(100%, -100%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },

    "fade-in-bottom-left": {
        "0%": {
            opacity: 0,
            transform: "translate3d(100%, 100%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-bottom-right": {
        "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 100%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },

    "fade-in-bounce-right": {
        "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0%, 0)",
        },
        "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
        },
        "66%": {
            opacity: 0.7,
            transform: "translate3d(20%, 0%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-bounce-left": {
        "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0%, 0)",
        },
        "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
        },
        "66%": {
            opacity: 0.7,
            transform: "translate3d(-20%, 0%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },

    "fade-in-bouncedown": {
        "0%": {
            opacity: 0,
            transform: "translate3d(0%, -100%, 0)",
        },
        "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
        },
        "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, -20%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    "fade-in-bounceup": {
        "0%": {
            opacity: 0,
            transform: "translate3d(0%, 100%, 0)",
        },
        "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
        },
        "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, 20%, 0)",
        },
        "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        },
    },
    
    "fade-in-left": {
        "0%": {
                opacity: 0,
                transform: "translate3d(-100%, 0, 0)",
            },
        "100%": {
                 opacity: 1,
                 transform: "translate3d(0, 0, 0)",
        },
     },
    "fade-in-right": {
         "0%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
         "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-out-down": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(0, 100%, 0)",
            },
        },
        "fade-out-left": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(-100%, 0, 0)",
            },
        },
    "fade-out-right": {
         "0%": {
                opacity: 1,                    },
        "100%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
        },                
    "fade-out-up": {
        "0%": {
                opacity: 1,
            },
        "100%": {
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
             },
    },

    "fade-out-top-left": {
        "0%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
        },
    },
    "fade-out-top-right": {
        "0%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
            transform: "translate3d( 100%, -100%, 0)",
        },
    },

    "slide-in-down": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(0, -100%, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-in-left": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-in-up": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(0, 100%, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-out-down": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        visibility: "hidden",
                        transform: "translate3d(0, 100%, 0)",
                    },
                },
                "slide-out-left": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        visibility: "hidden",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                },
                "slide-out-right": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        visibility: "hidden",
                        transform: "translate3d(100%, 0, 0)",
                    },
                },
                "slide-out-up": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        visibility: "hidden",
                        transform: "translate3d(0, -100%, 0)",
                    },
                },
                "slide-down": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 100%, 0)",
                    },
                },
                "slide-left": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(-100%, 0, 0)",
                    },
                },
                "slide-right": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(100%, 0, 0)",
                    },
                },
                "slide-up": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                    },
                },


tada: {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "10%, 20%": {
                        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
                    },
                    "30%, 50%, 70%, 90%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "40%, 60%, 80%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                },
                "spinner-grow": {
                    "0%": {
                        transform: "scale(0)",
                    },
      
                    "100%": {
                        transform: "none",
                        opacity: "1",
                    },
                },
                "placeholder-wave": {
                    "0%": {
                        maskPosition: "0.2rem 0%"
                    },
                    "100%": {
                        maskPosition:"-100% 100%"
                       
                    },
                },
                "show-up-clock": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0.7)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },

    
                "drop-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0)",
                        animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                "drop-out": {
                    "0%": {
                        opacity: "1",
                        transform: "scale(1)",
                        animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale(0)"
                    },
                },
                "fly-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale3d(0.3, 0.3, 0.3)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        transform: "scale3d(1.1, 1.1, 1.1)"
                    },
                    "40%": {
                        transform: "scale3d(0.9, 0.9, 0.9)"
                    },
                    "60%": {
                        opacity: "1",
                        transform: "scale3d(1.03, 1.03, 1.03)"
                    },
                    "80%": {
                        transform: "scale3d(0.97, 0.97, 0.97)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale3d(1, 1, 1)"
                    },
                },
                "fly-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(0, 1500px, 0)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "60%": {
                        opacity: "1",
                        transform: "translate3d(0, -20px, 0)"
                    },
                    "75%": {
                        transform: "translate3d(0, 10px, 0)"
                    },
                    "90%": {
                        transform: "translate3d(0, -5px, 0)"
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)"
                    },
                },
                "fly-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(0, -1500px, 0)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "60%": {
                        opacity: "1",
                        transform: "translate3d(0, 25px, 0)"
                    },
                    "75%": {
                        transform: "translate3d(0, -10px, 0)"
                    },
                    "90%": {
                        transform: "translate3d(0, 5px, 0)"
                    },
                    "100%": {
                        transform: "none"
                    },
                },
                "fly-in-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(1500px, 0, 0)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "60%": {
                        opacity: "1",
                        transform: "translate3d(-25px, 0, 0)"
                    },
                    "75%": {
                        transform: "translate3d(10px, 0, 0)"
                    },
                    "90%": {
                        transform: "translate3d(-5px, 0, 0)"
                    },
                    "100%": {
                        transform: "none"
                    },
                },
                "fly-in-right": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(-1500px, 0, 0)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "60%": {
                        opacity: "1",
                        transform: "translate3d(25px, 0, 0)"
                    },
                    "75%": {
                        transform: "translate3d(-10px, 0, 0)"
                    },
                    "90%": {
                        transform: "translate3d(5px, 0, 0)"
                    },
                    "100%": {
                        transform: "none"
                    },
                },
                "fly-out": {
                    "0%": {
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        transform: "scale3d(0.9, 0.9, 0.9)",
                    },
                    "50%, 55%": {
                        opacity: "1",
                        transform: "scale3d(1.1, 1.1, 1.1)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale3d(0.3, 0.3, 0.3)",
                    },
                },
                "fly-out-up": {
                    "0%": {
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        transform: "translate3d(0, 10px, 0)",
                    },
                    "40%, 45%": {
                        opacity: "1",
                        transform: "translate3d(0, -20px, 0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translate3d(0, 2000px, 0)",
                    },
                },
                "fly-out-down": {
                    "0%": {
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        transform: "translate3d(0, -10px, 0)",
                    },
                    "40%, 45%": {
                        opacity: "1",
                        transform: "translate3d(0, 20px, 0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translate3d(0, -2000px, 0)",
                    },
                },
                "fly-out-left": {
                    "0%": {
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        opacity: "1",
                        transform: "translate3d(-20px, 0, 0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translate3d(2000px, 0, 0)",
                    },
                },
                "fly-out-right": {
                    "0%": {
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        opacity: "1",
                        transform: "translate3d(20px, 0, 0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translate3d(-2000px, 0, 0)",
                    },
                },    
    
    "browse-in": {
                    "0%": {
                        transform: "scale(0.8) translateZ(0px)",
                        zIndex: "-1"
                    },
                    "10%": {
                        transform: "scale(0.8) translateZ(0px)",
                        zIndex: "-1",
                        opacity: "0.7",
                    },
                    "80%": {
                        transform: "scale(1.05) translateZ(0px)",
                        zIndex: "999",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scale(1) translateZ(0px)",
                        zIndex: "999"
                    },
                },
                "browse-out": {
                    "0%": {
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                        zIndex: "999",
                    },
                    "50%": {
                        transform: "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                        zIndex: "-1",
                    },
                    "80%": {
                        opacity: "1"
                    },
                    "100%": {
                        zIndex: "-1",
                        opacity: "0",
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
                    },
                },
                "browse-out-left": {
                    "0%": {
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                        zIndex: "999",
                    },
                    "50%": {
                        transform: "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                        zIndex: "-1",
                    },
                    "80%": {
                        opacity: "1"
                    },
                    "100%": {
                        zIndex: "-1",
                        opacity: "0",
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
                    },
                },
                "browse-out-right": {
                    "0%": {
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
                        zIndex: "999",
                    },
                    "50%": {
                        transform: "translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
                        zIndex: "1",
                    },
                    "80%": {
                        opacity: "1"
                    },
                    "100%": {
                        zIndex: "1",
                        opacity: "0",
                        transform: "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
                    },
                },

                jiggle: {
                    "0%": {
                        transform: "scale3d(1, 1, 1)"
                    },
                    "30%": {
                        transform: "scale3d(1.25, 0.75, 1)"
                    },
                    "40%": {
                        transform: "scale3d(0.75, 1.25, 1)"
                    },
                    "50%": {
                        transform: "scale3d(1.15, 0.85, 1)"
                    },
                    "65%": {
                        transform: "scale3d(0.95, 1.05, 1)"
                    },
                    "75%": {
                        transform: "scale3d(1.05, 0.95, 1)"
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)"
                    },
                },
                flash: {
                    "0%, 50%, 100%": {
                        opacity: "1"
                    },
                    "25%, 75%": {
                        opacity: "0"
                    },
                },
                shake: {
                    "0%, 100%": {
                        transform: "translateX(0)",
                    },
                    "10%, 30%, 50%, 70%, 90%": {
                        transform: "translateX(-10px)",
                    },
                    "20%, 40%, 60%, 80%": {
                        transform: "translateX(10px)",
                    },
                },
                glow: {
                    "0%": {
                        backgroundColor: "#fcfcfd"
                    },
                    "30%": {
                        backgroundColor: "#fff6cd"
                    },
                    "100%": {
                        backgroundColor: "#fcfcfd"
                    },
                },
      
                wiggle: {
                  "5%": {
                    transform: "rotate(-5deg)"
                  },
                  "20%": {
                    transform: "rotate(5deg)"
                  },
                  "40%": {
                    transform: "rotate(-5deg)"
                  },
                  "80%": {
                    transform: "rotate(5deg)"
                  }
                },
          
            

                  flip: {
                
                    "0%" :{
                      transform: "rotateY(-180deg)"
                    },
                    "50%": {
                      transform: "rotateY(-90deg)"
                    },
                    "100%" :{
                      transform: "rotateY(0deg)"
                    },
                  },
                  "flip-up": {
                    "0%": {
                      transform: "translate3d(0, 100%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg)",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-down": {
                    "0%": {
                      transform: "translate3d(0, -100%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg)",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-left": {
                    "0%": {
                      transform: "translate3d(-100%, 0%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-right": {
                    "0%": {
                      transform: "translate3d(100%, 0%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-top-left": {
                    "0%": {
                      transform: "translate3d(-100%, -100%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-top-right": {
                    "0%": {
                      transform: "translate3d(100%, -100%, 0)  rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
          
                  "flip-bottom-left": {
                    "0%": {
                      transform: "translate3d(-100%, 100%, 0) rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },
                  "flip-bottom-right": {
                    "0%": {
                      transform: "translate3d(100%, 100%, 0)  rotateY(-180deg)",
                    },
                    "50%": {
                      transform: "rotateY(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateY(0deg)",
                    },
                  },

                  flipy: {
                    "0%" :{
                      transform: "rotateX(-180deg)"
                    },
                    "50%": {
                      transform: "rotateX(-90deg)",
                    },
                    "100%" :{
                      transform: "rotateX(0deg)"
                    },
                  },
                  "flipy-up": {
                    "0%": {
                      transform: "translate3d(0, 100%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg)",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-down": {
                    "0%": {
                      transform: "translate3d(0, -100%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg)",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-left": {
                    "0%": {
                      transform: "translate3d(-100%, 0%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-right": {
                    "0%": {
                      transform: "translate3d(100%, 0%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-top-left": {
                    "0%": {
                      transform: "translate3d(-100%, -100%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-top-right": {
                    "0%": {
                      transform: "translate3d(100%, -100%, 0)  rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-bottom-left": {
                    "0%": {
                      transform: "translate3d(-100%, 100%, 0) rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },
                  "flipy-bottom-right": {
                    "0%": {
                      transform: "translate3d(100%, 100%, 0)  rotateX(-180deg)",
                    },
                    "50%": {
                      transform: "rotateX(-90deg) ",
                    },
                    "100%": {
                      transform: "translate3d(0, 0, 0) rotateX(0deg)",
                    },
                  },

            "zoom-in": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                  },
                },
                "zoom-in-up": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-down": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-right": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-left": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-bottom-right": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-top-right": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, -100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-top-left": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, -100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-in-bottom-left": {
                  "0%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 100%, 0)",
                  },
                  "80%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)"
                  },
                },
                "zoom-out": {
                  "0%": {
                    opacity: 1,
                  },
                  "15%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3)",
                  },
                },
                "zoom-out-down": {
                  "0%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)",
                  },
                  "15%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
                  },
                },
                "zoom-out-up": {
                  "0%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)",
                  },
                  "15%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
                  },
                },
                "zoom-out-left": {
                  "0%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)",
                  },
                  "15%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0%, 0)",
                  },
                },
                "zoom-out-right": {
                  "0%": {
                    opacity: 1,
                    transform: "translate3d(0, 0%, 0)",
                  },
                  "15%": {
                    opacity: 0.8,
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  },
                  "100%": {
                    opacity: 0,
                    transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0%, 0)",
                  },
                },
    
                
      slidein: {
        from: {
          opacity: "0",
          transform: "translateX(-70px)",
        },
        to: {
          opacity: "0.5",
          transform: "translateX(0)",
        },
        from: {
          opacity: "0.5",
          transform: "translateX(-70px)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },

      'text-slide-2': {
        '0%, 40%': {
            transform: 'translateY(0%)',
        },
        '50%, 90%': {
            transform: 'translateY(-33.33%)',
        },
        '100%': {
            transform: 'translateY(-66.66%)',
        },
    },


    'text-slide-3': {
      '0%, 26.66%': {
          transform: 'translateY(0%)',
      },
      '33.33%, 60%': {
          transform: 'translateY(-25%)',
      },
      '66.66%, 93.33%': {
          transform: 'translateY(-50%)',
      },
      '100%': {
          transform: 'translateY(-75%)',
      },
  },


  'text-slide-4': {
    '0%, 20%': {
        transform: 'translateY(0%)',
    },
    '25%, 45%': {
        transform: 'translateY(-20%)',
    },
    '50%, 70%': {
        transform: 'translateY(-40%)',
    },
    '75%, 95%': {
        transform: 'translateY(-60%)',
    },                            
    '100%': {
        transform: 'translateY(-80%)',
    },
},


'text-slide-5': {
  '0%, 16%': {
      transform: 'translateY(0%)',
  },
  '20%, 36%': {
      transform: 'translateY(-16.66%)',
  },
  '40%, 56%': {
      transform: 'translateY(-33.33%)',
  },
  '60%, 76%': {
      transform: 'translateY(-50%)',
  },
  '80%, 96%': {
      transform: 'translateY(-66.66%)',
  },
  '100%': {
      transform: 'translateY(-83.33%)',
  },
},


'text-slide-6': {
  '0%, 13.33%': {
      transform: 'translateY(0%)',
  },
  '16.66%, 30%': {
      transform: 'translateY(-14.28%)',
  },
  '33.33%, 46.66%': {
      transform: 'translateY(-28.57%)',
  },
  '50%, 63.33%': {
      transform: 'translateY(-42.85%)',
  },
  '66.66%, 80%': {
      transform: 'translateY(-57.14%)',
  },
  '83.33%, 96.66%': {
      transform: 'translateY(-71.42%)',
  },
  '100%': {
      transform: 'translateY(-85.71%)',
  },
},


'text-slide-7': {
  '0%, 11.43%': {
      transform: 'translateY(0%)',
  },
  '14.28%, 25.71%': {
      transform: 'translateY(-12.5%)',
  },
  '28.57%, 40%': {
      transform: 'translateY(-25%)',
  },
  '42.85%, 54.28%': {
      transform: 'translateY(-37.5%)',
  },
  '57.14%, 68.57%': {
      transform: 'translateY(-50%)',
  },
  '71.42%, 82.85%': {
      transform: 'translateY(-62.5%)',
  },
  '85.71%, 97.14%': {
      transform: 'translateY(-75%)',
  },
  '100%': {
      transform: 'translateY(-87.5%)',
  },
},


'text-slide-8': {
  '0%, 10%': {
      transform: 'translateY(0%)',
  },
  '12.5%, 22.5%': {
      transform: 'translateY(-11.11%)',
  },
  '25%, 35%': {
      transform: 'translateY(-22.22%)',
  },
  '37.5%, 47.5%': {
      transform: 'translateY(-33.33%)',
  },
  '50%, 60%': {
      transform: 'translateY(-44.44%)',
  },
  '62.5%, 72.5%': {
      transform: 'translateY(-55.55%)',
  },
  '75%, 85%': {
      transform: 'translateY(-66.66%)',
  },
  '87.5%, 97.5%': {
      transform: 'translateY(-77.77%)',
  },
  '100%': {
      transform: 'translateY(-88.88%)',
  },
},
//Our fall animation keyframes              
   fall: {
    '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
    '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
    '100%': { transform: 'translate(0%,150%) skewX(0deg)' },
  },

    },
    animation: {
      'fadein':'fade-in 5s ease-in-out infinite',
      fadeout: 'fade-out 1s ease-out 0.25s 1',
      fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
      fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
      fadeintopleft: 'fade-in-top-left 1s ease-out 0.25s 1',
      fadeintopright: 'fade-in-top-right 1s ease-out 0.25s 1',
      fadeinbottomleft: 'fade-in-bottom-left 1s ease-out 0.25s 1',
      fadeinbottomright: 'fade-in-bottom-right 1s ease-out 0.25s 1',
      fadeinbounceright: 'fade-in-bounce-right 1s ease-in-out 0.25s 1',
      fadeinbounceleft: 'fade-in-bounce-left 1s ease-in-out 0.25s 1',
      fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
      fadeinbounceup: 'fade-in-bounceup 1s ease-in-out 0.25s 1',
      fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
      fadeinright: 'fade-in-right 1s ease-in-out 0.25s 1',
      fadeoutleft: 'fade-out-left 1s ease-in-out 0.25s 1',
      fadeoutright: 'fade-out-right 1s ease-in-out 0.25s 1',
      fadeoutup: 'fade-out-up 1s ease-in-out 0.25s 1',
      fadeoutdown: 'fade-out-down 1s ease-in-out 0.25s 1',
      fadeouttopleft: 'fade-out-top-left 1s ease-in-out 0.25s 1',
      fadeouttopright: 'fade-out-top-right 1s ease-in-out 0.25s 1',
      slideindown: 'slide-in-down 1s ease-in-out 0.25s 1',
      slideinleft: 'slide-in-left 1s ease-in-out 0.25s 1',
      slideinright: 'slide-in-right 1s ease-in-out 0.25s 1',
      slideinup: 'slide-in-up 1s ease-in-out 0.25s 1',
      slideoutdown: 'slide-out-down 1s ease-in-out 0.25s 1',
      slideoutleft: 'slide-out-left 1s ease-in-out 0.25s 1',
      slideoutright: 'slide-out-right 1s ease-in-out 0.25s 1',
                slideoutup: 'slide-out-up 1s ease-in-out 0.25s 1',
                slidedown: 'slide-down 1s ease-in-out 0.25s 1',
                slideleft: 'slide-left 1s ease-in-out 0.25s 1',
                slideright: 'slide-right 1s ease-in-out 0.25s 1',
                slideup: 'slide-up 1s ease-in-out 0.25s 1',
                tada: 'tada 1s ease-in-out 0.25s 1',
                spinnergrow: 'spinner-grow 1s ease-in-out 0.25s 1',
                placeholderwave: 'placeholder-wave 1s ease-in-out 0.25s 1',
                showupclock: 'show-up-clock 1s ease-in-out 0.25s 1',

                dropin: 'drop-in 0.5s ease-in-out 0.25s 1',
                dropout: 'drop-out 0.5s ease-in-out 0.25s 1',
                flyin: 'fly-in 0.6s ease-in-out 0.25s 1',
                flyinup: 'fly-in-up 0.6s ease-in-out 0.25s 1',
                flyindown: 'fly-in-down 0.6s ease-in-out 0.25s 1',
                flyinleft: 'fly-in-left 0.6s ease-in-out 0.25s 1',
                flyinright: 'fly-in-right 0.6s ease-in-out 0.25s 1',
                flyout: 'fly-out 0.6s ease-in-out 0.25s 1',
                flyoutup: 'fly-out-up 0.6s ease-in-out 0.25s 1',
                flyoutdown: 'fly-out-down 0.6s ease-in-out 0.25s 1',
                flyoutleft: 'fly-out-left 0.6s ease-in-out 0.25s 1',
                flyoutright: 'fly-out-right 0.6s ease-in-out 0.25s 1',

                browsein: 'browse-in 0.4s ease-in-out 0.25s 1',
                browseout: 'browse-out 0.4s ease-in-out 0.25s 1',
                browseoutleft: 'browse-out-left 0.4s ease-in-out 0.25s 1',
                browseoutright: 'browse-out-right 0.4s ease-in-out 0.25s 1',
                jiggle: 'jiggle 0.6s ease-in-out 0.25s 1',
                flash: 'flash 0.6s ease-in-out 0.25s 1',
                shake: 'shake 0.6s ease-in-out 0.25s 1',
                glow: 'glow 0.6s ease-in-out 0.25s 1',
                wiggle: 'wiggle 0.8s ease 0.25s 2',

                zoomin: 'zoom-in 1s ease-out 0.25s 1',
                zoomout: 'zoom-out 1s ease-out 0.25s 1',
                zoomoutleft: 'zoom-out-left 1s ease-out 0.25s 1',
                zoomoutright: 'zoom-out-right 1s ease-out 0.25s 1',
                zoomoutup: 'zoom-out-up 1s ease-out 0.25s 1',
                zoomoutdown: 'zoom-out-down 1s ease-out 0.25s 1',
                zoominup: 'zoom-in-up 1s ease-out 0.25s 1',
                zoominbottomright: 'zoom-in-bottom-right 1s ease-out 0.25s 1',
                zoominbottomleft: 'zoom-in-bottom-left 1s ease-out 0.25s 1',
                zoomintopright: 'zoom-in-top-right 1s ease-out 0.25s 1',
                zoomintopleft: 'zoom-in-top-left 1s ease-out 0.25s 1',
                zoomindown: 'zoom-in-down 1s ease-out 0.25s 1',
                zoominright: 'zoom-in-right 1s ease-out 0.25s 1',
                zoominleft: 'zoom-in-left 1s ease-out 0.25s 1',
                flipy : 'flipy 2s 0.25s 1',
                flipyright: 'flipy-right 1s ease 0.25s 1',
                flipyleft: 'flipy-left 1s ease 0.25s 1',
                flipytopleft: 'flipy-top-left 1s ease 0.25s 1',
                flipytopright: 'flipy-top-right 1s ease 0.25s 1',
                flipybottomleft: 'flipy-bottom-left 1s ease 0.25s 1',
                flipybottomright: 'flipy-bottom-right 1s ease 0.25s 1',
                flipyup:'flipy-up 1s ease 0.25s 1',
                flipydown:'flipy-down 1s ease 0.25s 1',
                flipright: 'flip-right 1s ease 0.25s 1',
                flipleft: 'flip-left 1s ease 0.25s 1',
                fliptopleft: 'flip-top-left 1s ease 0.25s 1',
                fliptopright: 'flip-top-right 1s ease 0.25s 1',
                flipbottomleft: 'flip-bottom-left 1s ease 0.25s 1',
                flipbottomright: 'flip-bottom-right 1s ease 0.25s 1',
                flipup:'flip-up 1s ease 0.25s 1',
                flipdown:'flip-down 1s ease 0.25s 1',
                flip : 'flip 2s 0.25s 1',


       // You can then reference these keyframes by name in the 
           // animation section of your theme configuration
      fall: 'fall 3s ease infinite',
           // animation shorthand CSS property i.e
           // animation-name | animation-duration | animation-timing-function 
           // animation-iteration-count  
      slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      // slidein300: "slidein 1s ease 300ms forwards",
      // slidein500: "slidein 1s ease 500ms forwards",
      // slidein700: "slidein 1s ease 700ms forwards",
      'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                        
    },

    backgroundImage: {
      hero: `url('./airport.jpeg')`,
    },
  },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {

        //Add the css properties that you use in tailwind
        matchUtilities({
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        });
      }),
  ],
}

