function printData(data) {
    try {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            console.log(i)
        }
    } catch(error) {
        console.log(error)
    }
}

function cleanup() {
    console.log("The End")
}

printData()
cleanup()

try {
    consle.log("dasdsad")
} catch (error) {
    console.log("Error caught", error)   
}
console.log("The ENd")