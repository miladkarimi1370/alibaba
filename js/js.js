const myCollectionPicture = document.querySelectorAll(".myCollectionPicture>img");
const mySelectionForExactModifying = document.querySelector(".mySelectionForExactModifying");
const myUlForPictureCollection = document.querySelector(".myUlForPictureCollection");
const listOfPartAccordion = document.querySelectorAll(".partAccordion");
const myTitles = document.querySelectorAll(".myTitles");
const mySubTitles = document.querySelectorAll(".mySubTitles");


myTitles.forEach((item) => {
    item.addEventListener("click", (e) => {


        if (e.target.parentElement.parentElement.dataset) {
            let { id } = e.target.parentElement.parentElement.dataset

            mySubTitles.forEach((item, index) => {

                if (id == index) {

                    item.classList.toggle("hidden")
                } else {
                    item.classList.add("hidden")
                }

            })

        }


    })

}, true)


const handleLink = (e) => {


    for (i = 0; i < myUlForPictureCollection.children.length; i++) {

        myUlForPictureCollection.children[i].children[0].classList.remove("text-blue-500", "font-bold", "border-b-4", "border-blue-500");


    }

    mySelectionForExactModifying.classList.remove("text-blue-500", "font-bold", "border-b-4", "border-blue-500");

    let myParentElement = e.target;

    myParentElement.parentElement.classList.add("text-blue-500", "font-bold", "border-b-4", "border-blue-500");



    const mySubParentElement = myParentElement.parentElement.parentElement.dataset.id;




    myCollectionPicture[0].classList.add("hidden");
    myCollectionPicture.forEach((item, index) => {
        item.classList.add("hidden")
        if (Number(mySubParentElement) === index) {
            item.classList.remove("hidden")


        }


    })






}
function setIdForPictureCollection() {
    mySubTitles.forEach((item) => {
        item.classList.add("hidden")
    })

    myCollectionPicture[0].classList.remove("hidden");
    mySelectionForExactModifying.classList.add("text-blue-500", "font-bold", "border-b-4", "border-blue-500");


    listOfPartAccordion.forEach((item) => {
        item.parentElement.setAttribute("data-h", item.parentElement.clientHeight);
        item.parentElement.classList.add("h-18", "py-5");
    })


}

const myToggleAccordion = (e) => {
    const desElement = e.target.parentElement;

    const arrayDesElement = [...desElement.classList]



    if (arrayDesElement.includes("partAccordion")) {


        desElement.parentElement.classList.toggle("h-60")

        desElement.parentElement.classList.toggle("overflow-y-hidden");

    } else return

}