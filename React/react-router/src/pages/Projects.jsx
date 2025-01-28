import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Projects.css"

const mockProjects = {
    prosjekt1: {
        title: 'Prosjekt 1',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image1.jpg',
    },
    prosjekt2: {
        title: 'Prosjekt 2',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image2.png',
    },
    prosjekt3: {
        title: 'Prosjekt 3',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image3.png',
    },
    prosjekt4: {
        title: 'Prosjekt 4',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image4.jpg',
    },
    prosjekt5: {
        title: 'Prosjekt 5',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image5.jpg',
    },
    prosjekt6: {
        title: 'Prosjekt 6',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image6.jpg',
    },
    prosjekt7: {
        title: 'Prosjekt 7',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image7.jpg',
    },
    prosjekt8: {
        title: 'Prosjekt 8',
        description: 'Om prosjektet...',
        image: 'src/assets/pics/image8.jpg',
    },
}

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }
    return (
        <div className="projects-container">
            <Slider {...settings}>
                {Object.values(mockProjects).map((project, index) => (
                    <div key={index}>
                        <div className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


