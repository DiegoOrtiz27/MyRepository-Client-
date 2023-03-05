
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { SkillsPorcentage } from './SkillsPorcentage';


export const Skills = () => {
  const skills = [
    {
      title: "HTML5",
      advance: [0, 20, 40, 60, 80, 100],
      percentage : 100
    },
    {
      title: "CSS",
      advance: [0, 20, 40, 60, 75],
      percentage : 75
    },
    {
      title: "JavaScript",
      advance: [0, 20, 40, 60],
      percentage : 60
    },
    {
      title: "React",
      advance: [0, 20, 40, 70],
      percentage : 70
    },
    {
      title: "Bootstrap",
      advance: [0, 20, 40, 60, 70, 80],
      percentage : 80
    },
    {
      title: "Node js",
      advance: [0, 20, 40, 50],
      percentage : 50
    },
    {
      title: "Java",
      advance: [0, 20, 40, 60, 80],
      percentage : 80
    },
    {
      title: "Spring",
      advance: [0, 20, 40, 60],
      percentage : 60
    },
    {
      title: "Python",
      advance: [0, 20, 40],
      percentage : 40
    },
    {
      title: "MySQL",
      advance: [0, 20, 40, 60],
      percentage : 60
    },
    {
      title: "DynamoDB (AWS)",
      advance: [0, 20, 40, 60, 75],
      percentage : 75
    },
    {
      title: "OpenSearch (AWS)",
      advance: [0, 20, 40, 50],
      percentage : 50
    },
    {
      title: "Estructuras de datos y POO",
      advance: [0, 20, 40, 50, 60, 75],
      percentage : 75
    },
    {
      title: "Control de versiones con Git y bitbucket",
      advance: [0, 20, 40, 50, 60, 80, 100],
      percentage : 100
    },
    {
      title: "(TDD) con Robot Framework y Selenium",
      advance: [0, 20, 40, 50, 60],
      percentage : 60
    },
    {
      title: "Word",
      advance: [0, 20, 40, 50, 60, 80, 90],
      percentage : 90
    },
    {
      title: "Excel",
      advance: [0, 20, 40, 50],
      percentage : 50
    },
    {
      title: "Power Point",
      advance: [0, 20, 40, 50, 60, 80],
      percentage : 80
    },
    {
      title: "Jira",
      advance: [0, 20, 40, 50, 60, 80],
      percentage : 80
    },
    {
      title: "Scrum",
      advance: [0, 20, 40, 50, 60, 80],
      percentage : 80
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are skills I've picked up since I started programming 4 years ago. First I learned basic programming in high school, then I gained more knowledge in college and self-study and finally did an internship for 6 months.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {
                            skills.map((skill, index) => {
                              return (
                                <SkillsPorcentage
                                  key={index}
                                  {...skill}
                                  />
                              )
                            })
                          }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
