import React from 'react'
import Card from '../components/Card'
import DefaultImg from '../assets/profile.png'

const freelancesProfiles = [
    {
        name: 'Hana Deo',
        jobTitle: 'Devops',
        picture: DefaultImg,
    },
    {
        name: 'John Deo',
        jobTitle: 'Developpeur Frontend',
        picture: DefaultImg,
    },
    {
        name: 'Steeve Deo',
        jobTitle: 'Devops',
        picture: DefaultImg,
    },
    {
        name: 'Steeve Deo',
        jobTitle: 'Devops',
        picture: DefaultImg,
    },
]

const Freelances = () => {
    return (
        <section className="freelances__section">
            <div className="freelances__container container">
                    <h1 className="freelances__title">
                        Trouvez votre prestataire
                    </h1>
                    <h2 className="freelances__subtitle">
                        Chez Shiny nous réunissons les meilleurs profils pour
                        vous.
                    </h2>

                    <div className="card__container">
                        {freelancesProfiles.map((profile, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={profile.name}
                                    label={profile.jobTitle}
                                    picture={profile.picture}
                                ></Card>
                            )
                        })}
                    </div>
                
            </div>
        </section>
    )
}

export default Freelances
