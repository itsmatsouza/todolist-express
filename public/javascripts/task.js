const setTagAsDone = async (element, id) => {
  try {
    let headers = new Headers({ "Content-type": "application/json" });
    let body = JSON.stringify({ task: { done: element.checked } });
    let response = await fetch(`/task/${id}?_method=put`, {
      headers: headers,
      body: body,
      method: "PUT",
    });
    let data = await response.json();
    let task = data.task;
    let parent = element.parentNode;

    if (task.done) {
      element.checked = true;
      parent.classList.add("has-text-success");
      parent.classList.add("it-italic");
    } else {
      element.checked = false;
      parent.classList.remove("has-text-success");
      parent.classList.remove("it-italic");
    }
  } catch (err) {
    alert("Erro ao atualizar a tarefa");
  }
};
