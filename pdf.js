window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const contracts = this.document.getElementById("contracts");
            var opt = {
                filename: 'contract.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                jsPDF: { unit: 'in', format: 'letter' },
            };
            html2pdf().from(contracts).set(opt).save();
        })
}























