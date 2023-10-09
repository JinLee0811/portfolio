import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading';

function AboutTxtWrap() {
  return (
    <StyledHome>
      <div className='left'>
        <div className='color-block'></div>
        <div className='img-box'></div>
      </div>
      <div className='right'>
        <div className='tit-wrap'>
          <Heading level='2'>HI! HOW ARE YOU?</Heading>
          <Heading>
            I'M{' '}
            <span className='message'>
              <strong>JEONGJIN LEE</strong>
              <strong>FRONTEND DEVELOPER</strong>
              <strong>PASSIONATE PERSON</strong>
            </span>
          </Heading>
          <p>
            Hello, my name is JIN. 😀
            <br />I am a Frontend developer driven by endless potential. My
            journey into development was sparked not by a computer science
            background, but by a deep-rooted passion for design, inspired by my
            prior experience in video planning and production. I am currently
            dedicating myself wholeheartedly to becoming a proficient front-end
            developer. Throughout my journey, I have focused on web development
            primarily using React and have successfully completed a variety of
            projects. My thirst for knowledge drives me to constantly explore
            new programming languages and emerging technologies, expanding my
            skill set with each endeavor. I am also deeply intrigued by the
            latest trends and advancements in software development, including
            the exciting world of AI, and eagerly embrace opportunities to
            experiment with them.
          </p>
        </div>
        <section>
          <Heading level='2'>PERSONAL INFOS</Heading>
          <ul>
            <li>
              <span>Name : </span>JEONGJIN LEE (Jin)
            </li>
            <li>
              <span>Age : </span>11.Aug.1994
            </li>
            <li>
              <span>Phone : </span> +64 27 455 8317
            </li>
            <li>
              <span>Address : </span> Auckland CBD, New Zealand
            </li>
            <li>
              <span>Email : </span>dlwjdwls0908.nz@gmail.com
            </li>
          </ul>
        </section>
        <Link to='/about' className='more-btn'>
          MORE ABOUT ME
        </Link>
      </div>
    </StyledHome>
  );
}

const messageslide = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -4.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -4.5rem;
		width: 0;
	}
	66%{
		top: -9rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -9rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const messageslideMo = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -3.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -3.5rem;
		width: 0;
	}
	66%{
		top: -7rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -7rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const StyledHome = styled.main`
  display: flex;
  height: 100vh;
  max-width: 1600px;
  margin: auto;
  .left {
    flex: 0 0 35%;
    position: relative;
    max-width: 600px;
    background-color: #3c407f;
    &::after {
      content: '';
      display: inline-block;
      position: fixed;
      top: 0;
      left: calc(50% - 1440px);
      z-index: -1;
      width: 50%;
      max-width: 1000px;
      height: 100%;
      background-color: ${(props) => props.theme.mainColor};
    }
    .color-block {
      position: absolute;
      top: -60%;
      left: -40vw;
      z-index: 0;
      width: 50vw;
      height: 200%;
      transform: rotate(-12deg);
      background-color: ${(props) => props.theme.mainColor};
    }
    .img-box {
      height: 90vh;
      margin: 5vh 0 0 30px;
      background-image: url(${(props) => props.theme.mainSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: -400px 0px;
      border-radius: 15px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
      position: relative;
      z-index: 1;
      transition: all 0.5s ease;
    }
    .img-box:hover {
      height: 90vh;
      margin: 5vh 0 0 30px;
      background-image: url(${(props) => props.theme.mainSrc2});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: -400px 0px;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10% 0 7%;
    .tit-wrap {
      margin-bottom: 60px;
      h2 {
        font-size: 22px;
      }
      h1 {
        margin-bottom: 20px;
        font-size: 45px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        .message {
          display: block;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 80px;
          animation: ${messageslide} 8s ease-in-out infinite;
          strong {
            display: block;
            color: ${(props) => props.theme.mainColor};
          }
        }
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        padding: 0 15% 0 0;
        max-width: 670px;
        word-break: keep-all;
      }
    }
    section {
      margin-bottom: 40px;
      h2 {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 600;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          padding-bottom: 10px;
          font-size: 16px;
          font-weight: 500;
          color: ${(props) => props.theme.mainColor};
          span {
            font-weight: 400;
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .more-btn {
      padding: 0px 40px;
      border-radius: 26px;
      background-color: ${(props) => props.theme.mainColor};
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      line-height: 46px;
      letter-spacing: 0.5px;
      :hover {
        background-color: #6868ac;
      }
    }
  }
  @media ${(props) => props.theme.laptop} {
    .left {
      .color-block {
        top: -60%;
        left: -25vw;
        width: 40vw;
        height: 200%;
        transform: rotate(-9deg);
      }
    }
    .right {
      padding-right: 5%;
      .tit-wrap {
        margin-bottom: 40px;
        h1 {
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
      }
      section {
        h2 {
          margin-bottom: 10px;
        }
        ul {
          li {
            width: 100%;
          }
        }
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
    .left {
      flex: none;
      width: 100%;
      overflow: hidden;
      .color-block {
        left: -40vw;
        width: 80vw;
        min-width: 250px;
        transform: rotate(-12deg);
      }
      .img-box {
        width: 90vw;
        height: 55vh;
        margin: 3vh 5vw;
        background-position: center;
      }
      .img-box :hover {
        width: 90vw;
        height: 55vh;
        margin: 3vh 5vw;
        background-position: center;
      }
    }
    .right {
      width: 100%;
      flex: none;
      margin: 5vh 0;
      padding-bottom: 5vh;
      .tit-wrap {
        h1 {
          font-size: 35px;
          .message {
            left: 60px;
            animation: ${messageslideMo} 8s ease-in-out infinite;
          }
        }
        h2 {
          font-size: 20px;
        }
        p {
          padding-right: 5%;
        }
      }
    }
  }
`;

export default AboutTxtWrap;
