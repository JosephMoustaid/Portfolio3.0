import ByteBurstImage1 from '../assets/projectPreviews/ByteBurts/ByteBurst.png';
import ByteBurstImage2 from '../assets/projectPreviews/ByteBurts/tablet.png';

import ChatBotImage from '../assets/projectPreviews/ChatBot/chatbot.png';

import ClubXtremeImage1 from '../assets/projectPreviews/ClubXtreme/ClubXtreme.png';
import ClubXtremeImage2 from '../assets/projectPreviews/ClubXtreme/CMS.png';
import ClubXtremeImage3 from '../assets/projectPreviews/ClubXtreme/userInfo.png';

import GerichtImage1 from '../assets/projectPreviews/Gericht/gericht.png';
import GerichtImage2 from '../assets/projectPreviews/Gericht/about.png';

import pharmaIQ from '../assets/projectPreviews/pharmaIQ/pharmaIQ.png';

import GoMacrosImage1 from '../assets/projectPreviews/goMacros/goMacros.png';
import GoMacrosImage2 from '../assets/projectPreviews/goMacros/goMacrosResult.png';

import ImmerseImage1 from '../assets/projectPreviews/Immerse/labCopy.png';
import ImmerseImage2 from '../assets/projectPreviews/Immerse/labCourse.png';
import ImmerseImage3 from '../assets/projectPreviews/Immerse/uniHall.png';

import MyWeatherImage from '../assets/projectPreviews/myweather/myweather.png';

import RecipeIdeaImage from '../assets/projectPreviews/Recipeidea/recipe.webp';

import YomoImage from '../assets/projectPreviews/Yomo/yomo.png';




var projectsData = {
    "Yomo": {
      "title": "Yomo",
      "next" : "Recipidea",
      "prev" : "ChatBot",
      "techStack": ["React", "Node.js & Express", "Postgres", "Sass"],
      "description": ["Yomo is an e-commerce website that showcases and sells my artwork" , " including paintings, drawings, and prints. "," The platform provides a seamless shopping experience for art enthusiasts, allowing them to browse through various collections, ", " view detailed images of the artwork, and make secure purchases. The website is built using modern web technologies to ensure a smooth and responsive user experience."],
      "images": [YomoImage],  // Add the image for Yomo
      "githubLink": "https://github.com/JosephMoustaid/ART-STORE",
      "feautures": [
        {
        "title": "Dashboard",
        "description": "Real-time overview of club activities, including the number of tournaments, events, and transactions for the month, plus new subscriber details."
        },
        {
          "title": "Member Management",
          "description": "Interface to add, update, and delete member information, and view new subscriber details like name, email, and phone number."
        },
        {
          "title": "Events",
          "description": "Plan and manage sports events, allowing administrators to create, modify, or cancel events. Users can register and follow upcoming events."
        },
        {
          "title": "Transactions",
          "description": "Track financial transactions with a clear interface to view received payments and expenditures, aiding in precise accounting."
        },
        {
          "title": "Training Sessions",
          "description": "Organize training sessions with an interactive calendar. Users can view schedules and sign up based on availability."
        },
        {
          "title": "Reports",
          "description": "Generate detailed reports on club activities, including participation statistics, financial performance, and other important metrics."
        }
      ] ,
    },
    "Recipidea": {
      "title": "Recipidea",
      "next" : "goMacros",
      "prev" : "Yomo",
      "techStack": ["Python", "Django", "Sass", "recipes open Database"],
      "description": ["Recipidea is a recipe management platform that allows users to search, save, and share their favorite recipes. The platform provides a user-friendly interface for browsing recipes, viewing detailed instructions, and managing personal recipe collections."],
      "images": [RecipeIdeaImage],  // Add the image for Recipidea
      "githubLink": "https://github.com/JosephMoustaid/Recipidea",
      "feautures": [
        {
          "title": "Recipe Search",
          "description": "Search for recipes using various filters such as ingredients, cuisine, and dietary preferences."
        },
        {
          "title": "Recipe Management",
          "description": "Save and organize your favorite recipes in personalized collections."
        },
        {
          "title": "Sharing",
          "description": "Share your favorite recipes with friends and family through social media or email."
        }
      ]
    },
    "goMacros": {
    "title": "goMacros",
    "next" : "ClubXtreme",
    "prev" : "Recipidea",
    "techStack": ["React", "Node.js & Express", "MongoDB", "Sass"],
    "description": ["goMacros is a meal planning and nutrition tracking application designed to help users achieve their dietary goals. The platform offers personalized meal plans, nutrition tracking, and progress monitoring to ensure users stay on track with their health objectives."],
    "images": [GoMacrosImage1 , GoMacrosImage2],  // Add the image for goMacros
    "githubLink": "https://github.com/JosephMoustaid/goMacros",
    "feautures": [
      {
        "title": "Meal Planning",
        "description": "Create personalized meal plans based on your dietary preferences and goals."
      },
      {
        "title": "Nutrition Tracking",
        "description": "Track your daily nutrient intake and monitor your progress towards your health goals."
      },
      {
        "title": "Progress Monitoring",
        "description": "View detailed reports on your dietary habits and progress over time."
      }
    ]
  },
    "ClubXtreme": {
      
      "title": "ClubXtreme",
      "next" : "goMacros",
      "prev" : "Yomo",
      "techStack": ["PHP", "Boostrap", "Sass", "mySQL"],
      "description": ["Sports Club Management Platform"],
      "images": [ClubXtremeImage1, ClubXtremeImage2, ClubXtremeImage3],  // Add images for ClubXtreme
      "githubLink": "",
      "feautures":[
        {
          title: "Dashboard",
          description: "Real-time overview of club activities, including the number of tournaments, events, and transactions for the month, plus new subscriber details."
        },
        {
          title: "Member Management",
          description: "Interface to add, update, and delete member information, and view new subscriber details like name, email, and phone number."
        },
        {
          title: "Events",
          description: "Plan and manage sports events, allowing administrators to create, modify, or cancel events. Users can register and follow upcoming events."
        },
        {
          title: "Transactions",
          description: "Track financial transactions with a clear interface to view received payments and expenditures, aiding in precise accounting."
        },
        {
          title: "Training Sessions",
          description: "Organize training sessions with an interactive calendar. Users can view schedules and sign up based on availability."
        },
        {
          title: "Reports",
          description: "Generate detailed reports on club activities, including participation statistics, financial performance, and other important metrics."
        }
      ] ,
    },
  "pharmaIQ": {
    "title": "pharmaIQ",
    "next" : "Immerse",
    "prev" : "ClubXtreme",
    "techStack": ["Django", "Llama 2.0", "Scikit-learn", "Python", "Sass", "Bootstrap"],
    "description": ["pharmaIQ is an AI-powered platform designed for the pharmaceutical sector to prevent and predict drug shortages using predictive models. It also provides an AI medical assistant to enhance healthcare decision-making and streamline pharmaceutical operations."],
    "images": [pharmaIQ],  // Add the image(s) for pharmaIQ
    "githubLink": "",  // Provide the GitHub repository link
    "feautures": [
      {
        "title": "AI Predictive Models",
        "description": "Utilize advanced machine learning models to predict potential drug shortages and mitigate risks in supply chains."
      },
      {
        "title": "AI Medical Assistant",
        "description": "Provide healthcare professionals and patients with an intelligent assistant for medical guidance and drug information."
      },
      {
        "title": "Pharmaceutical Insights",
        "description": "Deliver actionable insights to stakeholders in the pharmaceutical industry, optimizing inventory and distribution."
      },
      {
        "title": "User-Friendly Interface",
        "description": "A sleek and intuitive interface built with Sass and Bootstrap for seamless user experience."
      }
    ]
  },

"Immerse": {
  "title": "Immerse",
  "next" : "Gericht",
  "prev" : "pharmaIQ",
  "techStack": ["A-frame", "WebXR", "React", "Node.js & Express", "Socket.IO", "Sass", "Postgres"],
  "description": ["Immerse is a web-based immersive platform leveraging WebXR technology to create virtual environments for educational and collaborative purposes. It allows users to interact with 3D spaces, integrate multimedia elements, and collaborate in real time."],
  "images": [ImmerseImage1, ImmerseImage2, ImmerseImage3],  // Add images for Immerse
  "githubLink": "",  // Provide the GitHub repository link
  "feautures": [
    {
      "title": "Virtual Environments",
      "description": "Create and explore detailed 3D environments such as virtual laboratories and university halls."
    },
    {
      "title": "Interactive Multimedia",
      "description": "Embed and interact with videos, PDFs, and other digital assets directly within the virtual world."
    },
    {
      "title": "Real-Time Collaboration",
      "description": "Enable multiple users to join and interact in the same virtual space using Socket.IO."
    },
    {
      "title": "Customizable Annotations",
      "description": "Add annotations to 3D models for enhanced interactivity and collaborative learning."
    },
    {
      "title": "Cross-Platform Compatibility",
      "description": "Access the platform seamlessly across various devices using A-frame and WebXR technologies."
    }
  ]
},

"Gericht": {
  "title": "Gericht",
  "next" : "Immerse",
  "prev" : "goMacros",
  "techStack": ["Sass", "JavaScript", "HTML"],
  "description": ["Gericht is a premium restaurant website designed to provide an elegant online experience for customers. It offers a sophisticated and visually appealing interface, showcasing the restaurant’s menu, reservations, and special events."],
  "images": [GerichtImage1, GerichtImage2],  // Add images for Gericht
  "githubLink": "",  // Provide the GitHub repository link
  "feautures": [
    {
      "title": "Elegant Menu Display",
      "description": "Showcase the restaurant’s menu with a beautiful and easy-to-navigate layout, including detailed descriptions and pricing."
    },
    {
      "title": "Online Reservations",
      "description": "Allow customers to book tables easily online with a streamlined reservation system."
    },
    {
      "title": "Event Promotions",
      "description": "Highlight upcoming events and special promotions to engage customers and increase bookings."
    },
    {
      "title": "Responsive Design",
      "description": "Ensure the website is fully responsive, providing an optimal experience on desktops, tablets, and smartphones."
    }
  ]
  },

    "ByteBurst": {

  "title": "ByteBurst",
  "next" : "MyWeather",
  "prev" : "Gericht",
  "techStack": ["PHP", "Symfony", "mySQL", "Scss"],
  "description": [
    "Built a dynamic website that provides articles, news, tutorials, and more.",
    "It provides a platform for users to share their knowledge and help others.",
    "The website was built to provide an authenticated source of information, propaganda-free."
  ],
  "images": [ByteBurstImage1, ByteBurstImage2],  // Add images for ByteBurst
  "githubLink": "https://github.com/JosephMoustaid/ByteBurst",
  "feautures": [
    {
      "title": "Article Management",
      "description": "Create, edit, and delete articles with a rich text editor."
    },
    {
      "title": "User Authentication",
      "description": "Secure user authentication and authorization system."
    },
    {
      "title": "Comment System",
      "description": "Allow users to comment on articles and engage in discussions."
    },
    {
      "title": "Search Functionality",
      "description": "Search for articles using keywords and filters."
    },
    {
      "title": "Responsive Design",
      "description": "Optimized for various devices and screen sizes."
    }
  ]
},
  "MyWeather": {
    "title": "MyWeather",
    "next" : "ByteBurst",
    "prev" : "Immerse",
    "techStack": ["Django", "Open weather API", "mySQL", "Scss"],
    "description": ["MyWeather is a weather forecasting application that provides real-time weather updates and forecasts for various locations. The platform uses the Open Weather API to fetch accurate weather data and displays it in a user-friendly interface."],
    "images": [MyWeatherImage],  // Add images for MyWeather
    "githubLink": "https://github.com/JosephMoustaid/MyWeather",
    "feautures": [
      {
        "title": "Real-Time Weather Updates",
        "description": "Get current weather conditions for any location."
      },
      {
        "title": "7-Day Forecast",
        "description": "View weather forecasts for the next 7 days."
      },
      {
        "title": "Search Functionality",
        "description": "Search for weather information by city name or ZIP code."
      },
      {
        "title": "Responsive Design",
        "description": "Optimized for various devices and screen sizes."
      }
    ]
  },
  "ChatBot": {
    "title": "ChatBot",
    "next" : "ByteBurst",
    "prev" : "MyWeather",
    "techStack": ["Django", "Ollama 3.2", "Python", "Scss"],
    "description": ["ChatBot is an AI-powered chatbot application that provides automated responses to user queries. The platform is designed to assist users with common questions and tasks, offering a seamless conversational experience."],
    "images": [ChatBotImage],  // Add images for ChatBot
    "githubLink": "https://github.com/JosephMoustaid/chatbotUI",
    "feautures": [
      {
        "title": "Natural Language Processing",
        "description": "Understand and respond to user queries in natural language."
      },
      {
        "title": "Customizable Responses",
        "description": "Configure the chatbot to provide specific responses based on user input."
      },
      {
        "title": "User Authentication",
        "description": "Secure user authentication and session management."
      },
      {
        "title": "Analytics Dashboard",
        "description": "View detailed analytics on chatbot interactions and performance."
      }
    ]
  }
  };

  
export default projectsData;