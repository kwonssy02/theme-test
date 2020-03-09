import React, { Component } from 'react';
import CountingCard from '../components/CountingCard';
import Fetch from '../utils/Fetch';
import axios from 'axios';

const url = `/api/sites/count`;

class SiteCountingView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        setInterval(this.getSiteCount, 3000);
    }

    getSiteCount = () => {
        try {
            return axios.get(url).then(response => {
                this.setState({
                    count: response.data.result
                })
            });
        } catch (error) {
            console.log(error);
        }
        // Fetch.GET(url)
        //     .then((res) => {
        //         res.json()
        //     })
        //     .then(response => {
        //         console.log(response)
        //         // this.setState({
        //         //     count: res.result
        //         // })
        //     });
    }

    render() {
        const { count } = this.state;
        return (
            <CountingCard title={'Sites'} type='info' count={count} />
        );
    }
}

export default SiteCountingView;
