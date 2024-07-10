
document.getElementById('logout-link').addEventListener('click', function (event) {
    event.preventDefault(); 
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'adminlogin.html';
    }
});

function printMainContainer() {
    var printContents = document.querySelector('.main-container').innerHTML;
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Report</title>');
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">');
    printWindow.document.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">');
    printWindow.document.write('<link rel="stylesheet" href="adminmenu.css" type="text/css">');
    printWindow.document.write('<style>');
    printWindow.document.write('.report-header, .summary, .details { margin-bottom: 20px; }');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }');
    printWindow.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
    printWindow.document.write('th { background-color: #f2f2f2; }');
    printWindow.document.write('@media print {');
    printWindow.document.write('body { margin: 0; font-size: 12pt; }');
    printWindow.document.write('.print-button { display: none; }');
    printWindow.document.write('.report-header, .summary, .details { page-break-inside: avoid; }');
    printWindow.document.write('}');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();  
    printWindow.onload = function () {  
        printWindow.print();
        printWindow.close();
    };

}