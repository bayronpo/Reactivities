import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Container stylle={{marginTop: '7em'}}>
                <h1>Home Page</h1>
                <h3>Go to <Link to='/activities'>Activities</Link></h3>
            </Container>
        </div>
    )
}

export default HomePage;