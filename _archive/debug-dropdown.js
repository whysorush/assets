// Debug script to test dropdown functionality
console.log('=== DROPDOWN DEBUG SCRIPT LOADED ===');

// Wait for DOM to be ready
setTimeout(() => {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    console.log('Found dropdowns:', dropdowns.length);
    
    dropdowns.forEach((dropdown, index) => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        console.log(`Dropdown ${index}:`, {
            trigger: trigger,
            menu: menu,
            menuDisplay: menu ? window.getComputedStyle(menu).display : 'N/A',
            menuVisibility: menu ? window.getComputedStyle(menu).visibility : 'N/A',
            hasActiveClass: dropdown.classList.contains('active')
        });
        
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                console.log(`\n=== CLICK on dropdown ${index} ===`);
                console.log('Before - classList:', dropdown.className);
                console.log('Before - menu display:', window.getComputedStyle(menu).display);
                
                setTimeout(() => {
                    console.log('After - classList:', dropdown.className);
                    console.log('After - menu display:', window.getComputedStyle(menu).display);
                    console.log('After - menu visibility:', window.getComputedStyle(menu).visibility);
                    console.log('After - menu height:', menu.offsetHeight);
                    console.log('After - menu children:', menu.children.length);
                }, 100);
            });
        }
    });
    
    // Test: Force open first dropdown after 2 seconds
    setTimeout(() => {
        if (dropdowns[0]) {
            console.log('\n=== FORCING FIRST DROPDOWN OPEN ===');
            dropdowns[0].classList.add('active');
            const menu = dropdowns[0].querySelector('.dropdown-menu');
            if (menu) {
                console.log('Forced open - display:', window.getComputedStyle(menu).display);
                console.log('Forced open - height:', menu.offsetHeight);
            }
        }
    }, 2000);
}, 1000);

