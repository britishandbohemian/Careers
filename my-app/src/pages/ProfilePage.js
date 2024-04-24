import React, { useState } from 'react';
import './ProfilePage.css'; // Ensure you have this CSS file for styling

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        careerSummary: '',
        professionalTitle: 'Software Engineer',
        experiences: [],
        educations: [],
        email: 'john.doe@example.com', // Default or empty string if not available
        phoneNumber: '', // Optional, can be empty
        linkedinProfile: '', // Optional, can be empty
        editingContact: false // State to toggle edit mode for contact info
    });

 // Handles all input changes for contact and profile information
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Toggles the edit state for contact information
const toggleEditContact = () => {
    setFormData({ ...formData, editingContact: !formData.editingContact });
};

// Saves contact and profile information
const saveContactInfo = () => {
    // Logic to save data can be integrated here (e.g., API calls)
    toggleEditContact();
};

const renderContactInfo = () => {
    if (formData.editingContact) {
        return (
            <>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="First Name"
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Professional Title"
                    value={formData.professionalTitle}
                    name="professionalTitle"
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email Address"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                />
                <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Phone Number (Optional)"
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    onChange={handleInputChange}
                />
                <input
                    type="url"
                    className="form-control mb-2"
                    placeholder="LinkedIn Profile (Optional)"
                    value={formData.linkedinProfile}
                    name="linkedinProfile"
                    onChange={handleInputChange}
                />
                <button onClick={saveContactInfo} className="btn btn-success">Save</button>
                <button onClick={toggleEditContact} className="btn btn-secondary">Cancel</button>
            </>
        );
    } else {
        return (
            <>
                <p>Name: {formData.firstName} {formData.lastName}</p>
                <p>Title: {formData.professionalTitle}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phoneNumber || 'Not provided'}</p>
                <p>LinkedIn: <a href={formData.linkedinProfile} target="_blank" rel="noopener noreferrer">{formData.linkedinProfile || 'Not provided'}</a></p>
                <button onClick={toggleEditContact} className="btn btn-info">Edit</button>
            </>
        );
    }
};


    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({ skill: '', proficiency: 'Intermediate' });

    const handleSkillChange = (e) => {
        setNewSkill({ ...newSkill, skill: e.target.value });
    };

    const handleProficiencyChange = (e) => {
        setNewSkill({ ...newSkill, proficiency: e.target.value });
    };

    const addSkill = (e) => {
        if (e.key === 'Enter' && newSkill.skill) {
            setSkills([...skills, newSkill]);
            setNewSkill({ skill: '', proficiency: 'Intermediate' }); // Reset the new skill input
            e.preventDefault(); // Prevent form submission
        }
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };




    const handleSummaryChange = (event) => {
        setFormData({ ...formData, careerSummary: event.target.value });
    };

    const toggleEditSummary = () => {
        setFormData({ ...formData, editingSummary: !formData.editingSummary });
    };

    const saveSummary = () => {
        // You could call an API to save the summary here if needed
        console.log('Summary saved:', formData.careerSummary);
        toggleEditSummary(); // Turn off edit mode after save
    };

    const [tempExperience, setTempExperience] = useState({ company: '', title: '', startDate: '', endDate: '' });
    const [tempEducation, setTempEducation] = useState({ degree: '', fieldOfStudy: '', institution: '', graduationDate: '' });
    const [editExpIndex, setEditExpIndex] = useState(-1);
    const [editEduIndex, setEditEduIndex] = useState(-1);

    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setTempExperience({ ...tempExperience, [name]: value });
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setTempEducation({ ...tempEducation, [name]: value });
    };

    const addOrUpdateExperience = () => {
        const experiences = [...formData.experiences];
        if (editExpIndex === -1) {
            experiences.push(tempExperience);
        } else {
            experiences[editExpIndex] = tempExperience;
        }
        setFormData({ ...formData, experiences });
        clearExperience();
    };

    const addOrUpdateEducation = () => {
        const educations = [...formData.educations];
        if (editEduIndex === -1) {
            educations.push(tempEducation);
        } else {
            educations[editEduIndex] = tempEducation;
        }
        setFormData({ ...formData, educations });
        clearEducation();
    };

    const editExperience = (index) => {
        setEditExpIndex(index);
        setTempExperience(formData.experiences[index]);
    };

    const editEducation = (index) => {
        setEditEduIndex(index);
        setTempEducation(formData.educations[index]);
    };

    const deleteExperience = (index) => {
        const experiences = formData.experiences.filter((_, idx) => idx !== index);
        setFormData({ ...formData, experiences });
        clearExperience();
    };

    const deleteEducation = (index) => {
        const educations = formData.educations.filter((_, idx) => idx !== index);
        setFormData({ ...formData, educations });
        clearEducation();
    };

    const clearExperience = () => {
        setEditExpIndex(-1);
        setTempExperience({ company: '', title: '', startDate: '', endDate: '' });
    };

    const clearEducation = () => {
        setEditEduIndex(-1);
        setTempEducation({ degree: '', fieldOfStudy: '', institution: '', graduationDate: '' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', formData);
    };

    return (
        <div className='profile-form-container'>

            <form onSubmit={handleSubmit} className="profile-form">
    {/* Profile Header Section */}
    <div className="d-flex justify-content-center align-items-center mb-4">
                    <div className="profile-picture me-3" style={{ backgroundColor: '#ddd', width: 100, height: 100, borderRadius: '50%' }}></div>
                    <div className="profile-information text-center">
                        <h4>{formData.firstName} {formData.lastName}</h4>
                        <p className="text-muted">{formData.professionalTitle}</p>
                    </div>
                </div>

                {/* Contact */}

    {/* Contact Information Section */}
  {/* Contact Information Section */}
  <div className="card mb-3">
                    <div className="card-body">
                        <h2 >Personal Information</h2>
                        {renderContactInfo()}
                    </div>
                </div>
                {/* Summary Card */}
                <div className='card'>
                    <h2>Summary</h2>
                    <div className="">
                        {formData.editingSummary ? (
                            <>
                                <textarea
                                    className="form-control"
                                    value={formData.careerSummary}
                                    onChange={handleSummaryChange}
                                />
                                <button type="button" onClick={saveSummary} className="btn btn-success">Save Summary</button>
                                <button type="button" onClick={toggleEditSummary} className="btn btn-secondary">Cancel</button>
                            </>
                        ) : (
                            <>
                                <p>{formData.careerSummary}</p>
                                <button type="button" onClick={toggleEditSummary} className="btn btn-info">Edit Summary</button>
                            </>
                        )}
                    </div>

                </div>

                {/* Experience Cards and Form */}
                <div className="card">
                    <h2>Experience</h2>
                    {formData.experiences.map((experience, index) => (
                        <div key={index} className="card mb-2">
                            <div className="card-body">
                                <h5 className="card-title">{experience.title || 'New Experience'}</h5>
                                <p className="card-text">{experience.company}</p>
                                <p className="card-text">{experience.startDate} - {experience.endDate || 'Present'}</p>
                                <button type="button" className="btn btn-info" onClick={() => editExperience(index)}>Edit</button>
                                <button type="button" className="btn btn-danger" onClick={() => deleteExperience(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <div>
                        <input type="text" placeholder="Company" value={tempExperience.company} onChange={handleExperienceChange} name="company" className="form-control mb-2" />
                        <input type="text" placeholder="Title" value={tempExperience.title} onChange={handleExperienceChange} name="title" className="form-control mb-2" />
                        <input type="date" placeholder="Start Date" value={tempExperience.startDate} onChange={handleExperienceChange} name="startDate" className="form-control mb-2" />
                        <input type="date" placeholder="End Date" value={tempExperience.endDate} onChange={handleExperienceChange} name="endDate" className="form-control mb-2" />
                        <button type="button" onClick={addOrUpdateExperience} className="btn btn-success">{editExpIndex === -1 ? 'Add' : 'Update'}</button>
                        {editExpIndex !== -1 && <button type="button" onClick={clearExperience} className="btn btn-secondary">Cancel</button>}
                    </div>
                </div>

                {/* Education Cards and Form */}
                <div className="card">
                    <h2>Education</h2>
                    {formData.educations.map((education, index) => (
                        <div key={index} className="card mb-2">
                            <div className="card-body">
                                <h5>{education.degree} in {education.fieldOfStudy}</h5>
                                <p>{education.institution}, {education.graduationDate}</p>
                                <button onClick={() => editEducation(index)} className="btn btn-info">Edit</button>
                                <button onClick={() => deleteEducation(index)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ))}
                    <div>
                        <input placeholder="Degree" value={tempEducation.degree} onChange={handleEducationChange} name="degree" className="form-control mb-2" />
                        <input placeholder="Field of Study" value={tempEducation.fieldOfStudy} onChange={handleEducationChange} name="fieldOfStudy" className="form-control mb-2" />
                        <input placeholder="Institution" value={tempEducation.institution} onChange={handleEducationChange} name="institution" className="form-control mb-2" />
                        <input type="date" placeholder="Graduation Date" value={tempEducation.graduationDate} onChange={handleEducationChange} name="graduationDate" className="form-control mb-2" />
                        <button onClick={addOrUpdateEducation} className="btn btn-success">{editEduIndex === -1 ? 'Add' : 'Update'}</button>
                        {editEduIndex !== -1 && <button type="button" onClick={clearEducation} className="btn btn-secondary">Cancel</button>}
                    </div>
                </div>

                {/* Skills */}
            
                <div className="card mb-3">
                    <div className="card-body">
                        <h2 className="card-title">Skills</h2>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a skill and press Enter"
                                value={newSkill.skill}
                                onChange={handleSkillChange}
                                onKeyPress={addSkill}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <select
                                className="form-select"
                                value={newSkill.proficiency}
                                onChange={handleProficiencyChange}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>
                        <div className="breadcrumb">
                            {skills.map((skill, index) => (
                                <span key={index} className="badge bg-secondary m-1">
                                    {skill.skill} - {skill.proficiency}
                                    <button type="button" className="close" onClick={() => removeSkill(index)}>
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>






            </form>
        </div>


    );
};

export default ProfileForm;
