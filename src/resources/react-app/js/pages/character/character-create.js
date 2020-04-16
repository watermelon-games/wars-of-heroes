import React from 'react';
import {connect} from 'react-redux'
import {create} from '../../services/character-service';

class CharacterCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: {
                nickname: null,
                gender: 'male',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const {character} = this.state;

        character[name] = value;
        console.log(character);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {character} = this.state;

        this.props.dispatch(create(character))
            .then(() => {
                this.props.history.push('/character');
            })
            .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
            })
    }

    render() {
        const {character} = this.state;

        return (
            <div className="row">

                <div className="col-md-12">
                    <h2 className="text-center">
                        Create your character
                    </h2>
                </div>

                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label>Character nickname</label>
                            <input
                                className="form-control py-4"
                                id="nickname"
                                type="text"
                                name="nickname"
                                onChange={this.handleChange}
                                placeholder="Character nickname"/>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender"
                                               onClick={this.handleChange}
                                               defaultChecked={character.gender === 'male'}
                                               id="gender-male" value="male"/>
                                        <label className="form-check-label" htmlFor="gender-male">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender"
                                               onClick={this.handleChange}
                                               defaultChecked={character.gender === 'female'}
                                               id="gender-female" value="female"/>
                                        <label className="form-check-label" htmlFor="gender-female">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <button type="submit" className="btn btn-success">Create</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <img src="/images/village.png" style={{maxWidth: '550px'}}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated,
        profile: state.Auth.user,
        character: state.Character.character,
    }
};

export default connect(mapStateToProps)(CharacterCreate)
