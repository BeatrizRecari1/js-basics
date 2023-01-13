// Create a sales receipt summary given subtotal and taxRate

function calculateSalesTax(subtotal, taxRate) {
    const taxTotal  = subtotal * taxRate;   // return = subtotal * taxRate
    return taxTotal;                         // return = subtotal * taxRate
}

const TAX_RATE  = 0.07;                      // screaming snake case ("don't mess with it") // For Palm Beach County, FL
const customerSubtotal = 17.25;

// calculate all the stuffs:
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE)
const customerTotal = customerSubtotal + customerTaxTotal; // If concatanating 17.25 + '1.21' = '17.251.21'
// In case of using a math method: not .toFixed method, instead add const roundedTotal = Math.round(customerTotal * 100) /100;

// output all the stuffs:
console.log(`Subtotal     $${customerSubtotal.toFixed(2)}`);            // second $ is part of my template literal, first is to allow the second to print
console.log(`Tax          $ ${customerTaxTotal.toFixed(2)}`);
console.log('----------------------');
console.log(`TOTAL        $${customerTotal.toFixed(2)}`);
