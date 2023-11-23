window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("contracts");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'contract.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(contracts).set(opt).save();
        })
}























