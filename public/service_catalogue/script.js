document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { name: 'Shirodhara', description: 'Experience the bliss of Shirodhara - an effortless Ayurvedic therapy involving gentle liquid streaming onto the forehead, followed by a soothing foot and palm massage, all in just 45 to 50 minutes.', price: '₹2,400/-', image: 'Images/Shirodhara.jpg' },
        { name: 'Snehan-Swedan', subname: 'Full Body Massage with Steam Bath', description: 'Indulge in a relaxing Snehan massage with medicated oils for 30-45 minutes followed by a detoxifying Sweden herbal steam bath in just 10 minutes. Re-balance your Tridoshas and revitalize your body.', price: '₹1,600/-', image: 'Images/snehan-swedan.jpg' },
        { name: 'Face Therapy', subname: 'Marma Ayurvedic Facial', description: 'Experience radiant skin with our Marma Mukha Abhyang, a 1-hour 20-minute treatment combining back massage and a relaxing facial regimen focused on marma points for enhanced circulation and deep relaxation.', price: '₹2,100/-', image: 'Images/Marma.jpg' },
        { name: 'Face Therapy', subname: 'Face Cleansing', description: 'Experience radiant skin in just 25-30 minutes with our Face Cleansing treatment, including gentle cleansing, exfoliation, and a hydrating massage for a natural glow.', price: '₹1,500/-', image: 'Images/Face-Cleansing.jpg' },
        { name: 'Facial Therapy', subname: 'Pigmentation Reduction Facial', description: 'Achieve brighter, more even skin tone with our Pigmentation Reduction Facial, featuring a cleansing gel, exfoliating scrub, and hydrating rose serum—all in one luxurious session.', price: '₹2,400/-', image: 'Images/Pigmentation.jpg' },
        { name: 'Facial Therapy', subname: 'Personalized Facial', description: 'Indulge in a personalized facial journey, crafted specifically for your skin type. Experience deep cleansing, gentle exfoliation, and a customized herbal blend for radiant results.', price: '₹1,500/- to ₹3,000/-', image: 'Images/Personalized-Facial.jpg' },
        { name: 'Facial Therapy', subname: 'Mukhalepan', description: 'Discover our Mukhalepan treatment—a calming, cooling remedy crafted for Pitta-related skin concerns like redness and acne. Restore balance and vitality naturally.', price: '₹600/-', image: 'Images/Mukhalepan-therapy.jpg' },
        { name: 'Shiro Abhyanga', subname: 'Head Massage', description: 'Unwind and restore with Shiro Abhyanga, a soothing journey of warm herbal oils, expertly massaged into your head, neck, and shoulders, for ultimate relaxation and renewal.', price: '₹500/-', image: 'Images/Shiro-Abhyanga.jpg' },
        { name: 'Shirolepan', subname: 'Personalized Hair Mask', description: 'Transform your hair with Shirolepan, a personalized blend of herbs and oils that nourishes and strengthens, leaving you with vibrant, healthy hair.', price: '₹1,200/- to ₹1,800/-', image: 'Images/Shirolepan.jpg' },
        { name: 'Dhuni', subname: 'Medicated Smoke for Hair', description: 'Indulge in Dhuni, a unique herbal treatment for ultimate experience for your senses in aromatic smoke—a relaxing traditional hair drying process, cleansing your hair and scalp while reducing fatigue and headaches.', price: '₹500/-', image: 'Images/Dhuni.jpg' },
        { name: 'Paddhabyanga', subname: 'Foot Massage', description: 'Experience the ultimate benefits of Padabhyanga, a 30-minute session that includes nourishing oil application and a rhythmic massage focusing on joints and energy points.', price: '₹500/-', image: 'Images/Paddhabyanga.jpg' },
        { name: 'Hair Color Pack', subname: 'Black & Brown', description: 'Transform your hair naturally with vibrant brown hues with our Manjisthadi Ayurvedic Brown Hair Color, enriched with Manjistha and Ayurvedic herbs, for beautiful, healthy, and natural hair in 3 hours.', price: '₹650/- to ₹1,500/-', image: 'Images/Hair-Color.jpg' },
        { name: 'Mukha Abhyan', subname: 'Face Massage', description: 'Mukha Abhyang, a traditional Ayurvedic face massage, is a rejuvenating practice that enhances skin health and overall well-being.', price: '₹500/-', image: 'Images/Mukha-Abhyan.jpg' },
        { name: 'Pristhabhyang', subname: 'Back Massage', description: 'Pristhabhyang, or back massage, is a therapeutic practice rooted in Ayurvedic tradition, specifically designed to alleviate back pain and promote overall well-being.', price: '₹399/-', image: 'Images/Pristhabhyang.jpg' },
    ];

    const serviceGrid = document.querySelector('.service-grid');
    const mainSection = document.querySelector('.main-section');

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';

        const serviceImage = document.createElement('img');
        serviceImage.src = service.image;
        serviceImage.alt = service.name;

        const serviceName = document.createElement('h3');
        serviceName.className = 'service-name';
        serviceName.textContent = service.name;

        const serviceSubname = document.createElement('h4');
        serviceSubname.className = 'service-subname';
        serviceSubname.textContent = service.subname || '';

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        const servicePrice = document.createElement('p');
        servicePrice.textContent = `Price: ${service.price}`;

        serviceItem.appendChild(serviceImage);
        serviceItem.appendChild(serviceName);
        if (service.subname) {
            serviceItem.appendChild(serviceSubname);
        }
        serviceItem.appendChild(serviceDescription);
        serviceItem.appendChild(servicePrice);

        serviceGrid.appendChild(serviceItem);
    });

    // Add background image to the main section after populating the content
    mainSection.style.backgroundImage = "url('Images/background.png')";

    // Adjust the grid layout
    adjustGrid();
    window.addEventListener('resize', adjustGrid);

    function adjustGrid() {
        const serviceItems = document.querySelectorAll('.service-item');
        const containerWidth = serviceGrid.clientWidth;
        const itemWidth = serviceItems[0].clientWidth + 40;

        const itemsPerRow = Math.floor(containerWidth / itemWidth);

        if (itemsPerRow < 3) {
            serviceGrid.style.justifyContent = 'center';
        } else {
            serviceGrid.style.justifyContent = 'center';
        }
    }
});
