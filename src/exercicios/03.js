
        let isApproved = true

        let element = document.getElementById("box")

        if (isApproved) { 
            element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "white"
        })

        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "black"
        })

        }
        
        
 