const skillData = {
  skillList: [
    {
      label: 'HTML/CSS',
      detail: [
        'I am proficient in HTML and CSS and can use them to implement desired features.',
        'I have experience in abstracting UI elements into component form during development.',
        'My skills allow me to create user-friendly and visually appealing web pages while adhering to best coding practices.',
      ],
      icon: 'fab fa-html5',
    },
    {
      label: 'Javascript/Typescript',
      detail: [
        'I am proficient in ES6 and later versions of JavaScript syntax.',
        'I can develop web applications using Vanilla JavaScript and appreciate its benefits.',
        'I possess a strong command of TypeScript and effectively utilize interfaces in my coding.',
        'Furthermore, I recognize the increasing demand for TypeScript, with its integration of static typing into JavaScript, and I am actively engaged in learning TypeScript to meet this growing need.',
      ],
      icon: 'fab fa-js-square',
    },
    {
      label: 'React',
      detail: [
        'I have experience developing web applications using React.js, and I am familiar with the concept of components and how to use them effectively.',
        'I have worked on building reusable and scalable UI components, which helps to improve the efficiency and maintainability of the codebase.',
      ],
      icon: 'fab fa-react',
    },
    {
      label: 'Node.js',
      detail: [
        'I have a solid understanding of how Node.js works.',
        'I have experience creating Restful API servers using the Express framework.',
        'I have created well-structured servers by dividing them into models, routers, controllers, and services.',
      ],
      icon: 'fab fa-node',
    },
    {
      label: 'Git/Github/GitLab',
      detail: [
        'I understand what Git flow is and why it should be used.',
        'I am able to collaborate with other developers using Git and GitHub.',
        'I have experience managing commits through Git rebase and squash.',
      ],
      icon: 'fab fa-git-square',
    },
    {
      "label": "SQL/PostgreSQL",
      "detail": [
        "Proficiency in writing complex SQL queries for data manipulation and analysis.",
        "Experienced in database management and optimization with PostgreSQL.",
        "Capable of integrating SQL databases with Python for enhanced data analysis workflows."
      ],
      "icon": "fas fa-database"
    },
    {
      "label": "Python Software Development",
      "detail": [
        "Comprehensive knowledge of Python for backend development, including frameworks like Django and Flask.",
        "Experience in building scalable and maintainable web applications with Python.",
        "Proficient in using version control with Git in a collaborative software development environment."
      ],
      "icon": "fab fa-python"
    },  
    {
      label: 'TensorFlow',
      detail: [
        'I have a basic understanding of TensorFlow and can work with deep learning models. In fact, I have utilized these skills to develop websites in the past.',
      ],
      icon: 'fab fa-android',
    },
  ],

  experienceList: [

    {
      period: 'April 2023 - June 2023',
      position: 'Team Leader / FE',
      company: 'AI Web Service Project',
      explain:
        'We initiated an AI web service project to address the challenge of crop disease information availability for farmers due to increased crop cultivation. The project involved AI modeling, including dataset curation, exploratory data analysis, and rigorous model training, resulting in a successful AI model. Development tasks included wireframing with Figma, collaboration with the backend team, and code management using React.js, Jotai, and Atom. As the project leader, I coordinated between frontend and backend teams, contributing significantly to project success. This project expanded my understanding of AI web development processes and innovative state management approaches within React.js.',
    },
    {
      period: 'March 2023 - April 2023',
      position: 'Team Leader / FE',
      company: 'Data Analysis Project',
      explain:
        'Idea generation and planning led to the development of a service on the topic of residence and transportation. The service calculates perceived time by applying weight to congestion levels, using data on real estate and subway congestion in Seoul. The analysis was conducted using Google Colab, Python, and Matplotlib, while the service was developed using React. Throughout the process, from planning to results, I gained a better understanding and won first place in the competition.',
    },
    {
      period: 'Jan 2023 - Feb 2023',
      position: 'WEB DEVELOPER',
      company: 'Shopping Mall Project',
      explain:
        'I conducted thorough design and planning for an e-commerce platform using Figma, creating the design and detailing functionality in technical documentation. I implemented stylish, responsive UI with Bootstrap. My technical stack included React.js, Bootstrap, Node.js, MongoDB API, Postman, and Figma. This project enhanced my skills in frontend development, design, and technical project planning.',
    },
    {
      period: 'July 2022 - Aug 2022',
      position: 'Database Management ',
      company: 'Nowon Public Health Center',
      explain:
        'I managed COVID-19 patient information at a health center using SQL and Google Colab. This involved designing an efficient database for storing visitor data, analyzing it with SQL queries, and creating visualizations using Matplotlib. I also generated reports that informed pandemic response strategies and resource allocation.',
    },
    {
      period: 'Jan 2020 - June 2022',
      position: 'Producer ',
      company: 'Youniv Company',
      explain:
        'As a new media company, I was responsible for planning, shooting, and editing new video content on our YouTube channel. I researched the latest trends and memes, incorporated them into our content, and attracted viewers attention. In addition, I also worked extensively on design tasks such as video thumbnail creation and editing.',
    },
    {
      period: 'Oct 2019 - Jan 2020',
      position: 'Barista ',
      company: 'Hollys Coffee',
      explain:
        'I have experience in preparing a variety of specialty coffee drinks and effectively addressing customer concerns to ensure satisfaction. I also excel in teamwork among baristas, contributing to smooth operations and a welcoming environment.',
    },
    {
      period: 'Jan 2019 -July 2019',
      position: 'Hall Manager',
      company: 'Korilla BBQ, Brisbane CBD, Australia',
      explain:
        'I am responsible for greeting and assisting customers to ensure a positive dining experience by accurately recording and delivering orders, explaining dishes, and addressing any concerns promptly and professionally. I also collaborate with colleagues to provide seamless service.',
    },
    {
      period: 'June  2018 - Dec 2018',
      position:
        'Participated in a 6-month field experience program during my Bachelor of Science in Animal Resources Course',
      company: 'Cheonan Farm',
      explain:
        'During this program, I gained a comprehensive understanding of cattle, pigs, and poultry, along with their significance in animal agriculture. I also developed a keen awareness of the importance of proper feeding schedules and nutritional aspects of animal feed. Furthermore, I acquired an in-depth understanding of the journey of dairy production, from cows to the delivery of milk as a vital food source for humans.',
    },
  ],

  educationList: [
    {
      "period": "Feb 2024 - Present",
      "position": "Master of Information Technology Student",
      "company": "University of Technology Sydney",
      "explain": "Pursuing a Master of Information Technology, I'm expanding my knowledge in various IT fields, including software development, data analysis, and emerging technologies. My coursework and projects at UTS allow me to explore advanced topics such as machine learning, cybersecurity, and cloud computing. Through practical applications and research, I'm developing a deeper understanding of how to apply computer science principles to solve complex problems, enhance data processing capabilities with Python, and leverage modern software development frameworks. This journey is sharpening both my technical and analytical skills, preparing me for the challenges of tomorrow’s tech landscape."
    },
    {
      period: 'Mar 2023 - June 2023',
      position: 'Core Artificial Intelligence',
      company: 'Elice Bootcamp',
      explain:
        'I have acquired machine learning skills using Python. I have learned supervised and unsupervised learning using libraries such as Scikit-Learn and Keras. I have gained understanding and implementation skills of neural network structure and deep learning algorithms.',
    },
    {
      period: 'Feb 2023 - Mar 2023',
      position: 'Computer Science + Data Analysis',
      company: 'Elice Bootcamp',
      explain:
        'I learned the fundamentals of computer science theory along with data analysis skills using Python. I learned how to collect, preprocess, visualize, and analyze data using the programming language Python and learned how to use data processing techniques with libraries such as Pandas and Numpy. Through data analysis projects, I improved my problem-solving skills. As a result, I strengthened my programming skills in the field of data analysis and gained an understanding of various theories in the field of computer science.',
    },
    {
      period: 'Jan 2023 - Feb 2023',
      position: 'React.js Web Programming Course',
      company: 'Elice Bootcamp',
      explain:
        'I acquired skills in developing responsive web applications using React.js. I learned how to develop using a component-based approach, JSX syntax, React Router, Redux, Axios, and other libraries for managing state and data communication. Through this course, I gained the ability to develop web applications using React.js.',
    },
    {
      period: 'Dec 2022 - Jan 2023',
      position: 'Node.js Programming Course',
      company: 'Elice Bootcamp',
      explain:
        'I gained server-side programming skills using Node.js. I learned how to develop routing and middleware using the Express framework, and how to use the Mongoose library for communicating with MongoDB. I also learned about asynchronous programming patterns and concepts such as callbacks, Promises, async/await, and how to apply them. Through this course, I have improved my ability to develop web applications using Node.js.',
    },
    {
      period: 'Nov 2022 - Dec 2022',
      position: 'Core Web Programming (HTML, CSS, JS, Git)',
      company: 'Elice Bootcamp',
      explain:
        ' I acquired basic web programming skills using HTML, CSS, JS, and Git. I learned how to create and style web pages and acquired knowledge of using JS to create interactive web pages. Additionally, I learned the importance of version control and collaboration using Git. Through this experience, I gained a comprehensive understanding of web development and learned fundamental skills.',
    },
    {
      period: 'June 2022 - Sep 2022',
      position: 'Basic Web/App Programming',
      company: 'Sparta Coding Bootcamp',
      explain:
        'I acquired the fundamentals of web front-end development using HTML, CSS, and JavaScript, and web back-end development using Node.js. Additionally, I learned the basics of Android app development using Android Studio and iOS app development using Swift. Through this experience, I gained a foundation of skills in web/app programming.',
    },
    {
      period: 'Mar 2013 - Feb 2020',
      position: 'Bachelor of Science in Animal Resources',
      company: 'Dankook University',
      explain:
        'I completed my undergraduate studies in Animal Health and Care, gaining expertise in animal physiology, nutrition, and healthcare practices. Additionally, I learned effective animal husbandry techniques for breeding, reproduction, and herd management, promoting sustainability and productivity. My studies included animal nutrition, research, and data analysis skills using tools like SQL and Google Colab, and I honed my communication and teamwork abilities through leadership roles and collaborative group projects.',
    },
  ],
};

export default skillData;
