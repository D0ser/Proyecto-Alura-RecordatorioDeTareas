const checkComplete = () => {
	const i = document.createElement("i");
	i.classList.add("far", "fa-check-square", "icon");
	i.addEventListener("click", completeTask);
	return i;
};

const completeTask = (event) => {
	const element = event.target;
	element.classList.toggle("completeIcon");
	element.classList.toggle("far");
	element.classList.toggle("fas");
};

export default checkComplete;
