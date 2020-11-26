/**
 * Say hello world in the console
 */
export const PixiumHello = () => {
    console.log(`hello world`)
}

/**
 * Creates a pixium class and calls constructor
 * @param employeeName - The employee name to specify when creating a class
 */
export class Pixium {
    employeeName: string
    foundDiv: boolean
    nextIndex: number
    colors: string[]
    constructor(employeeName: string) {
        // Define the employee name
        this.employeeName = employeeName
        // Greet the employee
        console.log(`Welcome employee ${this.employeeName}`)
        // Try to find the pixiumBanner element
        const pixiumBanner = document.getElementById("pixiumBanner");
        // Set a field if we found it
        this.foundDiv = (pixiumBanner) ? true : false
        // If we found it
        if (this.foundDiv) {
            // Set the inner text
            document.getElementById("pixiumBanner").innerText = "Pixium Digital Pte Ltd";
            // Set the initial color index
            this.nextIndex = 1
            // Define our color array
            this.colors = ["#7549f9", "#7549f9", "#9b0005;", "#2bc4a0"]
            // Call our change color function
            this.changeColor()
        }
    }

    /**
     * Display a red console.log banner
     */
    banner = () => {
        console.log("%cPixium Digital Pte Ltd", "color: red;");
    }
    /**
     * Dynamically change the color of the text in the div
     */
    changeColor = () => {
        setInterval(() => {
            // Change the color
            document.getElementById("pixiumBanner").style.color = this.colors[this.nextIndex];
            // Get the next index
            this.nextIndex = (this.nextIndex + 1) % this.colors.length
        }, 500)
    }
}