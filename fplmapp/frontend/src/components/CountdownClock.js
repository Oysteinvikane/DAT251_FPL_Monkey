import react from 'react'

export const countdown = () => {
        fetch('/api/countdown')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
};

    