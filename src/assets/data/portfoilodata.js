const portfolioData = {
  portfolioList: [
    {
      name: 'shopping mall',
      period: '2022.02.06 - 2021.02.18',
      project: 'Toy',
      logo: 'bread',
      percent: '100%',
      link: 'https://firefly-app-eb8f3.web.app/',
      github: 'https://github.com/JinLee0811/-ToyProject-shoppingmall-',
      description:
        'React를 사용하여 쇼핑몰을 구현함.\n 장바구니, 로그인, 회원가입 등 기본적인 기능이 가능합니다. VM을 통해 배포하였고, 약 2주동안 진행하였습니다.',
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
          tit: '사용자 관련 기능',
          desc: '쇼핑몰의 기본적인 사용자 관련 기능입니다. \n회원가입 및 로그인, 비밀번호 변경 및 삭제 등 기본적인 기능을 구현했습니다',
        },
        {
          name: 'shoppingMall/product.gif',
          tit: '상품 관련 기능',
          desc: 'Admin의 상품 관련 기능입니다. \n상품 업로드 및 수정, 삭제가 가능합니다. 또한 카테고리 설정이 가능합니다.',
        },
        {
          name: 'shoppingMall/cart.gif',
          tit: '장바구니 관련 기능',
          desc: '로컬 스토리지를 사용한 장바구니 관련 기능입니다. \n상품 목록에서 상품을 찜 하면 로컬스토리지에 저장되고 장바구니에 추가하여 사용 가능하고, 비 로그인 시에는 로그인 페이지로 연결되어 로그인 후에는 로컬에 담긴 장바구니를 그대로 가져옵니다. ',
        },
        {
          name: 'shoppingMall/order.gif',
          tit: '구매 관련 기능',
          desc: '구매 관련 기능입니다. \n실제 결제가 이루어지진 않지만 사용자가 구매 정보를 입력한 후 구매하기를 누르면 본인의 구매 내역을 확인할 수 있고 Admin은 구매자들의 구매 내역을 확인하여 배송 상태를 변경할 수 있습니다.',
        },
      ],
    },
    {
      name: '지하철 역세권 추천',
      period: '2023.03.06 - 2023.03.24',
      project: 'Toy',
      logo: 'Data',
      percent: '100%',
      link: 'https://firefly-app-eb8f3.web.app/',
      github: 'https://github.com/JinLee0811/-ToyProject-shoppingmall-',
      description:
        'Elice 부트캠프에서 진행한 Data 프로젝트 입니다.\n 주제는 거주/교통 이었고 해당 주제에 맞춰 "체감 시간 기준 역세권 추천 서비스" 를 기획하였고 Jupyter를 사용해 데이터 분석 후 서비스 제작 및 VM을 통해 배포하였습니다, 약 3주동안 진행하였습니다.\n해당 서비스는 대상(1등)을 수상했습니다',
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
          tit: '데이터 인사이트 페이지',
          desc: 'Jupyter로 데이터 분석한 결과를 보여주는 페이지 입니다.\n공공데이터를 이용하여 지하철 혼잡도 데이터 및 부동산 데이터를 분석한 후 체감시간을 가중치하여 계산하였고 앞에서 분석한 데이터값을 chart js와 react-chartjs-2 라이브러리를 활용해 사용자와 상호작용할 수 있는 인터렉티브 그래프를 그렸습니다.',
        },
        {
          name: 'dataservice/search.gif',
          tit: '메인 지도 페이지',
          desc: '서비스를 이용할 수 있는 메인 페이지입니다. \n네이버 지도 api를 이용하여 지도를 생성하고 그 위에 사용자가 직접 마커을 찍거나 주소를 검색하면, 구글 geocoding api를 이용해 해당 위치(회사,학교)의 좌표를 반환 받습니다. ',
        },
        {
          name: 'dataservice/main.gif',
          tit: '메인 기능 페이지',
          desc: '로컬 스토리지를 사용한 장바구니 관련 기능입니다. \n그 후 원하는 검색 조건을 선택하고, ${찾아보자!} 버튼을 클릭하면, 반환받은 좌표를 백엔드로 전달하여 가장 가까운 지하철역을 확인하고, 그 지하철을 기반으로, 사이드바에서 사용자가 원하는 검색 조건을 설정할 수 있습니다. 서버에서는 소요시간과 체감시간을 계산하며, 그 검색 조건에 해당하는 역세권 리스트를 생성하여 반환합니다.',
        },
        {
          name: 'dataservice/mypage.gif',
          tit: '사용자 관련 페이지',
          desc: '사용자 관련 마이페이지 입니다. \n마이페이지 기본 기능으로는 나의 찜과 나의 리뷰를 확인하고 삭제 할 수 있으며 프로필 정보를 변경 할 수 있습니다. (닉네임, 비밀번호, 회원탈퇴) 또한 호선별로 색상을 구별했습니다.',
        },
        {
          name: 'dataservice/Admin.gif',
          tit: '어드민 및 로그인 페이지',
          desc: '사용자 및 관리자 관련 기능입니다. \n해당 프로젝트에서는 jwt 쿠키를 활용한 로그인과 카카오 API를 활용한 소셜 로그인을 구현하였습니다. 사용자들의 정보와 리뷰를 관리할 수 있는 어드민 페이지 입니다. 페이지네이션을 통하여 더 쉽게 정보를 볼 수 있습니다.',
        },
        {
          name: 'dataservice/prize.png',
          tit: '프로젝트 대상(1등)',
          desc: '프로젝트 경진 결과 대상을 받았습니다. \n위 프로젝트는 총 6명의 팀원이 참여하였고, 저는 팀장으로서 팀원을 이끌었고 개발은 Frontend를 맡았습니다.',
        },
      ],
    },
    {
      name: 'AI 딥러닝 서비스',
      period: '2023.03.06 - 2023.03.24',
      project: 'Toy',
      logo: 'ready',
      percent: '100%',
      link: 'https://firefly-app-eb8f3.web.app/',
      github: 'https://github.com/JinLee0811/-ToyProject-shoppingmall-',
      description:
        'I am currently working as a team leader and front-end developer to create a web service that is scheduled to be completed on May 20th. The service is a project that involves training and utilizing deep learning models based on AI technology to implement a web service.',
      tech: [
        'Html & CSS',
        'Javascript',
        'React',
        'Styled-Components',
        'Node.js',
        'MongoDB',
        'PostMan',
        'Tensorflow',
        'Python',
        'Jupyter',
      ],
      image: [
        {
          name: 'dataservice/info.gif',
          tit: '제작 중 입니다.',
          desc: '',
        },
      ],
    },
  ],
};

export default portfolioData;
