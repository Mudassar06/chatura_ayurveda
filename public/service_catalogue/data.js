const treatments = [
    {
        name: "Shirodhara",
        image: "img/shirodhara.jpg",
        description: "Shirodhara is a traditional Ayurvedic therapy that involves the continuous flow of warm herbal oil over your forehead, followed by a relaxing foot and palm massage.",
        benefits: [
            "Improves sleep quality and treats insomnia",
            "Relieves migraines and headaches",
            "Reduces stress",
            "Nourishes the scalp and promotes healthy hair growth",
            "Enhances hair strength and luster"
        ],
        time: "60 minutes",
        prices: [
            { type: "Plain Shirodhara oil", price: 2299 },
            { type: "Ayurvedic Shirodhara oil", price: 2899 }
        ]
    },
    {
        name: "Snehan-Swedans",
        image: "img/Snehan - Swedan.jpg",
        description: "Snehan-Swedan therapy starts with a relaxing full-body massage using warm medicinal oils that include massaging pressure points and is concluded with a steam bath.",
        benefits: [
            "Nourishes the skin",
            "Relieves muscle tension and joint stiffness",
            "Treats fatigue",
            "Enhances muscle strength",
            "Reduces dryness and itching, targeting stretch marks",
            "Re-balances Tridoshas, promoting overall body strength."
        ],
        time: "60 minutes",
        prices: [
            { type: "Plain Aromatic oil", price: 1599 },
            { type: "Ayurvedic Aromatic oil", price: 1799 }
        ]
    },
    {
        name: "Potli Massage",
        image: "img/Potli masage.jpg",
        description: "Ayurvedic Potli Massage starts with a full body oil massage, followed by an herbal Potli massage targeting specific pain and discomfort areas, and concludes with a steam bath.",
        benefits: [
            "Relieves pain",
            "Reduces inflammation",
            "Enhances blood circulation",
            "Nourishes the skin deeply",
            "Detoxifies the body",
            "Ideal for joint pain, back pain, and stiffness"
        ],
        time: "75 minutes",
        prices: [
            { type: "Plain Aromatic Oil Massage", price: 1999 },
            { type: "Ayurvedic Potli Massage", price: 2299 }
        ]
    },
    {
        name: "Night Glow Facial",
        image: "img/Night glow facial.jpg",
        description: "The Ayurvedic 'Night Glow Facial' starts with a soothing back massage, followed by gentle cleansing using natural gels, a mild scrub, and an oil or serum massage. It is then followed by steaming to open pores and prepare them for a herbal mask. The night glow face pack is applied next, and the treatment concludes with a foot massage for complete relaxation.",
        benefits: [
            "Enhances natural and quick glow",
            "Cleanses and detoxifies",
            "Removes tan",
            "Refreshes and nourishes skin deeply"
        ],
        time: "75 minutes",
        prices: [
            { type: "Standard", price: 2699 }
        ]
    },
    {
        name: "Marma Facial",
        image: "img/Marma facial.jpg",
        description: "The Marma Facial starts with a back massage followed by cleansing and scrubbing. Next, a Marma massage using medicated oil or serum targets all pressure points on the face and head. After steaming, a herbal face mask (Lepan) is applied.",
        benefits: [
            "Reduces fatigue and headaches",
            "Increases facial strength",
            "Relaxes facial muscles",
            "Provides deep nourishment",
            "Enhances skin elasticity",
            "Gives a natural glow making the face look alive and fresh"
        ],
        time: "80 minutes",
        prices: [
            { type: "Standard", price: 2199 }
        ]
    },
    {
        name: "Face Clean-up",
        image: "img/Face Cleanup.jpg",
        description: "Our Facial Clean-Up is perfect for a quick refresh. It starts with cleansing and scrubbing, followed by a massage with medicated oil or serum, and finishes with a steam treatment.",
        benefits: [
            "Provides clean glowing skin with immediate results",
            "Removes tan and offers essential cleansing",
            "Provides nourishment for a radiant look"
        ],
        time: "20 minutes",
        prices: [
            { type: "Standard", price: 1699 }
        ]
    },
    {
        name: "Pigmentation Reduction Facial",
        image: "img/Pigmentation reductio facial.jpg",
        description: "Our Pigmentation Reduction Facial begins with a back massage, cleansing and scrubbing, followed by a face massage and steaming. Application of a herbal face mask (Lepan) completes the treatment, which is concluded with a soothing foot massage. Using medicated oils, serums, and 'lepans' crafted with saffron, arjun, and rakta chandana, this treatment effectively reduces pigmentation and black spots, resulting in an even skin tone.",
        benefits: [
            "Effectively reduces pigmentation and black spots",
            "Promotes an even skin tone"
        ],
        time: "80 minutes",
        prices: [
            { type: "Standard", price: 2599 }
        ]
    },
    {
        name: "Mukhalepan",
        image: "img/Mukhalepan.jpg",
        description: "The Ayurvedic therapy 'Mukhalepan' begins with cleansing the face using naturally extracted gels, followed by the application of a herbal paste (lepan).",
        benefits: [
            "Addresses skin issues such as pimples, swelling, rashes, and redness",
            "Suitable for acne-prone skin"
        ],
        time: "30 minutes",
        prices: [
            { type: "Standard", price: 799 }
        ]
    },
    {
        name: "Mukha Abhyanga",
        image: "img/Mukha Abhyang.jpg",
        description: "Experience Mukha Abhyanga, a traditional Ayurvedic face massage that relaxes facial muscles using Ayurvedic oils and serums handcrafted with traditional Ayurvedic procedures.",
        benefits: [
            "Enhances facial muscle tone",
            "Reduces signs of aging",
            "Prevents sagging",
            "Improves complexion by eliminating toxins",
            "Supports sense organ function",
            "Promotes sinus health"
        ],
        time: "20 minutes",
        prices: [
            { type: "Standard", price: 599 }
        ]
    },
    {
        name: "Shiro Abhyanga",
        image: "img/Shiro Abhyang.jpg",
        description: "Shiro Abhyanga involves massaging the scalp, forehead, and neck with herbal oil using traditional Ayurvedic method. This therapy targets regions affected by stress, reducing pain and tension.",
        benefits: [
            "Improves nervous system health, vision, and sleep quality",
            "Treats muscle stiffness",
            "Relieves headaches and migraines",
            "Prevents hair fall and dandruff issues"
        ],
        time: "30 minutes",
        prices: [
            { type: "Standard", price: 599 }
        ]
    },
    {
        name: "Hair Color Pack",
        image: "img/Hair colur pack.jpg",
        description: "Our natural hair color pack, crafted with Ayurvedic herbs, offers vibrant shades naturally without staining the scalp or skin and without side effects. This long-lasting hair color is suitable for all hair types.",
        benefits: [
            "Heals the scalp",
            "Prevents greying",
            "Leaves hair silky",
            "Tackles hair fall",
            "Addresses dandruff",
            "Combats dryness for healthy long hair"
        ],
        time: "30-45 minutes",
        prices: [
            { type: "Brown", price: 1199 },
            { type: "Black", price: 1099 },
            { type: "Brown touch up", price: 591 },
            { type: "Black touch up", price: 499 }
        ]
    },
    {
        name: "Shirolepan",
        image: "img/Hair mask.jpg",
        description: "Shirolepan, an Ayurvedic practice, involves gently applying a herbal paste to the scalp and hair, promoting scalp health with natural ingredients.",
        benefits: [
            "Nourishes and strengthens hair roots",
            "Promotes hair growth",
            "Treats dandruff and hair loss",
            "Enhances scalp hygiene and nourishment",
            "Addresses scalp infections and related issues",
            "Restores natural hair luster",
            "Effectively relieves stress"
        ],
        time: "35-45 minutes",
        prices: [
            { type: "Rosemary hair mask", price: 1699 },
            { type: "Tea tree hair mask", price: 1699 },
            { type: "Rosewood hair mask", price: 1799 }
        ]
    },
    /*{
        name: "Dhoop",
        image: "img/dhoop.jpg",
        description: "Dhoop is crafted from various dried flowers, herbs, and other herbal aromatic ingredients like rose powder, sandalwood powder, bakuchi, and lobaan. An often-overlooked benefit is its traditional hair-drying properties, leaving a delightful fragrance.",
        benefits: [
            "Prevents hair infections",
            "Avoids direct heat application",
            "Preserves natural hair moisture"
        ],
        time: "15 minutes",
        prices: [
            { type: "Standard", price: 499 }
        ]
    },*/
    {
        name: "Paddhabhyanga",
        image: "img/Padabhyang.jpg",
        description: "Padabhyanga is an Ayurvedic foot massage that focuses on specific marma points on the feet using warm herbal oil.",
        benefits: [
            "Relieves leg pain and fatigue",
            "Relaxes muscles",
            "Strengthens the legs",
            "Enhances blood circulation",
            "Maintains foot health",
            "Promotes healthy eyesight and hearing"
        ],
        time: "20 minutes",
        prices: [
            { type: "Standard", price: 599 }
        ]
    },
    {
        name: "Pristhabhyang",
        image: "img/Pristhabhyang.jpg",
        description: "Pristhabhyanga, an Ayurvedic back massage, aims to reduce back pain. This warm oil massage targets marmas from the cervical to lumbar regions, releasing stiffness and pain. Personalized oils are chosen to match your skin type and concerns, ensuring customized care.",
        benefits: [
            "Promotes relaxation",
            "Enhances flexibility",
            "Offers relief from discomfort"
        ],
        time: "20 minutes",
        prices: [
            { type: "Standard", price: 499 }
        ]
    }
];

// Function to dynamically generate HTML for treatments
function displayTreatments() {
    const serviceGrid = document.querySelector('.service-grid');
    const mainSection = document.querySelector('.main-section');

    treatments.forEach(treatment => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';

        const serviceImage = document.createElement('img');
        serviceImage.src = treatment.image;
        serviceImage.alt = treatment.name;

        const serviceName = document.createElement('h3');
        serviceName.className = 'service-name';
        serviceName.textContent = treatment.name;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = treatment.description;

        const serviceBenefits = document.createElement('ul');
        serviceBenefits.className = 'service-benefits';
        treatment.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            serviceBenefits.appendChild(li);
        });

        const serviceTime = document.createElement('p');
        serviceTime.className = 'service-time';
        serviceTime.textContent = `Time: ${treatment.time}`;

        const servicePrices = document.createElement('div');
        servicePrices.className = 'service-prices';
        treatment.prices.forEach(price => {
            const priceItem = document.createElement('p');
            priceItem.textContent = `${price.type}: ₹${price.price}/-`;
            servicePrices.appendChild(priceItem);
        });

        serviceItem.appendChild(serviceImage);
        serviceItem.appendChild(serviceName);
        serviceItem.appendChild(serviceDescription);
        serviceItem.appendChild(serviceBenefits);
        serviceItem.appendChild(serviceTime);
        serviceItem.appendChild(servicePrices);

        serviceGrid.appendChild(serviceItem);
    });

    // Add background image to the main section after populating the content
    if (mainSection) {
        mainSection.style.backgroundImage = "url('Images/background.png')";
    }

    // Adjust the grid layout
    adjustGrid();
    window.addEventListener('resize', adjustGrid);
}

function adjustGrid() {
    const serviceGrid = document.querySelector('.service-grid');
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceGrid && serviceItems.length > 0) {
        const containerWidth = serviceGrid.clientWidth;
        const itemWidth = serviceItems[0].clientWidth + 40; // Adding gap
        const itemsPerRow = Math.floor(containerWidth / itemWidth);
        serviceGrid.style.justifyContent = 'center';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayTreatments();
});
