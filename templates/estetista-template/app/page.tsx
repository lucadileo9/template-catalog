import React from 'react';

const LandingPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
            <header style={{ backgroundColor: '#f4f4f4', padding: '10px 0' }}>
                <h1>Welcome to Estetista</h1>
                <p>Your beauty, our passion</p>
            </header>
            <main style={{ marginTop: '20px' }}>
                <section>
                    <h2>Our Services</h2>
                    <p>Explore a wide range of beauty treatments tailored just for you.</p>
                </section>
                <section style={{ marginTop: '20px' }}>
                    <h2>Contact Us</h2>
                    <p>Email: info@estetista.com</p>
                    <p>Phone: +123 456 7890</p>
                </section>
            </main>
            <footer style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
                <p>&copy; 2023 Estetista. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;