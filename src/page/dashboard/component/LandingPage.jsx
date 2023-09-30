import React, { useState } from 'react';
import "../style/LandingPage.css";
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import logo from "../../../assets/images/logo.svg";
import YourRoleImage from "../../../assets/images/YourRoleImage.svg";
import SeamlessCommunication from "../../../assets/images/SeamlessCommunication.svg";
import CollaborationOpportunities from "../../../assets/images/CollaborationOpportunities.svg";
import PersonalizedExperience from "../../../assets/images/PersonalizedExperience.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [stack, setStack] = useState('');
    const [cohort, setCohort] = useState('');
    const [ancestorOrNative, setAncestorOrNative] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [proficientLanguages, setProficientLanguages] = useState('');
    const [buttonText, setButtonText] = useState('Submit');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };

    const handleStackChange = (event) => {
        setStack(event.target.value);
    };

    const handleCohortChange = (event) => {
        setCohort(event.target.value);
    };

    const handleAncestorOrNativeChange = (event) => {
        setAncestorOrNative(event.target.value);
    };

    const handleEmploymentStatusChange = (event) => {
        setEmploymentStatus(event.target.value);
    };

    const handleProficientLanguagesChange = (event) => {
        setProficientLanguages(event.target.value);
    };

    const resetFormFields = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setStack('');
        setCohort('');
        setAncestorOrNative('');
        setEmploymentStatus('');
        setProficientLanguages('');
    };

    const validateFullName = (fullName) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(fullName);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        return phoneNumber.length === 10;
    };

    const validateStack = (stack) => {
        return stack !== "";
    };

    const validateCohort = (cohort) => {
        return parseFloat(cohort) >= 1;
    };

    const validateProficientLanguages = (proficientLanguages) => {
        return proficientLanguages !== "";
    };

    const validateAncestorOrNative = (ancestorOrNative) => {
        return ancestorOrNative !== "";
    };

    const validateEmploymentStatus = (employmentStatus) => {
        return employmentStatus !== "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateFullName(fullName)) {
            toast.error("Please enter a valid full name");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            toast.error("Please enter a valid phone number");
            return;
        }

        if (!validateStack(stack)) {
            toast.error("Please select a stack");
            return;
        }

        if (!validateCohort(cohort)) {
            toast.error("Please select a valid cohort");
            return;
        }

        if (!validateProficientLanguages(proficientLanguages)) {
            toast.error("Please enter proficient language(s)");
            return;
        }

        if (!validateAncestorOrNative(ancestorOrNative)) {
            toast.error("Please select Ancestor or Native");
            return;
        }

        if (!validateEmploymentStatus(employmentStatus)) {
            toast.error("Please select an employment status");
            return;
        }

        setButtonText('Loading...');
        setButtonDisabled(true);

        const data = {
            fullName,
            email,
            phoneNumber,
            stack,
            cohort,
            ancestorOrNative,
            employmentStatus,
            proficientLanguages
        };

        axios.post("https://semicolonnetwork.onrender.com/join", data)
            .then(response => {
                if (response.status === 201) {
                    toast.success("Registration successful: " + response.data);
                    resetFormFields();
                    setButtonText('Submitted');
                    setButtonDisabled(true);
                }
            })
            .catch(error => {
                if (error.response) {
                    toast.error("Registration failed: " + error.response.data);
                    setButtonText('Submit');
                } else if (error.request) {
                    console.log("No response received: ", error.request);
                    setButtonText('Submit');
                } else {
                    console.log("Error setting up the request: ", error.message);
                    setButtonText('Submit');
                }
            });
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="semicolon-network-landing-page">
            <header className="header">
                <div className="header-left">
                    <img src={logo} alt="Logo" className="semicolon" width="100" height="60"/>
                </div>
                <div className="header-right">
                    <button className="vision-button" onClick={() => scrollToSection('vision-section')}>Vision</button>
                    <button className="why-it-matters-button" onClick={() => scrollToSection('why-it-matters-section')}>Why It Matters</button>
                    <button className="your-role-button" onClick={() => scrollToSection('your-role-section')}>Your Role</button>
                    <button className="join-the-team-button" onClick={() => scrollToSection('join-the-team-section')}>Join the team</button>
                </div>
            </header>
            <div className="semicolon-community">
                <div className="hero-section">
                    <h1 className="community-header">Building a vibrant <br/> Community Hub</h1>
                    <p className="community-text">
                        Join us on this journey to build a platform that empowers our community,
                        foster meaningful connections, and redefines how we engage and collaborate.
                        Together, we will shape the future of our community's digital presence.
                    </p>
                    <p className="community-text content">...built by ancestors and natives, for ancestors and natives</p>
                    <button className="join-the-team-community-button" onClick={() => scrollToSection('join-the-team-section')}>Join the team</button>
                </div>
                <div className="image-scroll-container" ></div>
            </div>
            <div className="what-we-envision" id="vision-section">
                <h2 className="what-we-envision-header">What We Envision</h2>
                <div className="what-we-envision-containers">
                    <div className="what-we-envision-container">
                        <h3 className="what-we-envision-sub-header"><span style={{ color: "#ff2e2e" }}>Seamless</span> <br/> Communication
                            <img className="what-we-envision-image" src={SeamlessCommunication} alt="Seamless Communication" width="80" height="80"/>
                        </h3>
                        <p className="what-we-envision-text">Imagine a platform that allows you post messages and simplify communication. Making it effortless to stay updated on community events, academic resources, and news.</p>
                    </div>
                    <div className="what-we-envision-red-container">
                        <h3 className="what-we-envision-sub-header">Collaboration <br/> Opportunities <img className="what-we-envision-image" src={CollaborationOpportunities} alt="Collaboration Opportunities" width="80" height="80"/></h3>
                        <p className="what-we-envision-text">Picture a space where you can easily collaborate with peers on projects, share insights, and foster meaningful connections within the community.</p>
                    </div>
                    <div className="what-we-envision-container third">
                        <h3 className="what-we-envision-sub-header">Mentorship & <br/> <span style={{ color: '#ff2e2e' }}>Support</span>
                            <img className="what-we-envision-image" src={PersonalizedExperience} alt="Personalized Experience" width="80" height="80"/>
                        </h3>
                        <p className="what-we-envision-text-2">Seeking guidance, knowledge, or inspiration? This app will connect you with ancestors who can offer valuable insights and support. Say goodbye to generic advice and hello to a tailored mentorship experience.</p>
                    </div>
                </div>
            </div>
            <div className="why-it-matters" id="why-it-matters-section">
                <h2 className="why-it-matters-header">Why It Matters</h2>
                <p className="why-it-matters-text">Our vision is driven by a passion to strengthen the bonds within our school community and enhance the overall experience of being part of this vibrant tech community. We believe that by bringing this platform to life, we can create a virtual space that mirrors the rich and collaborative environment we cherish in our physical community.</p>
            </div>
            <div className="your-role" id="your-role-section">
                <div className="your-role-left">
                    <h2 className="your-role-header">Your Role</h2>
                    <p className="your-role-text">We are looking for talented software engineers and product designers who share our vision and passion for creating a dynamic and inclusive online hub. Wherever your specialization, your skills and expertise are vital to making this vision a reality.</p>
                    <p className="your-role-register-text">Are you ready to be part of something special? Register your interest today!</p>
                    <button className="your-role-join-the-team-button" onClick={() => scrollToSection('join-the-team-section')}>Join The Team</button>
                </div>
                <div className="your-role-right">
                    <h2 className="your-role-header img-header">Your Role</h2>
                    <img src={YourRoleImage} alt="Your Role"/>
                </div>
            </div>
            <div className="join-the-team" id="join-the-team-section">
                <h2 className="join-the-team-header">Join the team</h2>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div>
                        <input placeholder="Full Name                                                     👤" type="text" id="fullName" value={fullName} onChange={handleFullNameChange} autoComplete="new-password"/>
                        <input placeholder="Email Address                                               ✉" type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="new-password"/>
                    </div>
                    <div className='phone-stack'>
                        <div className='phone' >
                            <PhoneInput country={'ng'} value={phoneNumber}  onChange={handlePhoneChange} className="phone-input" />
                        </div>
                        <select id="stack" value={stack} onChange={handleStackChange}>
                            <option value="">Stack</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="devops">DevOps</option>
                            <option value="product-manager">Product Manager</option>
                        </select>
                    </div>
                    <div>
                        <input placeholder="Cohort" type="number" id="cohort" value={cohort} onChange={handleCohortChange} autoComplete="new-password"/>
                        <input placeholder="Proficient Language(s)" type="text" id="proficientLanguages" value={proficientLanguages} onChange={handleProficientLanguagesChange} autoComplete="new-password"/>
                    </div>
                    <div>
                        <select id="ancestorOrNative" value={ancestorOrNative} onChange={handleAncestorOrNativeChange}>
                            <option value="">Ancestor or Native</option>
                            <option value="ancestor">Ancestor</option>
                            <option value="native">Native</option>
                        </select>
                        <select id="employmentStatus" value={employmentStatus} onChange={handleEmploymentStatusChange}>
                            <option value="">Employment Status</option>
                            <option value="Employed">Employed</option>
                            <option value="Unemployed">Unemployed</option>
                        </select>
                    </div>
                    <button className="join-the-team-submit-button" type="submit" disabled={buttonDisabled}>
                        {buttonText}
                    </button>
                </form>
            </div>
            <footer>
                <div>
                    <h3 className='business'> The Team</h3>
                    <p className='business'>Our Vision</p>
                    <p className='business'>Why It Matters</p>
                    <p className='business'> Your Role</p>
                </div>
                <div className='child-right'>
                    <h3 className='elipses'>
                        ...built by ancestors and natives, for ancestors and natives
                    </h3>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
