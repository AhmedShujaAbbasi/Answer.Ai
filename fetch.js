document.getElementById('contactForm').addEventListener ('submit', async function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    try {
        let response = await fetch('process_form.php' , {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Form submitted successfully.');
            this.reset();
        } else {
            alert('There was an error. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please check your connection.');
    }
});

