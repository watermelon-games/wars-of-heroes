import React from 'react';
import {connect} from 'react-redux'
import {profile} from '../../services/character-service';
import {Redirect} from 'react-router-dom';
import {localization} from '../../helpers/i18n';

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
                    <h2 className="text-center">{localization('your character')}</h2>
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
                            <div className="character-image">{localization('character')}</div>
                        </div>

                        <div className="col col-lg-2">
                            <div className="item-right">Weapon</div>
                            <div className="item-right">Gloves</div>
                            <div className="item-right">Jewelery</div>
                        </div>
                    </div>
                    <table className="table">
                        <caption className="caption-top">{localization('statistics')}</caption>
                        <tbody>
                        <tr>
                            <th scope="row">{localization('reputation')}</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('money')}</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <a href="http://localhost/character/76f7a9a3-da9b-4e34-96a4-6e4b6fa1a1b1/battle">
                                    {localization('battles won')}
                                </a>
                            </th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <a href="http://localhost/character/76f7a9a3-da9b-4e34-96a4-6e4b6fa1a1b1/battle">
                                    {localization('battles lost')}
                                </a></th>
                            <td>0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    <table className="table">
                        <caption className="caption-top">{localization('general')}</caption>
                        <tbody>
                        <tr>
                            <th scope="row">{localization('name')}</th>
                            <td>{character.nickname}</td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('level')}</th>
                            <td>{character.level}</td>
                        </tr>
                        <tr>
                            <th scope="row">XP</th>
                            <td>
                                <Experience character={character}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <caption className="caption-top">{localization('stats')}</caption>
                        <tbody>
                        <tr>
                            <th scope="row">{localization('strength')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.strength} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('dexterity')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.strength} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('luck')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.luck} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('health')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.health} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('knowledge')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.knowledge} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('wisdom')}</th>
                            <td>
                                <button className="btn btn-secondary btn-circle btn-sm">-</button>
                                <span className="attribute-value"> {character.stats.wisdom} </span>
                                <button className="btn btn-secondary btn-circle btn-sm">+</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <caption className="caption-top">{localization('ability')}</caption>
                        <tbody>
                        <tr>
                            <th scope="row">{localization('theft')}</th>
                            <td>
                                <span className="attribute-value"> {character.stats.theft} </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('trade')}</th>
                            <td>
                                <span className="attribute-value"> {character.stats.trade} </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('artisan')}</th>
                            <td>
                                <span className="attribute-value"> {character.stats.artisan} </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('fishing')}</th>
                            <td>
                                <span className="attribute-value"> {character.stats.fishing} </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{localization('hunting')}</th>
                            <td>
                                <span className="attribute-value"> {character.stats.hunting} </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Experience = (props) => {
    let {character} = props;
    let percentage = (character.experience * 100) / character.next_level;

    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}}
                 aria-valuenow={percentage}
                 aria-valuemin={percentage} aria-valuemax="100">
                {character.experience} / {character.next_level}
            </div>
        </div>
    );
}

const HP = (props) => {
    let {character} = props;
    let hp = character.health;
    let percentage = (character.experience * 100) / character.next_level;

    return (
        <div className="progress mx-5 my-3">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}}
                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                50 / 50
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        character: state.Character.character,
    }
};

export default connect(mapStateToProps)(CharacterInfo)
