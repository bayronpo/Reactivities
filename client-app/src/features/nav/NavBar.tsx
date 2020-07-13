import React, { FC } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'


interface IProps {
    openCreateForm: () => void;
}
export const NavBar: FC<IProps> = ({ openCreateForm }) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }}></img>
                    Reactivities
                </Menu.Item>

                <Menu.Item
                    name='messages'
                />
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>

        </Menu>
    )
}
