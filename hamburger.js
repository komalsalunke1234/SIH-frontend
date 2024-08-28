function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('active');
}

function openContent(section) {
    var content = document.getElementById('content');
    switch(section) {
        case 'dashboard':
            content.innerHTML = '<h1>Dashboard</h1><p>Welcome to the Dashboard.</p>';
            break;
        case 'patient':
            content.innerHTML = '<h1>Add a Patient</h1><p>Here you can add a new patient.</p>';
            break;
        case 'opd':
            content.innerHTML = '<h1>Clinic (OPD)</h1><p>Details about OPD services.</p>';
            break;
        case 'ipd':
            content.innerHTML = '<h1>IPD</h1><p>Information on IPD services.</p>';
            break;
        case 'lis':
            content.innerHTML = '<h1>LIS</h1><p>Laboratory Information System details.</p>';
            break;
        case 'pharmacy':
            content.innerHTML = '<h1>Store & Pharmacy</h1><p>Details of the pharmacy and store.</p>';
            break;
        case 'billing':
            content.innerHTML = '<h1>Billing</h1><p>Billing information and processing.</p>';
            break;
    }
}
