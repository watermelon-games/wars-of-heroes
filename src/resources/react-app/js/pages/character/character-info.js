import React from 'react';
import {connect} from 'react-redux'
import {profile} from "../../services/character-service";
import {Redirect} from "react-router-dom";
import {localization} from "../../helpers/i18n";

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            character: {
                nickname: null,
                gender: null,
                avatar: null,
                character: null,
                money: null,
                level: null,
                experience: null,
                next_level: null,
                wins: null,
                lost: null,
                npc_victories: null,
                npc_losses: null,
                fatigue: null,
                points_per_hit: null,
                stats: {
                    strength: null,
                    dexterity: null,
                    luck: null,
                    health: null,
                    knowledge: null,
                    wisdom: null,
                    theft: null,
                    trade: null,
                    artisan: null,
                    fishing: null,
                    hunting: null,
                }
            },
        };
        this.props.dispatch(profile())
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                character: this.props.character,
            })
        }
    }

    render() {
        const character = this.state.character;

        if (!character) {
            return (
                <Redirect to={'/character/create'}/>
            )
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">{ localization('your character') }</h2>
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
                            <div className="character-image">{ localization('character') }</div>
                        </div>

                        <div className="col col-lg-2">
                            <div className="item-right">Weapon</div>
                            <div className="item-right">Gloves</div>
                            <div className="item-right">Jewelery</div>
                        </div>
                    </div>
                    <table className="table">
                        <caption className="caption-top">{ localization('statistics') }</caption>
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

                <div className="col-md-6">
                    <table className="table">
                        <caption className="caption-top">General</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{ character.nickname }</td>
                        </tr>
                        <tr>
                            <th scope="row">Level</th>
                            <td>{ character.level }</td>
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
                        <caption className="caption-top">Skills</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Strength</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.strength } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Dexterity</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.strength } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Luck</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.luck } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Health</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.health } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Knowledge</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.knowledge } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Wisdom</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.wisdom } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <caption className="caption-top">Ability</caption>
                        <tbody>
                        <tr>
                            <th scope="row">Theft</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.theft } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Trade</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.trade } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Artisan</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.artisan } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Fishing</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.fishing } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Hunting</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> { character.stats.hunting } </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
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
        user: state.Auth.user,
        character: state.Character.character,
    }
};

export default connect(mapStateToProps)(CharacterInfo)
