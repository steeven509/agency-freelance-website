import React from 'react'

const Home = () => {
    return (
        <section className="home__section">
            <div className="home__container container">
                <div className="home__content">
                    <div className="home__content-txt">
                        <h1 className='home__content-title'>
                            Repérez vos besoins, <br />
                            on s'occupe du reste, <br />
                            avec les meilleurs <br />
                            talents
                        </h1>
                        <button className="btn btn--long">
                            Faire le test
                        </button>
                    </div>
                    <div className="home__content-img">
                        <img
                            src="./assets/undraw_Resume_re.svg"
                            alt="home-images"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
