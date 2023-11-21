function generateContract() {
    // Get values from input fields
    const clientName = document.getElementById('clientName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const serviceCost = document.getElementById('serviceCost').value;
    const serviceDescription = document.getElementById('serviceDescription').value;

    // Generate the contract content
    const contractContent = `
        <h2>Contract</h2>
        <p><strong>Name of Client:</strong> ${clientName}</p>
        <p><strong>Contract Start Date:</strong> ${startDate}</p>
        <p><strong>Contract End Date:</strong> ${endDate}</p>
        <p><strong>Service Cost:</strong> $${serviceCost}</p>
        <p><strong>Service Description:</strong> ${serviceDescription}</p>
    `;

    // Display the generated contract
    document.getElementById('generatedContract').innerHTML = contractContent;
}
