import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Reservi.png";
import projImg2 from "../assets/img/ResaPoste.png";
import projImg3 from "../assets/img/flutter.png";
import projImg4 from "../assets/img/ml.png";
import projImg5 from "../assets/img/soa.png";
import projImg6 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Reservi.tn",
      description: "Development of a reservation system for restaurants and bars",
      imgUrl: projImg1,
    },
    {
      title: "ResaPoste",
      description: "Development of a plateforme for the management of the postal services",
      imgUrl: projImg2,
    },
    {
      title: "Flutter App",
      description: "Design & Development Mobile App",
      imgUrl: projImg3,
    },
    {
      title: "Machine Learning and Data cleansing",
      description: "Data cleansing and Machine Learning",
      imgUrl: projImg4,
    },
    {
      title: "Soa and Web Services",
      description: "Soa and Web Services",
      imgUrl: projImg5,
    },
    {
      title: "Personal Website",
      description: "Personnal Portfolio",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
