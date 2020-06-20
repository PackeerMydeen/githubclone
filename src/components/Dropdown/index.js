import React from 'react'
import './index.scss'


class Dropdown extends React.Component {
    state = {
        show: false
    }
    handleToggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handleChange = (value, index) => {
        this.props.changeFilter(value, index)
        this.handleToggle()
    }
    render() {
        const {
            value,
            handleBlur,
            options,
            placeHolder
        } = this.props;


        return (
            <div className="dropdown-container">
                <input
                    defaultValue={value}
                    className="dropdown-btn"
                    onClick={this.handleToggle}
                    onBlur={handleBlur}
                    placeholder={placeHolder}
                />

                <ul className="dropdown-list" hidden={!this.state.show}>
                    {
                        options.map((option, index) => (
                            <li
                                key={option}
                                className="option"
                                onClick={() => this.handleChange(option, index)}
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Dropdown