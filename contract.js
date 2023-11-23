document.addEventListener('DOMContentLoaded', function () {

    let contractContent;
   

    function generateContract() {
        const clientName = document.getElementById('clientNameInput').value;
        const serviceDescription = document.getElementById('serviceDescriptionInput').value;
        const startDate = document.getElementById('startDateInput').value;
        const endDate = document.getElementById('endDateInput').value;
        const paymentAmount = document.getElementById('paymentAmountInput').value;

        contractContent = `
        <h1>Fixed Term Agreement</h1>
        <p>between</p>
        <p>BMF ATTORNEYS with company registration number 2022/123456/07</p>
        <p>and</p>
        <label for="clientName">Client Name: ${clientName}</label>
        <p>Collectively referred herein as the “parties”</p>

        <h2>Payment Terms:</h2>
        <p>BMF Attorney’s fee $ ${paymentAmount} (excluding VAT). The retainer fee can be paid upfront, or month-to-month and the payment terms can be payable as follows:</p>
        <p>Upfront:</p>
        <p>Three-twelfths of the fee during the probation period in 3 equal installments by the 7th day of each month</p>
        <p>Nine-twelfths of the fee upon conclusion of the probation period of employment payable on the 7th day of the 4th month.</p>
        <p>Month-to-month:</p>
        <p>The month-to-month fee shall be paid by the 7th day of each month</p>
        <p>No variation or amendment to this Agreement shall be of any effect unless such amendment is put in writing and signed by all parties</p>
        <p>Any documentation prepared by BMF Attorneys remains its property</p>

        <h2>Appointment</h2>
        <p>The Client has procured the services of BMF Attorneys and hereby accepts the appointment as an independent contractor of the Client for a fixed period of time.</p>
        <p>The reason for this fixed-term contract is for the appointment and completion of the <span id="serviceDescription">${serviceDescription}</span></p>

        <h2>Duration</h2>
        <p>Notwithstanding the date of signature hereof, this fixed term contract shall be deemed to have commenced on the <span id="startDate">${startDate}</span> and will terminate, without further notice, on the <span id="endDate">${endDate}</span>.</p>
        <p>The automatic termination of the contract on the Termination Date shall not be construed as a dismissal but as the completion of a fixed term contract.</p>

        <h2>Signed at</h2>
        <p>on</p>
        <p>____________________________________</p>
        <p>Who warrants authority on behalf of Jobox</p>

        <h2>Signed at</h2>
        <p>on</p>
        <h2>Signed at</h2>
        <p>on</p>
        <p>____________________________________</p>
        <p>Who warrants authority on behalf of <span id="clientAuthority">${clientName}</span></p>
    `;

        // document.getElementById('generatedContract').innerHTML = contractContent;

       

        
    }

    // Attach the generateContract function to the button click event
    document.getElementById('generateButton').addEventListener('click', generateContract);

    
});



