import React from 'react'
import { Helmet } from 'react-helmet'

function About(props) {
    const aboutData = props.about
    return (
        <>
            <div className='my-5 text-center'>
                {
                    aboutData.map((curValue) => {
                        const aboutContent = curValue.PageContent
                        return (
                            <div key={curValue.ID}>
                                <Helmet>
                                    <title>{curValue.PageTitle}</title>
                                </Helmet>
                                <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default About;