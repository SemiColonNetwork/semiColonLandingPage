import React, {useEffect, useState} from 'react';
import "../style/LandingPage.css";
import SemicolonLogo from "../../../assets/images/SemicolonLogo.svg";
import YourRoleImage from "../../../assets/images/YourRoleImage.svg";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import SeamlessCommunication from "../../../assets/images/SeamlessCommunication.svg";
import CollaborationOpportunities from "../../../assets/images/CollaborationOpportunities.svg";
import PersonalizedExperience from "../../../assets/images/PersonalizedExperience.svg";
import SemicolonImage1 from "../../../assets/images/Semicolon Image 1.jpg";
import SemicolonImage2 from "../../../assets/images/Semicolon Image 2.jpg";
import SemicolonImage3 from "../../../assets/images/Semicolon Image 3.jpg";
import axios from 'axios';

function LandingPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [stack, setStack] = useState('');
    const [cohort, setCohort] = useState('');
    const [ancestorOrNative, setAncestorOrNative] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [proficientLanguages, setProficientLanguages] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    useEffect(() => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const areAllFieldsFilled = !!fullName && !!email && !emailPattern.test(email) && !!phoneNumber && !!stack && cohort !== '0' && !!ancestorOrNative && !!employmentStatus && !!proficientLanguages;
        setAllFieldsFilled(areAllFieldsFilled);
    }, [fullName, email, phoneNumber, stack, cohort, ancestorOrNative, employmentStatus, proficientLanguages]);

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

    const handleSubmit = (event) => {
        event.preventDefault();

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
                console.log('Response:', response);
                if (response.status === 201) {
                    console.log("Registration successful");
                } else {
                    console.log("Registration failed");
                }
            })
            .catch(error => {
                console.log("An error occurred:", error);
            });

        setSubmitted(true);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((previousImage) => (previousImage + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="semicolon-network-landing-page">
            <header className="header">
                <div className="header-left">
                    <img src={SemicolonLogo} alt="Semicolon Logo" className="semicolon-logo" width="100" height="100"/>
                    <h1 className="semicolon-name">semicolon</h1>
                </div>
                <div className="header-right">
                    <button className="vision-button" onClick={() => scrollToSection('vision-section')}>Vision</button>
                    <button className="why-it-matters-button" onClick={() => scrollToSection('why-it-matters-section')}>Why It Matters</button>
                    <button className="your-role-button" onClick={() => scrollToSection('your-role-section')}>Your Role</button>
                    <button className="join-the-team-button" onClick={() => scrollToSection('join-the-team-section')}>Join The Team</button>
                </div>
            </header>
            <div className="semicolon-community">
                <h1 className="community-header">Building a vibrant <br/> Community Hub</h1>
                <p className="community-text">Join us on this journey to build a platform that empowers our <br/> school community, fosters meaningful connections, and <br/> redefines how we engage and collaborate. Together, we will <br/> shape the future of our school community's digital presence.</p>
                <button className="join-the-team-community-button" onClick={() => scrollToSection('join-the-team-section')}>Join The Team</button>
                <div className="image-scroll-container">
                    {[
                        SemicolonImage1,
                        SemicolonImage2,
                        SemicolonImage3
                    ].map((image, index) => (
                        <img key={index} src={image} alt={`Semicolon ${index + 1}`} style={{width: '1437px', height: '690px', display: index === currentImage ? 'block' : 'none'}}/>
                    ))}
                </div>
            </div>
            <div className="what-we-envision" id="vision-section">
                <h2 className="what-we-envision-header">What We Envision</h2>
                <div className="what-we-envision-containers">
                    <div className="what-we-envision-container">
                        <h3 className="what-we-envision-sub-header"><span style={{ color: "#ff2e2e" }}>Seamless</span> <br/> Communication
                            <img className="what-we-envision-image" src={SeamlessCommunication} alt="Seamless Communication" width="80" height="80"/>
                        </h3>
                        <p className="what-we-envision-text">Imagine a platform that <br/> simplifies communication, <br/> making it effortless to stay <br/> updated on campus events, <br/> academic resources, and <br/> news.</p>
                    </div>
                    <div className="what-we-envision-red-container">
                        <h3 className="what-we-envision-sub-header">Collaboration <br/> Opportunities <img className="what-we-envision-image" src={CollaborationOpportunities} alt="Collaboration Opportunities" width="80" height="80"/></h3>
                        <p className="what-we-envision-text">Picture a space where you can <br/> easily collaborate with peers on <br/> projects, share insights, and <br/> foster meaningful connections <br/> within the school community.</p>
                    </div>
                    <div className="what-we-envision-container">
                        <h3 className="what-we-envision-sub-header">Mentorship & <br/> <span style={{ color: '#ff2e2e' }}>Support</span>
                            <img className="what-we-envision-image" src={PersonalizedExperience} alt="Personalized Experience" width="80" height="80"/>
                        </h3>
                        <p className="what-we-envision-text-2">Seeking guidance, knowledge, or inspiration? <br/> This app will connect you with ancestors <br/> who can offer valuable insights and support. <br/> Say goodbye to generic advice <br/> and hello to a tailored mentorship experience.</p>
                    </div>
                </div>
            </div>
            <div className="why-it-matters" id="why-it-matters-section">
                <h2 className="why-it-matters-header">Why It Matters</h2>
                <p className="why-it-matters-text">Our vision is driven by a passion to strengthen the bonds within our school community and enhance <br/> the overall experience of being part of this vibrant tech community. We believe that by bringing this <br/> platform to life, we can create a virtual space that mirrors the rich and collaborative environment we <br/> cherish in our physical community.</p>
            </div>
            <div className="your-role" id="your-role-section">
                <div className="your-role-left">
                    <h2 className="your-role-header">Your Role</h2>
                    <p className="your-role-text">We are looking for talented software engineers and <br/> product designers who share our vision and passion <br/> for creating a dynamic and inclusive online hub. <br/> Wherever your specialization, your skills and <br/> expertise are vital to making this vision a reality.</p>
                    <p className="your-role-register-text">Are you ready to be part of something special? Register your <br/> interest today!</p>
                    <button className="your-role-join-the-team-button" onClick={() => scrollToSection('join-the-team-section')}>Join The Team</button>
                </div>
                <div className="your-role-right">
                    <img src={YourRoleImage} alt="Your Role"/>
                </div>
            </div>
            <div className="join-the-team" id="join-the-team-section">
                <h2 className="join-the-team-header">Join The Team</h2>
                <form className="registration-form" onSubmit={(event) => {
                    handleSubmit(event);
                    }}>
                    <div>
                        <input placeholder="Full Name                                                     👤" type="text" id="fullName" value={fullName} onChange={handleFullNameChange} autoComplete="new-password"/>
                        <input placeholder="Email Address                                               ✉" type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="new-password"/>
                    </div>
                    <div>
                        <PhoneInput country={'ng'} value={phoneNumber} onChange={handlePhoneChange} style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '20px' }}/>
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
                    {submitted ? (
                        <button className="join-the-team-submit-button" disabled style={{ backgroundColor: 'lightgreen', fontSize: '20px', width: '300px', height: '100px', padding: '20px 20px 20px 20px' }}>
                            Thank you, we will get back to you shortly!
                        </button>
                    ) : (
                        <button className="join-the-team-submit-button" type="submit" disabled={!allFieldsFilled}>Submit</button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LandingPage;
