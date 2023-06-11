import React from 'react';

const NavBar = () => {

    const [value, setValue] = React.useState('Categories');

    const handleChange = (event) => {
        setValue(event.targe.value);
    }

    return (
        <div>
            <div>
                <label>
                    Icon ?
                    <select value={value} onChange={handleChange}>
                        <option value="Categories">Categories</option>
                        <option value="Codesmith">Codesmith</option>
                        <option value="Time">Time</option>
                        <option value="Money">Money</option>
                    </select>
                </label>

            </div>
        </div>

    )
};


export default NavBar;