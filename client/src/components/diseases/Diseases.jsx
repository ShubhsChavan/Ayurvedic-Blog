import React from 'react'
import Disease from '../disease/Disease'
import './diseases.css'
import { useState } from 'react'
import DiseaseModal from '../diseaseinfomodal/DiseaseInfoModal'
const Diseases = () => {
    const diseaseList = [
        { name: 'Kidney', imgSrc: '../../../assets/Images/kidney.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.' },
        { name: 'Kidney', imgSrc: '../../../assets/Images/kidney.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'  },
        { name: 'त्वचेचे आजार', imgSrc: '../../../assets/Images/skin.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'  },
        { name: 'त्वचेचे आजार', imgSrc: '../../../assets/Images/skin.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'  },
        { name: 'रक्ताचे आजार', imgSrc: '../../../assets/Images/blood.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.' },
        { name: 'रक्ताचे आजार', imgSrc: '../../../assets/Images/blood.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'   },
        { name: 'लठ्ठपणा', imgSrc: '../../../assets/Images/obesity.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'  },
        { name: 'लहान मुलांचे आजार', imgSrc: '../../../assets/Images/child.png', description: 'शास्त्र शुद्ध पद्धतीने वजन का वाढत आहे याचा विचार करून वजन कमी होण्यासाठी औषधी दिली जातात.'  },

    ]
    const [selectedDisease, setSelectedDisease] = useState(null);

    const openModal = (disease) => {
        setSelectedDisease(disease);
    };

    const closeModal = () => {
        setSelectedDisease(null);
    };
    return (
        <div className='diseases-container'>
            <div className='diseases-headings'>
                <span className='diseases-main-heading'>Best Ayurvedic Treatment In <span style={{ color: 'orange' }}>India, For</span></span>
            </div>
            <div className="diseases">
                {diseaseList.map((disease, key) => (
                    <div onClick={() => openModal(disease)}>
                        <Disease name={disease.name} imgSrc={disease.imgSrc} key={key} />
                    </div>
                ))
                }
            </div>
            {selectedDisease && <DiseaseModal disease={selectedDisease} onClose={closeModal} />}
        </div>
    )
}

export default Diseases
