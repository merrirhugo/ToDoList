window.onload = () => {

    // Recover input field when click on the add button
    let addButton = document.querySelector("button")
    addButton.addEventListener("click", function () {
        let inputText = document.querySelector("input").value

        // Check if the task is not empty
        if(inputText == "") {
            alert("Please enter a task")
        }
        else {

            // Task (li in ol)
            let task = document.createElement("li")
            task.innerHTML = inputText

            // Delete task button
            let del = document.createElement("button")
            del.innerHTML = "DELETE"
            del.style.color = "red"

            // Done task button
            let done = document.createElement("button")
            done.innerHTML = "DONE"
            done.style.color = "lightgreen"

            // Group the element together
            let group = document.createElement("div")
            group.appendChild(task)
            group.appendChild(del)
            group.appendChild(done)
            group.style.display = "flex"
            group.style.flexDirection = "row"

            // ADD task
            let add = document.querySelector(".tasks")
            add.appendChild(group)

            // DONE task
            let doneTasks = document.querySelector(".done_tasks")
            done.addEventListener("click", function() {
                group.removeChild(done)
                doneTasks.appendChild(group)
            })

            // DELETE task
            del.addEventListener("click", function() {
                del.parentNode.remove()
            })  

        }
    })
}