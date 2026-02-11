import { useState } from 'react';

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        img: 'https://via.placeholder.com/150' // Default image or user input
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field ${name} changed to: ${value}`);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form:', formData);

        try {
            const response = await fetch('http://localhost:3001/new-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                alert('Produit ajouté !');
                setFormData({ name: '', description: '', price: '', img: 'https://via.placeholder.com/150' });
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div className="add-product-form">
            <h2>Ajouter un produit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Prix:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddProduct;
