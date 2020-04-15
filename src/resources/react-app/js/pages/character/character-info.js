import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            character: {},
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                user: this.props.user,
            })
        }
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/character'}};
        const {isAuthenticated} = this.props;

        return (
            <div className="row">

                <div className="col-md-12">
                    <h2 className="text-center">
                        Your character
                    </h2>
                </div>

                <div className="col-md-6">
                    <div className="progress mx-5 my-3">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}}
                             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            50 / 50
                        </div>
                    </div>
                    <div className="progress mx-5 my-3">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}}
                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            25 / 40
                        </div>
                    </div>

                    <div className="row  justify-content-md-center character">
                        <div className="col col-lg-2">
                            <div className="item-left">Helmet</div>
                            <div className="item-left">Shield</div>
                            <div className="item-left">Shoes</div>
                        </div>

                        <div className="col-md-auto">
                            <div className="character-image">Character</div>
                        </div>

                        <div className="col col-lg-2">
                            <div className="item-right">Weapon</div>
                            <div className="item-right">Gloves</div>
                            <div className="item-right">Jewelery</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <table className="table">
                        <caption className="caption-top">General</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>Character name</td>
                        </tr>
                        <tr>
                            <th scope="row">Level</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="row">XP</th>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: '80%'}}
                                         aria-valuenow="80"
                                         aria-valuemin="80" aria-valuemax="100">
                                        80 / 100
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="table">
                        <caption className="caption-top">Attributes</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Strength</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value">5</span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Agility</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value">5</span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Constitution</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value">5</span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Intelligence</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value">5</span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Charisma</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value">5</span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>


                        </tbody>
                    </table>


                    <table className="table">
                        <caption className="caption-top">Statistics</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Reputation</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">Money</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <a href="http://localhost/character/76f7a9a3-da9b-4e34-96a4-6e4b6fa1a1b1/battle">
                                    Battles Won
                                </a>
                            </th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <a href="http://localhost/character/76f7a9a3-da9b-4e34-96a4-6e4b6fa1a1b1/battle">
                                    Battles Lost
                                </a></th>
                            <td>0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated,
        profile: state.Auth.user,
    }
};

export default connect(mapStateToProps)(CharacterInfo)
