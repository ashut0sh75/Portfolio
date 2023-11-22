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
    "Aspiring android developer with a strong interest in mobile application and a passion for creative problem - solving. I honed my skills in Android Studio, JAVA,and  AR(Augmented Reality). Seeking opportunities to gain hands-on experience and apply my knowledge in a professional setting."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LN2RLVFqKGCPYanmnQlnYRn_dMkh1bLa/view?usp=sharing", // Set to empty to hide the button
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech Alchemist: From Android to AR, Always Excited for the Uncharted.",
  skills: [
    emoji(
      "⚡Mobile App Architect: Crafting Scalable and User-Centric Android Experiences"
    ),
    emoji("⚡Immersive AR Developer: Expert in Creating Captivating AR Experiences for Mobile"),
    emoji(
      "⚡Innovative Android Engineer: Bringing Creative Solutions to the Forefront of Mobile Development"
    )
  ],

  /* Make Sure to include correct base64 encoding to view your icon
Find some icon with base64 encodeing at https://icons8.com/icons */

  softwareSkills: [
    {
      skillName: "JAVA",
      iconSrc: "data:image/png;base64,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"
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
      skillName: "Git",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC"
    },
    {
      skillName: "GitHub",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0UlEQVR4nO2aSWsVQRCAv4iiAcUVFMxBhRgVjfuuBwVxQT158KjiLijqQU+ieBC3aHD3JP4JDZoIblEEF7y6m4P7gnE3iRT0g8djxnT1TPc8YT4oCC8ztfTMdFdXNeTk5OTk5PhmBLAeOAU0Ao+BD8AvI/L3I/O/k8A6oIb/nHFAHdACdDjKS+AwMJb/hApgCdCcIOg4uQksNjbKkinAHQ+Bl8ptYBJlRCVwDGgLEHxBxFY90CPr4GuABwEDL5V7QHVWwU8F3mUYfEFkBZkVOviFwLcyCL4gX4EFoYKfBrSWQdCl8i3Em1ADfCyDYOPkvc85odJiwmsC9gANwI8UA/sOXDS6L3Vy7V1fq8NxC0dXFl0/ENgFvE4Q+CtgK9C7SO8yi/uO+khy2iwMD4+4ty9w3iH4c0CfCH3VFvf+ASakFXyFIsMrflKlbAZOAyuA8cBg81mJVJnfVphr5No4+lr60pxW2rxE8dS64p+uCn9kuU5Ms8JgP/zTW+HPjTS2tB0KkX2/b4YofapNYqxOaWw5/pmr9OlgEmMtCkPtaX1znTDH2LL163mSrK9DIfsJx2Glb07Z4XrlKHcnHJLpvVD4t9bFyCmFgTWER/OATrgYaLJULjl/L8LTU7HfkP2DmqeWyi+QHQ2WPkoZXs17S+UHyI5Dlj6+dVH+01K57NayYrviM1Xzy1L5Nsp/AORhqvlUhuu/6ycghVNvk2Aj2XHF5yTYZKn8N9Cf8Awwtm18vOxi4KylcpF9hOeAwj9J6tSsURYtRxOOWmXRdZWLkdEKA4X9gJS5fFNl2uYa30a6GnuiNNRiGie+mAg8U/okk7kz9UpjhTW3LuXymOg6oshNikXuc2a8g8GCfDYVXnkjujjYlnumA2eMLlc/EpXEhFsRSj+a0rU0S75YOCH7itXYs1axF/mXXCcFlkYobjdLXxfTDHlpcapDUzCpjBl4rSxKYwAqTABRBnYXfSpxm6d2U13WMs50eFyDl3J+akyOaY1J0IPMNRtjHJF01fd+v1T+mBUjVepjjO0oumZvRMV2ZwKbmxwHQFYhL4XI+xHGHpb04CabNFWc2JBwnzDf8dyQtwJtdcy5IM0Mr2GSMvi3IQ5NzTK5f+mymHi9jWCi8ojMDAIxzxxMKnZAkpUtJS3ybglfR9sBaDUts6DMNq9c1Mrw1DQufiacjW0G4A0wk4wYZnFuyOcAyIQ3lIzpYXp1bQEHoM10fUO24zpFzuRcCzAAtz1vuRNRYfLv6x4G4Gqg9ntqjDGfxqgEOkaZ0nfIcpsXXOsBOTk5OTk5+OMvJumzTKKLQPIAAAAASUVORK5CYII="
    },
    {
      skillName: "Android Studios",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO1YS0hUURi+SvYkamGLwpReCm114cycM9KLFi1y25NIKKIWRaBhSI9dCUKbslXgJptF6j3/KEOYEKSZQ0iNev8zilNR0MMKKitJT5zrzDhzZdR7545jcD/4mGEe3/f9//nPmcMoigMHDhw4cOBgiaKiq2sZQThFENoUIXIWzViIHIqgEg41O0O+5ZY0iKbuIQivKAchSRAOKYsEL/cfjvlSzpAiHDAtIrs+IyILYG/39QfWKBlG+RvfKoosYvBuNS3k5u3bCLLfiUIU2VUlw6DIriV5cvhDBv3FlsQIZzeTC4Bx1wAUKRkCDbdspgg/DZ43LAu6h1rXEs7eGzpyX8kQCLIHhhX/sHfk0bq0RCmHKkMBsivexM+UvlNXU82/myBcpsiaCLKnlDONIrzWyZmmvzb9Xq03DLvkd5REnzC4KbKpRB8PZyeVtCGu5BIOzw2b6oUemrMjFBmTczqryHmo7y8EVZ44Ua0+o4f0tudYC6uuWHfc2Ca29N4SJcE7v8yGTsXi4N1xqSm1o6Mz5UVGFTtBOGsuDjaKvMB5ofjP6I8urSXt8C6tJUlTelCu2rvPPCNqYVnI15fbcU43irGguz7tAgq665M0pUfZgK+fIGy1J7ymEsLhkzQr6mmYMWo/Kwp7GtIuoLCnQdeK6UqP6C/wmDwY0gpPwnCMcjYRPxU0VawMXBTru+pEaajZlvmnHGTHRf6T62JF4ILwaNF9MF3EBOFw1FJ4inCCIkwazcqHHtoWnC5EG2HSg+y4ufBhtp8g/M1UULMkMstCL3TuoY4SguxbtkPT2UV89Q6zHfPf/zn0ZjssTUWEYGkwmJeyAP0qMIdA5ehjUf3xpc7KSKdtwSrN6V5KMTqtmwhnP+b6sjSo+zyoUz63q4BqE7qEw3c62LFxdvc5a7TTKFMF0OlRum0I375B3vXnXepIZ3ypD47aOEIRk7oI4xWamp8w+6zWrjCLRcKhJl4ARQhlOxA1z/74ub8EwggrrAi3bZfdP53tINQ6q+S/AE1LIIiwQsLZPbkCwWwHoZbJnskCvvzHBYzNeTdy4MCBAwcOHCiZxT9cNP1LuumjhQAAAABJRU5ErkJggg=="
    },
    {
      skillName: "Unity",
      iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO2ZaYiOURTHf8bY92Us80HZikRCIkvWUChJg/CND5bkA0qJiWSkGKLIUkRiqMFYa4qZJssgH5A1FCKjyFLGeHXrqKfbue+zvb3PyPzrfnjf59z/vf/nuefcc8+FBjTgv0EeMAvYCdwF3gPD+QfQFZgDFAPVQB2Qstox6iHyZeL7gAfAb2XiKat9A1onPfFewCKZ+IsAk0452tykBOQAVTEmnrJaaVJCpmRQRAr4CXRKQsjpgBP8AlQCe4GnPraLsy2im7xBeyJvgXPAVvGbAbIEDfoCtT5CyrMtZCVwQxx8KTAaaOvT56gy8SfW7zqJehlFR+CWMvhDoH1Irv7AL4vnJjBd4V+VSREtZV3bg3wE+kTgO6FwTQWaCKf3f/PyMgJDfsERVcZF4Bug7Oa3gUbyfL8ylvGnWMhxvD2zOy/MYHSb4nk+UXm+Pq6QYkc02RSRb6DyNaqUl/fGsnkUR8Rmh4gSTwgNi1KFb7Jit0uxGxxlwGUOEdXi+FEwVEkYqxy2o5Sxi8IOuMiRob6SjS8qyhTOSQ5b4/gvLdtnYQab4dhtTVoxKIaIEQpnhU+fbZb9vaCDjQS+KgMa55xJPFxReCf49Bmi7DO+MG/7k8MvTPoRB9p6N5trEDwUexOyfdEbeOcQcYD4KFd4xwfsWwh8B3r6GebHPMVFaUG/hkE/YAMBcCfLIlIh05rmwLQghrcTEDI7hJBJssubzDstOsg5IptC3gWZmKBI+hwnANo5UnTTTkr2GwcnFd7DAfve9fQpCNKhFXDVIeZUTDFdgA8+Ga+rAulNMM1OHwhNgTMOMeeBZkRHgSPlaZOmzzzL3hQqAiMXOOIQUyZRJCpOKZy709gfsmzNGT8UGgMHHWIuxhDTWQrUXr46YIzD/rVluzzKoCb73OEQcwloEVHMXIXvscLXT7EbRgwUOsRcjiGmROHbYtmssJ7/EB+OhbUOMdciVszzlCVWKwevvzgbI61Ji6WOw9Z1n8jjwnyF676EeRNwPlvPtpNBLHZcylREFKNVU9ZJldL+39yvZBTzHeeWKGLMsblG8QWt/NSDLGI18NxTtF4iSV/3NH0WOPzP20zSWC8q8in5itWSd22UpWKcu1WabOJvM1Gu3t6ReDfEGh+bNUkImRpSSCpAG5uEkJw0R4IorVaWX2LoIGF0idSPK6U2FlbIHeop8iWSrZTbrUqpkriE7OEfQq7cYM2R3K5EEslPSflHA/5r/AHlt9Phzd8lpAAAAABJRU5ErkJggg=="
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
       iconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaElEQVR4nO2ZS0hjVxjH/2O1tmp9DKVqC0U3BRUXKig4K0UUWxCVotXiohtn5zB04cZHdwoi2M4u1IotMy7GmWbsA7R2F3x2K9GqHQuBmnETJr5j8g3f4d5w5npzczM9MRH8w1nlnHv/v5vvPL7vADe60Y0SpTQA3wHwA/AB+BrAW7hG5p8AIEPbAXAXwDtIcvOzbDgvL48aGhqE+fT0dBnkPwD9ALKRZOIQmWGTubm5tLa2RgMDA8L04OAgzc3NUU1NjQzyEsC3AD5EMppnORwOYba3t5d0LSwsUH19vQxyAuABgA+SyjzL6XQKky0tLWQU92tvb6eUlBQdZA/AR4kw/8jMPMvlcglz1dXVFElut5tqa2t1iB/exIAS86urq5fMbW5uCmOlpaVkpZ2dHR3ghd2XNwL4Sxv0HEC3avMsj8cjjBUVFVE0SXPCUoV6vHKT4o/bTwDeU2WedXBwIJ6dn59PKgAGAYS4U2ZmJo2NjdHx8TFNTk5SVlaWPvhvAFUqzLP8fr94bnZ2NqkAeKl3mp2dvRSrFRUV+gPOANwHcOv/mGcFAgHxzLS0NFIBEO6Uk5NDKysrrz3g9PSU+vv75bD6A0CBtMM+1nfY9fV1sqPl5eXwO5UBdHZ2RoRgzc/Pi5jV+nsBfBar+WAwSKOjo+LLKwc4PDykjo4OS4j9/X1qbGx87TBmN2y8Xi81NzcbD3LqAE5OTuji4oJaW1vDEGbGQqEQTUxMhL9iWVkZ7e7uWppYXFykwsLCS+ahEuDs7EwMYAh5TkT6uvwPFRcXh/vNzMyYTtbh4WHjskxxBTAMsoTw+XzhsOPW09NDR0dH4re9vT35KCA3H4CvlAOcn5+bAkSDYE1PT1NGRoboW1JSQuPj42Jim5jnFexj+b1XAmAHYmNjg8rLyyOFyrGWrKQY36sMgOPVCsAOBO/gfX19xnFrAD6J9F5lADx5TQaFjTc1NdmCYPGOzsurNv5fAHcSBpCjGebfu7u7bUMYJnEAwDdxDaFgMBh1GY0VwmQZ/VPKddUD2NnI2FRVVZVtCJON7AWAT+OyCslHCTNjZkcJuxCGo0RIOUBXV5elIa4aFBQUmK5OPGHtHuZGRkYoNTVV/U4cyTz/M9GOA7Eep5eWluIDYExotra2qLKy0swwh4ADwG9vEk6BeCU0cko5NTUlp5Ry2wfQoo19G8CzWCH8ilPK50aTFuHyEMBtw/h0AL/GAnGgOKlv0k6IVjHOS9/nFs9giF/sQnjiUFbhHPfHCOZ/t1lo5XBy2oFwu922Clvb29u2AeR/Qy9s7QL40u5ACWIuGoRLKy1yVdrqdMulx1gBdKXGOsAA8cwqb3ZaFHe5X1tbm3EechHhSmUJ4TApr3PVo66uLtIc/P6qAUznhA4xoF1wDA0NiQsOQ6iYXUFx6ROJgvjZuGM3mF8xmWVxEwDeR4LF1bunUZZpStYrplggvFrSk4trds36D4B7AN7FNRBDjAHwAHAB+OI6XXTfCJpeAV3yl/kSPoFlAAAAAElFTkSuQmCC"
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
      companylogo: require("./assets/images/mycinLogo.png"),
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "CARTOON",
      projectDesc: "The app is designed to convert  any image into its cartoon form using machine learning model.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "AR Filter app",
      projectDesc: "This app is a camera app which augment an AR filter on face using face recognition technology of unity and also has the ability to store the photos to upload it to firestore and retrieve it using link.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false  // Set false to hide this section, defaults to true
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
