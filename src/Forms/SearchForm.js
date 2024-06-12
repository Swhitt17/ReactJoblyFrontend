import React, {useState} from "react";

const SearchForm = ({search}) => {

    const [formData, setFormData] = useState("");

    const handleChange = e => {
        setFormData(e.target.value);
           
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        search(formData.trim())
        setFormData(formData.trim())
    }

    return (
        <div className="SearchForm mb-4">
        <form className="form-inline" onSubmit={handleSubmit}>
            <input
            className="form-control form-control-lg flex-grow-1"
            id="searchTerm"
            type="text"
            name="searchTerm"
            placeholder="Enter a Search Term..."
            value={formData}
            onChange={handleChange}
            />
            <button className="btn btn-md btn-info" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default SearchForm;