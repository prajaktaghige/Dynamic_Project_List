function addProject() {
    const projectInput = document.getElementById('projectInput');
    const projectName = projectInput.value;

    if (projectName === '') {
        alert('Please enter a project name.');
        return;
    }

    const projectList = document.getElementById('projectList');
    const li = document.createElement('li');
    li.textContent = projectName;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        projectList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    projectList.appendChild(li);

    projectInput.value = '';
}
