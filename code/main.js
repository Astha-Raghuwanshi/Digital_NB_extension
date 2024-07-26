
document.addEventListener("DOMContentLoaded", () => {

    async function handlePollSubmit(event) {
      event.preventDefault();
      const title = document.getElementById("pollTitle").value;
      const optionsText = document
        .getElementById("pollOptions")
        .value.split(",")
        .map((option) => option.trim());
      const options = optionsText.map((optionText) => ({
        option_text: optionText,
      }));
  
      const response = await fetch("http://127.0.0.1:8000/api/poll/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, options }),
      });
  
      if (response.ok) {
        const poll = await response.json();
        addPollToList(poll);
        document.getElementById("createPollForm").reset();
      }
    }
  



});
  