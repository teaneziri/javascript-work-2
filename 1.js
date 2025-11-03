
/*  The first three digits in each number are operator codes
 make print to console like this
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

let phoneNumbers = st.split('\n')

console.log(phoneNumbers);


let formattedNumbers = phoneNumbers.map(phoneNum => {

    let digits = phoneNum.replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3")
    console.log(digits)

})



