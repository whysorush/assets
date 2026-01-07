// Comprehensive Dropdown Diagnostic Script
console.log('🔍 Starting Dropdown Diagnosis...\n');

function diagnoseDropdowns() {
    console.log('='.repeat(60));
    console.log('DROPDOWN DIAGNOSIS REPORT');
    console.log('='.repeat(60));
    
    // 1. Check if dropdowns exist
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    console.log(`\n1. DROPDOWN ELEMENTS FOUND: ${dropdowns.length}`);
    
    if (dropdowns.length === 0) {
        console.error('❌ NO DROPDOWNS FOUND! Check if common.js loaded properly.');
        return;
    }
    
    // 2. Analyze each dropdown
    dropdowns.forEach((dropdown, index) => {
        console.log(`\n${'─'.repeat(60)}`);
        console.log(`DROPDOWN ${index + 1}:`);
        console.log(`${'─'.repeat(60)}`);
        
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!trigger) {
            console.error('❌ No trigger found!');
            return;
        }
        
        if (!menu) {
            console.error('❌ No menu found!');
            return;
        }
        
        console.log(`Trigger text: "${trigger.textContent.trim()}"`);
        console.log(`Menu items: ${menu.querySelectorAll('li').length}`);
        
        // Check classes
        console.log(`\nClasses:`);
        console.log(`  Dropdown: ${dropdown.className}`);
        console.log(`  Is Active: ${dropdown.classList.contains('active') ? '✅ YES' : '❌ NO'}`);
        
        // Check computed styles
        const menuStyles = window.getComputedStyle(menu);
        console.log(`\nComputed Styles for .dropdown-menu:`);
        console.log(`  display: ${menuStyles.display}`);
        console.log(`  visibility: ${menuStyles.visibility}`);
        console.log(`  opacity: ${menuStyles.opacity}`);
        console.log(`  max-height: ${menuStyles.maxHeight}`);
        console.log(`  overflow: ${menuStyles.overflow}`);
        console.log(`  position: ${menuStyles.position}`);
        console.log(`  z-index: ${menuStyles.zIndex}`);
        
        // Check if menu has content
        const menuItems = menu.querySelectorAll('li');
        console.log(`\nMenu Items (${menuItems.length}):`);
        menuItems.forEach((item, i) => {
            const link = item.querySelector('a');
            if (link) {
                console.log(`  ${i + 1}. ${link.textContent.trim()}`);
            }
        });
        
        // Check event listeners
        console.log(`\nEvent Listeners:`);
        const listeners = getEventListeners ? getEventListeners(trigger) : 'N/A (use Chrome DevTools)';
        console.log(`  Click listeners: ${listeners.click ? listeners.click.length : 'Unknown'}`);
    });
    
    // 3. Check CSS rules
    console.log(`\n${'='.repeat(60)}`);
    console.log('CSS RULES CHECK');
    console.log(`${'='.repeat(60)}`);
    
    const testMenu = document.querySelector('.dropdown-menu');
    if (testMenu) {
        const allRules = [];
        for (let sheet of document.styleSheets) {
            try {
                for (let rule of sheet.cssRules) {
                    if (rule.selectorText && rule.selectorText.includes('dropdown-menu')) {
                        allRules.push({
                            selector: rule.selectorText,
                            display: rule.style.display,
                            visibility: rule.style.visibility,
                            opacity: rule.style.opacity,
                            overflow: rule.style.overflow,
                            maxHeight: rule.style.maxHeight
                        });
                    }
                }
            } catch (e) {
                // Cross-origin stylesheet
            }
        }
        
        console.log(`\nFound ${allRules.length} CSS rules for dropdown-menu:`);
        allRules.forEach(rule => {
            console.log(`\n  Selector: ${rule.selector}`);
            if (rule.display) console.log(`    display: ${rule.display}`);
            if (rule.visibility) console.log(`    visibility: ${rule.visibility}`);
            if (rule.opacity) console.log(`    opacity: ${rule.opacity}`);
            if (rule.overflow) console.log(`    overflow: ${rule.overflow}`);
            if (rule.maxHeight) console.log(`    max-height: ${rule.maxHeight}`);
        });
    }
    
    // 4. Test toggle functionality
    console.log(`\n${'='.repeat(60)}`);
    console.log('TESTING TOGGLE FUNCTIONALITY');
    console.log(`${'='.repeat(60)}`);
    
    const firstDropdown = dropdowns[0];
    if (firstDropdown) {
        console.log('\nAttempting to toggle first dropdown...');
        const wasActive = firstDropdown.classList.contains('active');
        firstDropdown.classList.toggle('active');
        const isActive = firstDropdown.classList.contains('active');
        
        console.log(`  Before: ${wasActive ? 'active' : 'inactive'}`);
        console.log(`  After: ${isActive ? 'active' : 'inactive'}`);
        console.log(`  Toggle ${wasActive !== isActive ? '✅ WORKS' : '❌ FAILED'}`);
        
        // Check styles after toggle
        const menu = firstDropdown.querySelector('.dropdown-menu');
        if (menu) {
            const styles = window.getComputedStyle(menu);
            console.log(`\n  After toggle, menu styles:`);
            console.log(`    display: ${styles.display}`);
            console.log(`    visibility: ${styles.visibility}`);
            console.log(`    opacity: ${styles.opacity}`);
        }
        
        // Toggle back
        firstDropdown.classList.toggle('active');
    }
    
    console.log(`\n${'='.repeat(60)}`);
    console.log('DIAGNOSIS COMPLETE');
    console.log(`${'='.repeat(60)}\n`);
}

// Run diagnosis when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(diagnoseDropdowns, 1000);
    });
} else {
    setTimeout(diagnoseDropdowns, 1000);
}

// Also expose function globally for manual testing
window.diagnoseDropdowns = diagnoseDropdowns;
console.log('💡 Run diagnoseDropdowns() in console to re-run diagnosis\n');

