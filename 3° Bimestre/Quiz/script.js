const btns = document.querySelectorAll("button");

btns.forEach((btn, index) => {
    if (index != 0) {
        btn.disabled = true
    }

    btn.addEventListener("click", () => {
        if(index===0) {
            const opcaoCorreta = document.querySelector('input[value="Midnights"]');

            if(opcaoCorreta.checked) {
                let correto = document.querySelectorAll(".correct")[index];
                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
                btn.disabled = true
                btns[index + 1].disabled = false;
            } 

            else {
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }

        if(index===1){
            const opcaoCorreta = document.querySelector('input[value="24/09/2006"]');

            if(opcaoCorreta.checked) {
                let correto = document.querySelectorAll(".correct")[index];
                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
                btn.disabled = true
                btns[index + 1].disabled = false;
            } 

            else {
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }

        if(index===2) {
            const opcaoCorreta = document.querySelector('input[value="Betty,James,Agustine"]');

            if(opcaoCorreta.checked) {
                let correto = document.querySelectorAll(".correct")[index];
                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
                btn.disabled = true
                btns[index + 1].disabled = false;
            } 

            else {
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }

        if(index===3) {
            const opcaoCorreta = document.querySelector('input[value="vermelho"]');

            if(opcaoCorreta.checked) {
                let correto = document.querySelectorAll(".correct")[index];
                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
                btn.disabled = true
                btns[index + 1].disabled = false;
            } 

            else {
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }

        if(index===4) {
            const opcaoCorreta = document.querySelector('input[value="All too Well"]');

            if(opcaoCorreta.checked) {
                let correto = document.querySelectorAll(".correct")[index];
                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
                btn.disabled = true
                btns[index + 1].disabled = false;
            }

            else {
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }

    } )
} )