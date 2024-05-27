/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashutosh Gupta",
  title: "Hi all, I'm Ashutosh",
  subTitle: emoji(
    "Aspiring android developer with a strong interest in mobile application and a passion for creative problem - solving. I honed my skills in Android Studio, Flutter, JAVA, Kotlin, Dart, and  AR(Augmented Reality). Seeking opportunities to gain hands-on experience and apply my knowledge in a professional setting."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OS-CPqFCTLsgDBe5JXoiSbpxmvXID_cR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ashut0sh75",
  linkedin: "https://www.linkedin.com/in/ashutosh-gupta-708a65232",
  gmail: "ashusanugupta999@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100010964528173&mibextid=ZbWKwL",
   twitter: "https://x.com/ashut0sh_75?t=GVHPhm7kAA0IyYDSBrj1Uw&s=09",
  stackoverflow: "https://stackoverflow.com/users/20249367/ashutosh-gupta",
  discord: "http://discordapp.com/users/ashutosh75#0118",
  telegram: "http://t.me/Ashutosh_Gupta_75",
  // Instagram, Twitter and Kaggle,  are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech Alchemist: From Android to AR, Always Excited for the Uncharted. I am a versatile developer who is comfortable working with any technology stack. I have the ability to adapt to new situations and learn new technologies quickly.",
  
  skills: [
    emoji(
      "⚡Mobile App Architect: Crafting Scalable and User-Centric Android Experiences"
    ),
    emoji("⚡Immersive AR Developer: Expert in Creating Captivating AR Experiences for Mobile"),
    emoji(
      "⚡Innovative Android Engineer: Bringing Creative Solutions to the Forefront of Mobile Development"
    ),
  
  ],

  /* Make Sure to include correct base64 encoding to view your icon
Find some icon with base64 encodeing at https://icons8.com/icons */

  softwareSkills: [
    {
      skillName: "JAVA",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFlElEQVR4nO1Xa2xURRQeQERUrG1ntoD4woIS8bmdu+UR6967xQooYCxBpSq7Zy4v8REV/0iqxkR8JMZfYkKMiUZC/eEzJEi6Z5YCf6j4iATUKA9jCA+x3XtLA0HWnNlH19Jaomy7Nf2SyXbPvZ39zsx3vjPD2BCGMIR+QadTNZENZniOfGhQJ+E51tpkRC5ngxFts6rLfFse9hz5AhtsSDWy4Z5jbfIdK9VhW0vZYEKqvn6E58j1RN6z5ekTkeBVbLAgVVNzke9YTUTeJODId9mg0rxjJfLI70/WBDk9S9VVjvLDodm+bb3l29ZGzw7dzIoJ7Y6c7Dvypxx52+rww9YtR6dPH+M78nnfsY6mn8kNbTNnlrJiQkc4FPRt+Xse+ZO+I+u82qqpvmPtzdaCZ1srWbGhsyZ0jedYh7rIy9MdtlxA8eyq0250ONY8VozwHLk5S55G0qlaQXGSSi6piFzIihFe7bSA51hn8op2HcVTweBIz5GdGc3vZsWK9khoUn7RZouzw66+Im9X9rLi7rby10wCO3PxuspRxoWysrozOIMVK3xHrjFEbastVV09Oi/+ZtcuyGZW1J3XtvYYohGpuh/kchILyxtZsSI5K3iD78jjpHeSVTbuReSDuV0IW8+wYsYJR05LNzM5NxujZHzbOpJJIsqKHclIaIrvyC/JRrMx37aOkZSOR4IlA8uOMcYhHhRKr+aA7wnATVzh2kBM11au2jQq+05HjTXBd6puM3+HQ/d6jtxHR43uc5UrLQXoJqHwBwEY527ijoIRL3kELxeACaF0Kj3wTF8/aIo7bDUcq7MuM4Sj28YLF2cKhQ1lgBMqFm++xMQUrqc5OeCJUrelMPeGAGB1F/lcEkmu8FsOegsN2hFaUa70J+a70q0C9B6h8CBXujP7P8LV9d1SHSaU3pt5/lhBEjBJKIwIwE856KNnJ9PbwCQH/E4o3MhBN5ZHm6/vaW7RtburWX+Atp5HcZGIYoMAvJ9WVcT0fZRkWSxhlcX0FLECLz2XuUqWt5RypX0jIzc+p+DkJzy1YzTJJLPCDSSBf3p//Mot5QEX5/embw76dTMX6D2sES8oGPHcD7rxOX+TCeABAfoLofAdrvTbNITCDzK1sU8A/pkuUu1xVz/OGlO5RscB5wqlT3PAw4HY1n66YjamhnNARQVMbnSOtXBQAK4TbmIWc1tNjwhAfF5aOriRXIkNBDhsmRyI4eIA4DIB+jkO+hUaAvBZDolYwI0741w0l/p8iBhWCsBVY6PNV7OBAlc6SivIQX8sVuDYriepYUQ64OqbBOiHhdIfUuO7LLajbMDIsvqmERVRnMrdxO0Vy7YHKCQAj+fLxMjBxHqWFQd9iByqX3mXLG8pNZ0ySzb9+TkdH7jCRaZI+9A/FagAvUFA/K6eHGvskq2CK/1aX272r8CV/rrLbbSm9n/WO0v1pADoBdk6IG0b/cd0rXCbr+uLGAe9kOavcOOh856AcY8uCewjCZ2vuSuWbQ8I0C8JwFO0SwWpEVoVrvBIN9//SgC+wQEfELH4DNOgMtbYI+q/v5C7iXHk86Zrp0knhMKTGYvdRfWVn9h5TaI8um1MxiK/6VXr1KyoPtLjAFf4Mw0B2N7L++3k/+UxfU9+YyPbpS7PCgVqOKR3AfgiV/p9rvQ2qhNDGPShPGf6gyv8hVZXKGw2p1TAV8l6TcetbxqRP68AvJUr/ZEA3Ub3hIIlQKtV+mjiSpLFf52qAhLXcsAnyRzS1ou7+uc44baO5ErfzZV+gm5kdEzmLgKdkcpdrDKutKRlIg3quKaOYno2HfwE4MsC8DOu9P6MlE4ZW3Zxfr6U+hGpYYasi/O5i2vMFRH0TgH4o1D4G0kp7TJGXrs56BajfVc/TbezcW7rxQNAeghD+F/gL76ssK8TFCCXAAAAAElFTkSuQmCC"
    },
    {
      skillName: "C++",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEUlEQVR4nO2ZXUxbZRjHn46oUQE/ksULvWBBr7xw48K4TJ1LjNmFF462zs0BMc6puC8+CgiFUhhkyeaFZm5hOYdtgA6aCWgYLkP6AaUU+R6Er8BAhgutbPJVoKX0Me+BUCk9H6Wn0Av+yZOcnNP3nN//Pc/zvG9zALa1rSDU6caXQFFngJz2JVB3OEGhr4VT1Tsh6CXHEEjSXQJ1uxPyu3FNqNuckKQvBpXmSQhKJepOQVaLbR24Z2S1zEOSPhWCRgk1ByHD/JAX3DMyzI8g8c5HWweedudVSDG2QJ6P4GuiCyGtYQDO1r6+eeCq6nBINf4CuR2ujYN7RG6nCxSGGjhT8XzgwBEloKjLgexWh2jg+Z6F3r4IKYYCUOEOceFPa+NA+ecUH0BU4SDmGK2o+2sWeycWcNaxxAQ5JufU9VbmN7xGMptnIaEm3n/wxPq3Id00xPUwSX43ystHsf+RHYWqb2IBZeWjzFhOI8qmcUg2fOA7uMr0IqQazZDXxfmAyCsDaP57DjeqxrE53HV5gNsEYUgxmkFhDBNuIN08wvea9xXdR4ttEf3VxJwTD/w0zG3iWyPCyeo+4Qby7nHe8L2SYbQ7XSiW7E4Xvlt8f/2zVM0IZ+8iKPQISVoUboADPuLHfrSKMPPe3kTklZV0yu1ESPgDIVm3DM+Ezn8DpOj8yXk+NTywoYTAEvhVcBENkG7DJ1IXGXoL7qYH8dkLPUzsoQdRabBwvrmm0Wnce6nNC7hIBsjsk/bHJU3vFIZd7GFNv/DvevBW39SaMQ8mFzDmZi9KUtjARTJAFiA+eN6+vjIRxITNsYSqu8P4dHodD7hIBsgKy5U2XDPv2dcJ9Cu5JoHgIhkgWwE2kZwXBJ/W4G6LCv3qeG/A66/5aYBrq/AGxbO/yWpGOOMG3xIDM/YlVgOhbOlzzls/d8N5ivuanwamOQysz/8uhGQ9wtEShOPlCMlaEQzoA5dCpOe79y0mhNibCDLaHR9fR/jyV9Y3AYJSyE8D2hH2Is40WBBULQhfVK4F94wjRQjxVVtjQF3P3katM3YMjyvhhv9fhH6uwTd/aPWxjeoDu5DdahxGiZwffoe8ECuaRtDlQtR0WjHyfNPmGBCylSAmwmOKWOGfiy3G8qaRNWMcThcWmB/izuyGwBogISsb4jTApNPUPGaWtmJUSiWGHivCsJgi5jirtBX/mZ5nHfd4bhFTbw9hSEAM5HYgnPwdJYevYWO/BQMlY+84Sj65gfDVb8t9328D5P9oohbhyI3VNIj4uoyZZbE1Mb2Akd9o3Cn3aQkzaRszcO7e8r7l2M9ec3l/1m20L7IvbL7KvriE72RWea+d2NLl/RNZQwTrM00FXzfZp6xCy+S8KDN/ILuau3vJCxHiNFrhBk4UPAFSSg0y2sZ1413xGjT5URPG3nEmJXkmy8awHPz+KfBZ8usvg5QqACnlZHsA6f3Si7XYOzYpGLxn7F+MvlDLA065QEZr4PC1CPBbhwqjQEbr+NJqj6ISszVtWNv1kDE0M+9gghyTc6qyNtydXCFktW4EObUXRFc0/T7I6G6hWwbfgxoAGSWHgIrUh5w+AVLKKhq4lH4MUip1Y3m+UR29/ALI6PMgoxf8AHcwNSant/ADYHTha0yxLRedL+lSA9Krm/hlhk+Hrr4FUtokALwV5PR+CE6hhClCKTW8Pl2oMaZ25JoQCHp9WPAMyCglyKihlVAy57a1LQg6/QeJ2JhT+6JnrAAAAABJRU5ErkJggg=="
    },
    {
skillName: "Kotlin",
iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nO2XW0hTcRzH10NURhFEQRBERFJ2Q7vSY9lDBBU6W1lWqK0sNXfRTc/OmdPptozKzKKXHoJ6KijoIWhRdDsQ9eK2M93cdFtE4ZyXTKakv/ivztzlnF1o21lwvvB5/3zOn/PwEwj48ePHLysnxJxQwkAR5oAauQuaaz1xua+4O/qzfSX4DYv+Df3CV0kHFLTZoVjFHFGMOeBinIi7igcjXnwXICbaVmVWHm2T3gb57TYoYokQqpxQVc8c0al8PErLByNaV2dOng5AbGu3s0aUYA441zAYJt+heD4+hO8Ok6f5oV2TGfnQgECEzgZHVQ7ml8CcUK4YCMhr699MDBF7GOVpxlrWgt+Qk175yADEVp0NjuBsLzEAyqYX49/jyM9FrAO/Pid98kwBiC06OxzGo1+iFP/s/0rsnklEPhihyWUKSI08WwBis84Gh4i5CBHeM2WVimddkjLwqfMTDkCMajaAX5/iL09vxTUrsEbobXCQcEAxTk1T0sqZwboKQLgkZ8BHJBcxot4Ik7ocoyDl67bA8uu9kMcSsV3XM22SiX/R8jTuurMwnMRLjDbnpvbLhwYglt2wQp4h4gUM1MzH+vNR8kEk5TCMF3AoHxKAWNI5F5Gnt86+U1yaYpUPRlSAl9jBkXxEAGLxTSog/7Kx1h9XPgQvvpPp502zPEPAvG4zPJR3TPbXVINLcjrhAMSQag94iUx9eXqh8rcscEd5Y8JUcR0Q/dVScEnLkovA9sJYxuQFAsGCLjrADFewrnFansZ2sQHc0pMJB3xTFmZOHm1JJwWLbppmW4lbY5HyNH1VTeCWncg+ebSlnRb4JK35yiZPYz2vBo9MlF3yaB9kde548nMRLeCRHYuSfyS9N6CudesFXKzvkiIh+WCEWAtf5CVBeQlm9NE3AicRpMgIvVVNSUVQYh145MIwec4iSJERAhEXCDBVXks44nLT2yh5TiLIvwEI6wU1mCriR5Sq3/pOK8NPzKiIGk9zxgNIkREosRbMlVdjyL/2BW4ElRPKlH9OTE5fgowIQFjEV8Bc2cEuT5MNESRDAAIJm88Z2OVDIk41chhBsgQgespvg0XcDgfaXvkKNf0shz7HEWSMAMT+tjfDgQNHZ4f92RhBxpLXvveFnZjZGEEmKp9MRCZ/bJJB/rjmmWt9xH0cjh32ZUsEGSF/UvN0AN0H87soWG/oY4/IlpcgGeRp/osIkkU+pRGNaYyIJZ+qCCGWxohTmieDseT/iwh+/PjxE6R7vwHpwkGS7i/bmgAAAABJRU5ErkJggg=="
    },
    {
      skillName: "Flutter",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABF0lEQVR4nO2YOwrCQBBAx2RFL6DXWVvRwkJNYeMtUmrpAURRS6vY6BEEBU9g7SEMWI6sKPhJyArqzMo8mDrvzS4hBEAQhK+jN9ivbBHfmB5wQeSpkM1TIZunQjZPhWyeCtk8FVo+zIjQsnkitGweaJagP/RQshOsbDB0Vv7NCJ7ylhG85TMiEh/qR8d+aXlas5FPiUiV96MYzVhG9OCXmKthJkveMoLPz6sk+YwIN+T95Ai35P3rlFenbdr1I8OL4tA2QHXmh3x9vANueBYRRr5YHaIZ5yLUnbxzEepJvlAboWqM0WtNMNeeDYBzxE3+QTqYPU6bYYR5M6nuYn+Rbk5fpV2IgGAaZopLxC+Qk+DCX5yEIABLzq9GJ2/sHHe1AAAAAElFTkSuQmCC"
    },
    {
      skillName: "Dart",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO3WMWgUQRSA4aeQJoJgsiMoaGHSiEnjVYIgMzFd2tQGM7u12BwKkhSephIt08YZYimkDGHnSFAwBwrpokIwBIurNLPxCMSRAw/O5Yyzu29uN7g/TPt4392wuwBlZWVl8dhLfZ1K/YqJqMmEPqBCr08IPQVFjy7/GKFCLzOhfzIZmfihUj+CInZLfveojBao0K1ei/+JiBagKE0umTNM6iqV0bd/LV4oRGXRDFAZBUxEX5Msnj/CmFNMHkwzqT+mXTw3xITcv81k1MBYvO8IEoQ3x2rbhvgK9ZwP6uby/Xfm2pPt124Bvlpp/1ouEOT3GX24te5k+aFZdZXw8Kjzl48//ewMceXBh7foAI+rpfbw7nt7YhDnZuqXCA8P44ATgyA8fNEZ2usJUmjE2dk3Qx5X+8cBCo0gfjjfPey4Z3nhEBeCxqDHVdMWUDiEx8N78SE2b1WXCLAuaAx4vtpJA3CJANtIUL/Ta0CS7xsXCLC+Pr56nxXgAgE2Dd/duPi3AWm+NDERYHd91kYwAZgIsGrOnCZ+uIcJwEKAbYSHM9gADAQkiXBVxQZkRUDS4ggMQBYEpKkbgQVIi4C0dRBU6FwRkKU24sZiExWQFAFZG699EtgAlgABGFWe767mhQCsKs++rOSBAMweb7aqtc2WwT7Qz1wgoN9hIyCPMBGQV1gIyDMMBJSVlf1//QIAUa+np5/fKgAAAABJRU5ErkJggg=="
    },
    {
      skillName: "Android Studios",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO1YS0hUURi+SvYkamGLwpReCm114cycM9KLFi1y25NIKKIWRaBhSI9dCUKbslXgJptF6j3/KEOYEKSZQ0iNev8zilNR0MMKKitJT5zrzDhzZdR7545jcD/4mGEe3/f9//nPmcMoigMHDhw4cOBgiaKiq2sZQThFENoUIXIWzViIHIqgEg41O0O+5ZY0iKbuIQivKAchSRAOKYsEL/cfjvlSzpAiHDAtIrs+IyILYG/39QfWKBlG+RvfKoosYvBuNS3k5u3bCLLfiUIU2VUlw6DIriV5cvhDBv3FlsQIZzeTC4Bx1wAUKRkCDbdspgg/DZ43LAu6h1rXEs7eGzpyX8kQCLIHhhX/sHfk0bq0RCmHKkMBsivexM+UvlNXU82/myBcpsiaCLKnlDONIrzWyZmmvzb9Xq03DLvkd5REnzC4KbKpRB8PZyeVtCGu5BIOzw2b6oUemrMjFBmTczqryHmo7y8EVZ44Ua0+o4f0tudYC6uuWHfc2Ca29N4SJcE7v8yGTsXi4N1xqSm1o6Mz5UVGFTtBOGsuDjaKvMB5ofjP6I8urSXt8C6tJUlTelCu2rvPPCNqYVnI15fbcU43irGguz7tAgq665M0pUfZgK+fIGy1J7ymEsLhkzQr6mmYMWo/Kwp7GtIuoLCnQdeK6UqP6C/wmDwY0gpPwnCMcjYRPxU0VawMXBTru+pEaajZlvmnHGTHRf6T62JF4ILwaNF9MF3EBOFw1FJ4inCCIkwazcqHHtoWnC5EG2HSg+y4ufBhtp8g/M1UULMkMstCL3TuoY4SguxbtkPT2UV89Q6zHfPf/zn0ZjssTUWEYGkwmJeyAP0qMIdA5ehjUf3xpc7KSKdtwSrN6V5KMTqtmwhnP+b6sjSo+zyoUz63q4BqE7qEw3c62LFxdvc5a7TTKFMF0OlRum0I375B3vXnXepIZ3ypD47aOEIRk7oI4xWamp8w+6zWrjCLRcKhJl4ARQhlOxA1z/74ub8EwggrrAi3bZfdP53tINQ6q+S/AE1LIIiwQsLZPbkCwWwHoZbJnskCvvzHBYzNeTdy4MCBAwcOHCiZxT9cNP1LuumjhQAAAABJRU5ErkJggg=="
    },
    {
      skillName: "Unity",
      iconSrc: "data:image/png;base64,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"
    },
    {
      skillName: "Git",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC"
    },
    {
      skillName: "GitHub",
      iconSrc: "data:image/png;base64,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"
    },
    {
      skillName: "Mysql Database",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1klEQVR4nO2Ya0wcVRTHDwUs4LIrIH3YLNCd7T5i+Fb9YGtslERi+l2/mBhdRLTaNE21mvpsWmiM8dWq0SbGRzT2QxfaVKyWLSAtdLe7bXlU94FordqkFCwEsNDuMefO3XEXdikuy8wsOyf5Z2HumTv3/O45994ZAM0000yzJAz7HluDgcdbMFg7jv11GKOgA9Fnn5+8tmvos3sCe4tfBVUGH6odmRF4RP6H5w+Aq8UB2NOgPwJqMqSZTxQ8qfue1AF4Api6dxUeBbUYxkv7iPqqUxZ8NABVQcBIsMPfIYYnxd/Aoymd+XgASD27C4+pB0B4CpnR75nKlAcfD4AqIGAEQLQtQPCJACgOAVUAQFEIKCOA1qeWzAqhd4/h+0UNoHtX4awAGIQGww+LFsBYi4BtT2ffHEK9jFskygiANNFuxp56PbbVzVIODsDg3qLXldsGfXY1yKPcQcinePDsBUpeAP1RUjp4Lg2AHIZaBtTFpn+oJsNLwP9IhgPoXpfBAPoeUjxo+QGEasS0V9HMywvAF//hU11W/G3/Mjy7U4feHQXY26DHP75ciddPWWP8wqdteOmbVayd/M7t1OGv+5fh5AlLjN8Njw0D7xXjhU+Xqx/ARJsZT2zOjXtOd2/Pk/wmT1pY0PH82jdl4/CRcsl36FAZu+5yAIa9Kgdw/k0DG2zn1ltwsNHI3uKuNJXhz28XYf+Ht0t+Pbv1zO/4k1ls1v/+toJlA91H13/clCNlAvUTgUPZoGoA7u15bKC/fFSacHBjLoG9tZHfxc9XxLT9025mUKiNwKQdgL49YgbQFxz/u8U4eNDI0j3a5+IXK6RX1xvumQGdfUPH2s+8dmv6AZhoM2PXtqUxNU2163ulAEeOrmY+Ax+XirX+THbcwf/01m2s/dQLeekHAPmqTTNPK7fnpXwp3elDxrWONfj7Z2IGuBxZGPbaEn7+SssMwAQ131orfsW5dGAVXm2ukAK6fNA4YwulzKC20L6S9AMw8EkpW+0p6Mg1CthVIy5stKXRNc+L+ez/js05OHS4nGXCRKtZqn9aCMePCzMAUAZNdVokJQKiGICO53KkwVIQ0Z+zT+/Il/ZxAkTBR68T//2dhX9+tVLq80qjeA6IJzpzqArAmEvA4L4S7Hp+KQueINDeTlkx/SRIsxl8vxhPbsmVMoTkf6coxo8dml4uYH7T1VuvVxcATFJUAoNOo3QG+OvrO/53H6MdVrzQbMZgk5B+AJAr9EGJeBJ8NmfOx17SZZcF/U5BUtoCuO62sm2QNFcANPPRwac1AExClPYZDSDYJGQ2AP+04DUATi0DUCsBOQxVUP/jnbbFtQaMRp3m4gU2V8kDwGsfSWXw009zycs0IhMAmzOVM5+a4AUMHDI1yQPgnNWKXtvQQp3mklKjMDzQXF4hCwAydN9pRK/tAPrsV+cDYL4173eaRmnmZQ1eM80000wzzWIsFwAMALAcAMoAwAIAlQBwFwCsB4B7AWADANwPAFUA8CAAVAPARq5qfq2K+2zg96znfVTyPsv4Mwz8mYpZIQAIAHA3H/RGhVTFx0Bj0ckR+BIAWKtgwDfTWj7GjAaQBTKYDgBMvD6VLIEH+BhMcpUAJLDZFsF1fEG7jy9wNOhEiyC1kQ/50j1074Iugv8CUepaAn8CvJEAAAAASUVORK5CYII="
    },
    {
      skillName: "FireStore",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO1ZO0xUQRTdoFhY+qlAK5aZBQsTlKiFmtDZC0YqS3sTDK3JYmEnBA2diQ1ELRQtLOgIMywIhFVj1IiAEWE1Zv2wu7rH3PdwheXBzud9MNmb3OTlfe6c896dM3fui8WqVrWqWRsGY7sg+ElI1g3B7kGyNCT7DMHyjtOxZLNr17oxxk8AsZrogcvmQ5DsOiRfgOTQ9HlI1oOxhvrwgU82HITgtyFYzgD4RhdOjH6kGg+EA16wi5AsYw18k7MVSH4hOOCpllpINuA/cF72RfgtGstv8Hsh+OPAwctSWg3TmH6Brw0VvCyReIrZpj32BMJIG7ml99uBF6wzQvBwPdFhCJ7vh+DL0RNgGSOJdXQ+cvD873zo0wM/1lBvvUiljgLvrrlOx3YEckg1HVYn4JYHZoNNtABzSSC/hJIVMsBiLzDZapNKPWrgEatx6xTNASZPuSALX7Gl/foGfLwDPDttQmKBisbKBJyqUiPwdBuwdBf4/XMz4Nyi6+VG99Iz0216JMbjrSrp060VtFjYDPDHa+BtFzB+xHU6pnPlVixozgV+VYXAfa2g6+37izXgzR73JoBXl4Hs1MZnpBaBIRUCs9oEshMuOFUVet4JfBkxITCjQkCvVE63m6tQul2XwHJlAqb6H7wKAYKv+k8gTBUSKgR0UyhcFVoOZhKHp0Izwciolwpt5+YqNOT/QqaiJDPnvAu6tLYKdVUmQE0nnaDb+ZsrQDblvun8CjB/A5g4ZhGz8bhaMSfYe18IeBmlG0mubizB5pS7eU7HzE8CxTyQeQK8vOROZpNYgiWVwPu2oSGn1fjDADB11i6O4KsYjdcpE3C/Au+3JuApp0Zv/6YWeIfAaNO+HbKpXzHum1KvMnICgp03Al8iQb3K6MD3WoEv/byQ7EEEqfMII2d2WxP419xlwyGCf+hbc3cdiVpflEkhbeDXm/ckIhMdgaiT4J+sJ6xe35T1OQuMPfBV0nmS7VDAbyAyGq9zyg6T2omeESypvcIGQoQKwPF4K/VtqGanjYezs6NyxClJnF3e9Nq1Lqoqd8Rv1qpVLfb/2x8qHWve0VclIAAAAABJRU5ErkJggg=="
    },
    {
      skillName: "Firebase",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZT4hVVRzHP5WTqOQiNy0UAsGFG8lVuJFU3GQrUchNtCjdxKihhqNpKqXhzHNMxMFm7i3BYEAo/EM66jhzjv9wIFGRFKU/lhsLXEiBf+Yr97zxed+8e59N99w374E/+O7u4vM5v/PO/M4ZeF4NWAqZr5C/FTCXRiyFtCtECrisDbxIo5UCepxAMe/SaKWAP2IC19VBE41S2sdEBQzGBKKt9AGNUgp4swy+mD/VzTgaoRTyfoJA1IXlZd+JF1TgpAp8Tz2VQr5MEbijr3ml9F0bi1VALq3Mpl5KIYcSBYoSLe6bbl5SG1dLAgVOUi+lkJupAiF3tZdXVWBpDP6ZXVC03SxbZbils7yeH3w34xTyqIqA1MU2tXGrQiClC4rgDTtlkYvhvfwEvuGNqvBRtvFQ2yvgE7ugaKtZOkvwRYEt+Ql0saQqfCfSSqTPUgRiXRiC/7YMvpju/AQCNlcV+BypGWk5qtYFXeFlWQ4kwEcd+Ck/gZADqfB7kVYMCUTZmCKwg1My/JAIb13uRb+LfAQCrqYKbIrBp3WhHelIKrhKOcdk//AdNCnkfiJ8xxBw87B8+j/gLdJp5vgX6GR66upvSICPd2En0o//Ed66LPMvELAwEX53yuo/SXQiHR0RvGRozUNgfaLAuirwa5AOjxDeuhzMQ2B/BfxXVeA/GfG2USzX/AuEXBw2uElrU+DXZoKXLA804PGWF13cFfBPmUAhBb4F6VgmeLn0M82fQMjUitVfkwC/HqnHA7x1R+nb/gS6eKdMYHsCfPSX94QneOuywp9AwOrYuCytyh1eMuz2JxASxMblcvjNSL2e4a0TOO5PIOB82bj8BH4L0qkc4K3L737goxtTdFWMj8tRvkDqyw1eMgzqKBOyC+xjcsW4vNUdc/nB25LEDF8v0U/H5dYawVsnsMiHQHNpXC4MtbYW8NalJbtAwB43Lu+qObxkCbML7OJndfBoFOAlw5nsAt/xW83BbUngr+wChnmyXBkFgevqZ0FmAScxQJMMzTLcrQH4PRk26ghjvcCXiZxnkgztsjzMYbsMuoeuXl7zDl4h0sdMWYxH+As6zazcwRMeZRfJ8GsG+NsyfCiN4n86NcB4t2ct/45gxe+7rXiOidRLqY8pKY+1w9OjfqZTryXLWzJcSjwWfV4T8yz1MkaWj2S4IcMvMnzs9ZXheVE/9RhWKOxUDYbwOwAAAABJRU5ErkJggg=="
    },
    {
      skillName: "python",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2YPWgUQRTHZ2dzM5dYaCFBAiaFNkZRBMUuiI0fRdBCwSZFolj4kWCSmRMJhyksBJVgI2qhhYIpFEREczPZmUSDSBo/kIAERWMnETQmSDRPdm89g4TczCXrXnD/8Jpr9vfb92Z25hBKkiRJEoTAQTy3GWcEd7i8i7l4hZkYx0x+x1xMYi4+YCaeOlxecrncgbJZXD5vrUNsDIC5BNNyuHiITnor40ZHKHuvCjM5ZgNfKCaHYu+Ey/p3lgQflpvJ7YpVAHPZHL7NMXRK1COeq8VcvrAYpe54BZhoy4PIa39+k13mAvJiWQgUOtAu6+w6IMtEoMRyEoGYu+SEHQBN2kBTmFVToOkzUGTfUhWAoBSdAU0Plf70jLfW4fJy+KWdWMi8lySgg/oKMl1nze52ykbM5LfFhi5BAEDRs3b0+e1w0d/4HALnzQTIqBW/w0VP1PBBMXEsEFDk9LwCfnlVq4wFMBNvohcQn1H7o+p8B+jtogKK7DGjb/VWYC5mIhaY8A+CyId/sqw6WKjFBVrNBHhuezTjIn9iJt87TF5FHXLN78eBpreKwufrjNn4ZORBy1EYwVw2oc6+muBmZhgAhEHRC4bw/k50zkyAi6Pmu4i4iY4/oKbQhZFRqQOg6LAxfH6EuJkAEy2GW2A/ynoVAdTjyhrQtAc0eQua/rAC06YC6SYjAbdT7DWZZ8T61gXwXsUW0ORTJNB6Vg2mNpn1mMn1BgJDeXiUBk3eRQ6v6CQMo5SZwP5et9hX2OHiSiCgSGPk8DqoO8gmDhPS6AyjyIl/AD/tj6mVAGbiiJFAsTPMYsAr2oysw3PL5/u/J2KBKdD0NShy3XzhzhGXid2YiemSBRSN98IehMsGf7//+16wdASKZMEjpGKW/M8EyBgMkHrQ6dWg6POlJ6BI4e9H0KSrTARoi4XAR/BSG2AwXQuavgwFuuMVCEZiAWvAo4djFTC+z869gL9YXdQjExhGVaDJDTt4Mgo63YDKKaAqtvrXPlBEh0fsifAsMw6KjoCi90GRLAxUboNe5MbNmyRJElQe+QWgfIcmva+j+wAAAABJRU5ErkJggg=="
    },
    {
      skillName: "VS Code",
       iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEs0lEQVR4nO2ZW2gcVRjHv5nUFupDycY2TWzTW9qk9VGrIqgPBUFQRESRqn0U2jSbvc22BTHRXGaCCBYfpIo+pG8BbXdu2ZmTkBKreEncmSVY8ckWFCsGaswcNbdPZjbbZJPdnbOy7iaQP/wez57/b/fMnDOzAJvZzGaqli0Xrj2+tS91c8fl23cCCfrBLvWvg7BhEhp6DoJJCkEDuRCZqZMp1iWcuYDsXK5N/PkArOuEySkIGXMQMhA6DHQlPIEsCWcxIFMlkHAehXWXiNkBEWMRwiZ6LEnkCOTgXK+TnWerXRsAkIMoeQeiJnpElgTCGYn7ZFqUuoQzVnuF7q1O987RLRAjn4BAEGIE10iETF8Bj4QzXPnyUeNeEEwd4gQ9AU/CXCOxU6YMOP9Utnw4GQDB/MIrn6WAxE4mAYqVKy+YjSCQdE75IhK7FMoEewFEDqTUwyCm9pdcPjp8DOLkVt7yBSTqFcoEW4F3JwOcZI/yko28aM9zktUNg4M1TGPjI49BnEwVLb9WYr58AtJkEy9ZN7zyK+AkewR60/VFxwrkGRCIw1Q+S4z8BjHjqd0KRRZ8+/OS/fnq8ncR7Z9BtJ/IOzBmvAqCMVtS+bg55l0rANCgUGTBX0C0pgoKZJjjxfQ57xrJJjLUAVFjAWIGgmCyFF8EwbwIr4/fk/2Isgm4691HILukZOicDEBQkyAyhBBNoifgJyGQOxAjL6yet1GhyIKvgPvNcqLdxSLB907MeLfBkIY5Eq5AXglzAs6TvEfmxrIJLIUXrXZeshZ8JUQLuQvXGCTMS9Cubys03/0KRRaYBTwJyT7Ji/Ys05Lq+gohrK+ViJnTEB9+2W+uPSpFFqDU1PTbJ3jRmmZaUj0TmdJZiWjye4gPMT2c7Pm/BLz0fXec4e6Uu6TC+oB3kGPMXpUiC/9N4LR8HNq1Kb573F8gu6REewA6x7dXXyAon4A2ZRrOJBDOKsi//Q2zBC/aKeibbGaZpkmlyEJp5cPJk9ChzkJQ9cp7Em0y8m99XYKEe/2kXvKbap9KkQX28rFkO0SSCxAeQujQMCMhZyTOJJB780t2CW/jsy5B5+TWCgggBwLpyhy0DIRIEvNLXEXujeszpUjwovVtoeP5fpUiC/79BdKTe1pcJdG+JHH6qgJtn9Ux79p3sX6vkeynV097QKXIgr9AvrP8SomgOgdn1fPeL1Xqrr38SyxykiWtfMY4oFFkgUHAHMt/bvckfoGw/mS+YXx/+hXWXXvFgXAUesYb3PEHNYos+AucI00gkBt5TpEjEByuL9uuvXyrve2OK5/A8tuE0aXy8xA3u+FFxkfKPusRd52Xdl3Yc4c0iiwAe9y7kfkQRJKlvw3rTbfyknWzFIlmjTIBFUvPeAMvWvbGFXAjpmuLPmNLyxzWKBNQ8Vz8cRsn2p+WQ6BZq/SrxWwGB2s4yfqomMARjfpyWKU6VC0+z9otOi2ORrVj6sxuqHZ4yQrm27VbChZ3SKu+zv6p4fut11bv2q06XYGz0KJTpVV1HoT1GvdAx4s2dctvf+8Hr3iL5sy26M7AkeTfrbARsuPjW88HPvzp10NX/pg6qtP3j6p0X7U7bWYzsMHyL9ro5E9GuMsUAAAAAElFTkSuQmCC"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "KIET Group of Institutions",
      subHeader: "Affiliated to Dr. A.P.J Abdul Kalam University",
      subHeader2: "Bachelor in Computer Science and Information Technology",
      logo: require("./assets/images/Kietlogo.png"),
      duration: "Grade: 8.0 ",
      desc: " Expected 2025"
    },
    {
      schoolName: "Rani LaxmiBai Public School",
      logo: require("./assets/images/LaxmiBai.jpg"),
      subHeader: "Science(Physics, Chemistry, Mathematics, Computer Science)",
      duration: "July 2018 - March 2020"
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Flutter Developer",
      company: "HELPY_MOTO",
      companylogo: require("./assets/images/Helpy_moto.jpeg"),
      date: "January 2024 - April 2025",
      descBullets: [
        " Contributed to the development and enhancement of the company's mobile application.",
        "Integrated on REST API's and mostly backend of application."
       
      ]
    },
    {
      role: "Android Developer",
      company: "Vasukam",
      companylogo: require("./assets/images/vasukamLogo.png"),
      date: "March 2023 - June 2023",
      descBullets: [
        "Designed and Maintained high quality android application and integrating augmented reality features and firebase for real time synchronisation.",
        "Collaborated closely with the co-founder, ensuring alignment of development efforts."
      ]
    },
    {
      role: "AR/VR Coordinator",
      company: "Mycin Technical Society",
      companylogo: require("./assets/images/mycinLogo.jpeg"),
      date: "October 2022 - July 2023",
      descBullets: [
        "Served as the coordinator of AR/VR within a technical society, providing mentorship to a group of 20+ students.",
        " Guided students to use  Unity Engine, C# scripting, Git Hub."
      ] 
    },
    {
      role: "Mainter and Contributer",
      company: "HacktoberFest 2023",
      companylogo: require("./assets/images/hacktoberfest.png"),
      date: "October 2023 –  October 2023",
      desc: "Successfully Completed the HacktoberFest challange ans achieved max rank in it. Also, as a maintainer I successfully closed 20 PRs, diligently upholding code quality and project standards."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "SOME PERSONAL AND PROJECTS WHICH I MADE FOR STARTUPS",
  projects: [

    {
      image: require("./assets/images/joharBasketIcon.png"),
      projectName: "Johar Basket",
      projectDesc: "The app is developed as a freelance project for a client. This app is a e - commerce app for a local business.",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.opxica.johar"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CartoonIcon.png"),
      projectName: "CARTOON",
      projectDesc: "The app is designed to convert  any image into its cartoon form using machine learning model.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/ashut0sh75/Cartoon"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ARimage.png"),
      projectName: "AR Filter app",
      projectDesc: "This app is a camera app which augment an AR filter on face using face recognition technology of unity and also has the ability to store the photos to upload it to firestore and retrieve it using link.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/ashut0sh75/AR-Filter-app"
        }
      ]
    },
    {
      image: require("./assets/images/Portfolio.jpeg"),
      projectName: "Portfolio Website",
      projectDesc: "This is the same website that you are seeing. I hope you like it.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/ashut0sh75/Portfolio"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements  🏆 "),
  subtitle:
    "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Top Ranker on GeeksForGeeks",
      subtitle:
        "Ranked 43 among 7195 registered candidates of my college in coding on GeeksForGeeks platform. ",
      image: require("./assets/images/GFG.jpeg"),
      imageAlt: "GFG Image",
      footerLink: [
        {
          name: "Profile Link",
          url: "https://auth.geeksforgeeks.org/user/genius_general"
        },
      ]
    },
    {
      title: "Google Developer Profile",
      subtitle:
        "Achieved over 10+ badges and attended 10+ codelabs on my profile.",
      image: require("./assets/images/googledeveloper.png"),
      imageAlt: "Google Developer Profile",
      footerLink: [
        {
          name: "Google Developer Profile",
          url: "https://g.dev/ashutoshgupta75"
        },
      ]
    },

    {
      title: "Competitive Coding",
      subtitle:
        "Solved over 950+ questions on Leetcode and GeeksForGeeks combined.",
      image: require("./assets/images/coding.jpeg"),
      imageAlt: "GFG and Leetcode",
      footerLink: [
        {
          name: "GFG Profile Link",
          url: "https://auth.geeksforgeeks.org/user/genius_general"
        },
        {
          name: "Leetcode Link",
          url: "https://leetcode.com/ashutosh75/"
        }
      ]
    },

    {
      title: "Hackathon Finalist",
      subtitle: "Hackathon Finalist in Endevour 2023 organised by E-cell of KIET Group of Institutions.",
      image: require("./assets/images/HackathonImage.jpg"),
      imageAlt: "Hackathon image",
      footerLink: [
        {name: "View Certificate", 
        url: "https://drive.google.com/file/d/1TBLi-wUqnTHEGksH4YoXk-MN0l_Ar-za/view?usp=sharing"},
      ]
    },
    {
      title: "View on Articles",
      subtitle: " Wrote 11 articles on GeeksForGeeks and they have nearly 54000 views and increasing, helping students, professional and enthusiats from all over the world.",
      image: require("./assets/images/gfgarticles.jpeg"),
      imageAlt:"Articles image",
      footerLink: [
        {
        name:"Thank you for everyone's support.",
        url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//certificate Section
 
const certificateSection = {
  title: emoji("Certifications  📜 "),
  subtitle:
    "Certificates I have earned !",

  certificateCards: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle:
        "Issued on October 2024",
      image: require("./assets/images/aws-logo.jpg"),
      imageAlt: "AWS Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/72598218-5d8e-47a9-9a09-98d9b341a545/print"
        },
      ]
    },
    {
      title: "Cert Prep: Unity Certified Associate Game Developer Animation and Cinematics",
      subtitle:
        "Issued on October 2023",
      image: require("./assets/images/Linkdin.png"),
      imageAlt: "Linkdin Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.linkedin.com/learning/certificates/01222dadf41d9b3240bf75664cc84c03695002978266a5b2057abce945db6a64?li_theme=dark"
        },
      ]
    },
    {
      title: "Learning Git and GitHub",
      subtitle:
        "Issued on October 2023 ",
      image: require("./assets/images/Linkdin.png"),
      imageAlt: "Linkdin Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.linkedin.com/learning/certificates/ee4d9cbcd3fe2c8f03e05fe574b1741d6f231b16992a0c0a734e8353e6ee77f2?li_theme=dark"
        },
      ]
    },
    {
      title: "Learning GitHub Actions",
      subtitle:
        "Issued on October 2023 ",
      image: require("./assets/images/Linkdin.png"),
      imageAlt: "Linkdin Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.linkedin.com/learning/certificates/c438fc813b2ee7dee9c8cb793f63518ff3663c4ea57b3c3f78b6d5a9d12f675b?li_theme=dark"
        },
      ]
    },
    {
      title: "8 Git Commands You Should Know",
      subtitle:
        "Issued on August 2023",
      image: require("./assets/images/Linkdin.png"),
      imageAlt: "Linkdin Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.linkedin.com/learning/certificates/c1e48dc9a0ff067c0a6b14d2c70c9cc79a88c5395998588fbff48251b4f6bb88?li_theme=dark"
        },
      ]
    },
    {
      title: "Programming Essential in Python",
      subtitle:
        "Issued on April 2023 ",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Image",
      footerLink: [
        {
          name: "Verify",
          url: ""
        },
      ]
    },
    {
      title: "Programming Essential in C",
      subtitle:
        "Issued on April 2023 ",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Image",
      footerLink: [
        {
          name: "Verify",
          url: ""
        },
      ]
    },
    {
      title: "Problem Solving",
      subtitle:
        "Issued on October 2022 ",
      image: require("./assets/images/hackerrank.jpeg"),
      imageAlt: "HackerRank Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.hackerrank.com/certificates/233e437cd985"
        },
      ]
    },
    {
      title:" JAVA",
      subtitle:
        "Issued on September 2022 ",
      image: require("./assets/images/hackerrank.jpeg"),
      imageAlt: "HackerRank Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.hackerrank.com/certificates/316a77363e8f"
        },
      ]
    },
    {
      title:" Certificate for Excercising Leadership: Foundational Principles",
      subtitle:
        "Issued on July 2022 ",
      image: require("./assets/images/edX.jpeg"),
      imageAlt: "EDX Image",
      footerLink: [
        {
          name: "Verify",
          url: "https://courses.edx.org/certificates/577109dc9ddf4b3b872950ab97e69649"
        },
      ]
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [// fill according to yourself
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "/"
    }
 
  ],
  display: false // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Articles",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/c-nanosleep-function/",
      title: "C nanosleep() Function",
      description:
        "The article is about the nanosleep() function in C."
    },
    {
      url: "https://www.geeksforgeeks.org/snake-game-using-tkinter-python/",
      title: "Snake Game in Tkinter - Python.",
      description:
        "The Legendary snake game recreated using tkinter library of python."
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "link to podcast"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7607175127",
  email_address: "ashusanugupta999@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@ashut0sh_75", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificateSection,
  talkSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
