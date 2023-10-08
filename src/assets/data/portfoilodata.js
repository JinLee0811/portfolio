const portfolioData = {
  portfolioList: [
    {
      name: 'Shopping Mall',
      period: 'Jan 2023 - Feb 2023',
      project: 'Team',
      logo: 'bread',
      percent: '80%',
      link: 'https://firefly-app-eb8f3.web.app/',
      github: 'https://github.com/JinLee0811/-ToyProject-shoppingmall-',
      description:
        'For our joint project, which I led, we developed an online shopping website using React. The project includes essential features such as a shopping cart, user login, and registration. We deployed the website using a virtual machine (VM), and it took approximately two weeks to complete.',
      tech: [
        'Html & CSS',
        'Javascript',
        'React',
        'BootStrap',
        'Node.js',
        'MongoDB',
        'PostMan',
      ],
      image: [
        {
          name: 'shoppingMall/main.gif',
          tit: 'User-related Features',
          desc: 'These are the basic user-related features of the shopping mall. We implemented functionalities such as registration, login, password change, and deletion.',
        },
        {
          name: 'shoppingMall/product.gif',
          tit: 'Product-related Features',
          desc: 'These are the product-related features for the Admin. You can upload, modify, and delete products, as well as configure categories.',
        },
        {
          name: 'shoppingMall/cart.gif',
          tit: 'Shopping Cart Features',
          desc: 'These are shopping cart features using local storage. When users add products to their favorites from the product list, they are stored in local storage and can be added to the shopping cart for later use. For users who are not logged in, they are redirected to the login page. After logging in, their saved cart from local storage is retrieved.',
        },
        {
          name: 'shoppingMall/order.gif',
          tit: 'Purchase-related Features',
          desc: 'These are purchase-related features. Although actual payment is not processed, when users input purchase information and click "Purchase," they can view their purchase history, and Admin can review the purchase history of customers and update delivery statuses.',
        },
        {
          name: '',
          tit: 'Reflection',
          desc: 'During this project, I played a crucial role in the initial planning and design phases, as well as the implementation of the user interface using Bootstrap. This experience has strengthened my proficiency in front-end development, design, and project planning in a technical environment.',
        },
      ],
    },
    {
      name: 'Data Analysis Web Service',
      period: 'Mar 2023 - April 2023',
      project: 'Team',
      logo: 'Data',
      percent: '80%',
      link: 'https://drive.google.com/file/d/1TKFxy7da0IKz8i_J8kiHyI534ThNfRI5/view?usp=sharing',
      github: 'https://github.com/JinLee0811/Data_Project',
      description:
        'The project focused on the theme of "Residence/Transportation" and involved planning, data analysis using Jupyter, service development, and deployment via a virtual machine. The project was completed in approximately three weeks and received the first prize in its category.',
      tech: [
        'Html & CSS',
        'Javascript',
        'React',
        'Styled-Components',
        'Node.js',
        'MongoDB',
        'PostMan',
        'AWS',
        'Prisma',
      ],
      image: [
        {
          name: 'dataservice/info.gif',
          tit: 'Data Insight Page',
          desc: 'This is a page that displays the results of data analysis using Jupyter. It analyzes subway congestion data and real estate data using public data, calculates perception time by weighting, and uses the Chart.js and react-chartjs-2 libraries to create interactive graphs that users can interact with based on the analyzed data values.',
        },
        {
          name: 'dataservice/search.gif',
          tit: 'Main Map Page',
          desc: 'This is the main page where you can use the service. It generates a map using the Naver Maps API, and users can manually mark locations on the map or search for addresses. The Google Geocoding API is used to retrieve coordinates for the specified location (company, school).',
        },
        {
          name: 'dataservice/main.gif',
          tit: 'Main Function Page',
          desc: 'This is a feature related to a shopping cart that uses local storage. After selecting the desired search criteria and clicking the ${Search!} button, the obtained coordinates are sent to the backend to find the nearest subway station. Based on that subway station, users can set their preferred search criteria in the sidebar. The server calculates travel time and perception time and generates a list of nearby subway stations that match the search criteria.',
        },
        {
          name: 'dataservice/mypage.gif',
          tit: 'User-related Page',
          desc: 'This is the user-related My Page. Basic functions of My Page include checking and deleting my favorites and reviews, as well as changing profile information (nickname, password, withdrawal). Colors have also been used to distinguish by subway line.',
        },
        {
          name: 'dataservice/Admin.gif',
          tit: 'Admin and Login Page',
          desc: 'This is a user and administrator-related feature. In this project, login using JWT cookies and social login using the Kakao API have been implemented. This is the admin page where you can manage user information and reviews. Pagination makes it easier to view information.',
        },
        {
          name: 'dataservice/prize.png',
          tit: 'Project Award (1st Place)',
          desc: 'We received an award for the project competition results. A total of 6 team members participated in this project, and I served as the team leader and handled the Frontend development.',
        },
        {
          name: '',
          tit: 'Reflection',
          desc: 'Through this project, I, as a junior developer, gained valuable insights into data analysis, user-centric design, efficient development practices, security, and leadership skills. This experience has equipped me with a broader perspective and valuable skills that I can apply to future projects, making me a more capable and effective developer.',
        },
      ],
    },
    {
      name: 'AI Crop Diagnosis Service',
      period: 'April 2023 - June 2023',
      project: 'Team',
      logo: 'CropDoctor',
      percent: '95%',
      link: 'https://drive.google.com/file/d/1Z0qEvznVF-j4BOYMoqy7bMolz2_DHi9X/view?usp=sharing',
      github: 'https://github.com/JinLee0811/AiProject',
      description:
        'This project is an AI-based plant classification web service featuring an AI model. I have been directly involved in all aspects of this project, from data selection to classification and model training.',
      tech: [
        'Html & CSS',
        'Javascript',
        'React',
        'Styled-Components',
        'React Query',
        'Jotai',
        'Node.js',
        'MongoDB',
        'PostMan',
        'Tensorflow',
        'Python',
        'Jupyter',
      ],
      image: [
        {
          name: 'cropDoctor/1. login.gif',
          tit: 'Sign Up and Log In',
          desc: 'This section covers the implementation of basic sign-up and log-in functionalities. In this project, both access tokens and refresh tokens are utilized for secure user authentication.',
        },
        {
          name: 'cropDoctor/2.main.gif',
          tit: 'Crop Diagnosis and Save Functionality (Main)',
          desc: "Upon entering the main functionality, users can upload images of their crops. By clicking the 'Diagnose' button, an AI model analyzes the image to identify any diseases affecting the crop. It also provides corresponding solutions for crop health management.",
        },
        {
          name: 'cropDoctor/3.User.gif',
          tit: 'User Features',
          desc: "Users have access to basic user services on their 'My Page,' where they can update their nickname, password, and even delete their account.",
        },
        {
          name: 'cropDoctor/4.Admin1.gif',
          tit: 'User and Forum Management (Admin)',
          desc: 'Admin accounts are granted backend admin privileges, enabling access to exclusive admin pages for comprehensive web page management.',
        },
        {
          name: 'cropDoctor/5.Admin2.gif',
          tit: 'Nutrient Registration (Admin)',
          desc: 'Admins can efficiently manage and register products through this page. This includes categorization, modification, and deletion of products, and it incorporates basic CRUD functionalities.',
        },
        {
          name: 'cropDoctor/6.Admin3.gif',
          tit: 'Categories (Admin)',
          desc: 'This page offers highly detailed category management, facilitating the addition, modification, and deletion of product categories for precise organization.',
        },
        {
          name: 'cropDoctor/7.Board.gif',
          tit: 'Forum Functionality(Board)',
          desc: "The Forum Functionality enables users to share photos of their crop's growth, with the option to set access permissions as public or private for enhanced interaction. It includes features such as sharing crop growth photos, controlling access permissions, and fostering user engagement through likes, comments, and replies, allowing users to share experiences and communicate with others effectively.",
        },
        {
          name: 'cropDoctor/8.Board and Comment.gif',
          tit: 'Likes and Comments, Replies',
          desc: 'Users can express their appreciation for posts by clicking the heart button, and their likes are securely stored on the server under their respective accounts. Additionally, commenting is enabled, allowing users to post comments and replies to existing comments.',
        },
        {
          name: 'cropDoctor/9.Likes and Write.gif',
          tit: 'Writing and Like Features',
          desc: 'Users can express their appreciation for posts by clicking the heart button, and their likes are securely stored on the server under their respective accounts. Additionally, users can create posts and engage in discussions by posting comments and replies to existing comments.',
        },
        {
          name: 'cropDoctor/10.logout.gif',
          tit: 'Log Out and Session Termination',
          desc: 'Clicking the log-out button ensures the removal of associated tokens for the logged-in account, guaranteeing a secure log-out process.',
        },
        {
          name: '',
          tit: 'Reflection',
          desc: "Through this project, I learned the overall flow of creating a website using AI, including data classification and management, AI modeling techniques using data, and documentation processes. Additionally, I gained insight into practical approaches to state management using tools like React Query and Jotai. For more specific project details, please refer to the project's content via the provided PowerPoint link.",
        },
      ],
    },
  ],
};

export default portfolioData;
