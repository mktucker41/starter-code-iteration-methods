// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const activeUsers = users.filter(function (user) {
    return user.isActive === true
})
printKata(1, activeUsers)
const emailAddresses = users.map(function (user) {
    return user.email
})
printKata(2, emailAddresses)
const ovation = users.some(function (user) {
    return user.company === "OVATION"
})
printKata(3, ovation)
const firstThirtyEight = users.find(function (user) {
    return user.age >= 38
})
printKata(4, firstThirtyEight)
const thirtyEightActive = users
    .filter(function (user) {
        return user.age > 38
    })
    .find(function (user) {
        return user.isActive === true
    })
printKata(5, thirtyEightActive)
const zencoBalance = users
    .filter(function (user) {
        return user.company === "ZENCO"
    })
    .map(function (user) {
        return user.balance
    })
printKata(6, zencoBalance)
const fugiatAge = users
    .filter(function (user) {
        return user.tags.includes("fugiat")
    })
    .map(function (user) {
        return user.age
    })
printKata(7, fugiatAge)