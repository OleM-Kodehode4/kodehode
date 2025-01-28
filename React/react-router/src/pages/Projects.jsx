import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const mockProjects = {
    'prosjekt1': {
        title: 'Prosjekt 1',
        description: 'Om prosjektet...',
    },
    'prosjekt2': {
        title: 'Prosjekt 2',
        description: 'Om prosjektet...',
    },
    'prosjekt3': {
        title: 'Prosjekt 3',
        description: 'Om prosjektet...',
    },
    'prosjekt4': {
        title: 'Prosjekt 4',
        description: 'Om prosjektet...',
    }
}

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                {Object.values(mockProjects).map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


