    const textarea = document.getElementById("message");
    const counter = document.getElementById("counter");

    const maxChars = 150

    textarea.addEventListener("input", function()  {
        let chars = textarea.value.length
        let rem = maxChars - chars

        counter.textContent = `${chars} / 150 Characters`
        document.querySelector(".remaining").textContent = `${rem} Characters`
    })