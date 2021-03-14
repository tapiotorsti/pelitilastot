import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Item from './header';

test('renders item from props data', () => {
    render( <Router>
                <Item data={{
                id:"1234",
                kills:20,
                deaths:10,
                kdr:2,
                game:"CS:GO",
                date:"2020-03-09"
                }} />
            </Router>);
    const game = screen.getByText(/CS:GO/i);
    expect(game).toBeInTheDocument();
});