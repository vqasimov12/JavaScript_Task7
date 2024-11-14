const getAccessTokenFromCookies = () => {
  const match = document.cookie.match(new RegExp("(^| )access_token=([^;]+)"));
  return match ? match[2] : null;
};
const list = document.getElementById("list");

const input = document.getElementById("input");
let currentItem;
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  Update();
});

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    console.log("Input is empty");
    return;
  }
  AddTodo(input.value);
});

const createListItem = (item) => {
  const p = document.createElement("p");
  const mainDiv = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  p.innerText = item.title;
  p.classList.add("listItem");

  p.style.textWrap = "wrap";
  div1.append(p);
  div1.classList.add("div");
  div2.classList.add("div");
  mainDiv.append(div1);

  const edit = document.createElement("button");
  edit.classList.add("editBtn");

  edit.addEventListener("click", () => {
    input.value = p.innerText;
    saveBtn.classList.remove("invisible");
    addBtn.classList.add("invisible");
    currentItem = item;
    console.log(currentItem);
    console.log(currentItem);
  });

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "16px");
  svg.setAttribute("viewBox", "0 0 512 512");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
  );

  svg.appendChild(path);

  edit.appendChild(svg);

  const binButton = document.createElement("button");
  binButton.classList.add("bin-button");

  const binTopSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  binTopSvg.setAttribute("class", "bin-top");
  binTopSvg.setAttribute("viewBox", "0 0 39 7");
  binTopSvg.setAttribute("fill", "none");
  binTopSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const topLine1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  topLine1.setAttribute("y1", "5");
  topLine1.setAttribute("x2", "39");
  topLine1.setAttribute("y2", "5");
  topLine1.setAttribute("stroke", "white");
  topLine1.setAttribute("stroke-width", "4");

  const topLine2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  topLine2.setAttribute("x1", "12");
  topLine2.setAttribute("y1", "1.5");
  topLine2.setAttribute("x2", "26.0357");
  topLine2.setAttribute("y2", "1.5");
  topLine2.setAttribute("stroke", "white");
  topLine2.setAttribute("stroke-width", "3");

  binTopSvg.appendChild(topLine1);
  binTopSvg.appendChild(topLine2);

  const binBottomSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  binBottomSvg.setAttribute("class", "bin-bottom");
  binBottomSvg.setAttribute("viewBox", "0 0 33 39");
  binBottomSvg.setAttribute("fill", "none");
  binBottomSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  mask.setAttribute("id", "path-1-inside-1_8_19");
  mask.setAttribute("fill", "white");

  const maskPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  maskPath.setAttribute(
    "d",
    "M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
  );
  mask.appendChild(maskPath);

  const mainPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  mainPath.setAttribute(
    "d",
    "M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
  );
  mainPath.setAttribute("fill", "white");
  mainPath.setAttribute("mask", "url(#path-1-inside-1_8_19)");

  const binBottomLine1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  binBottomLine1.setAttribute("d", "M12 6L12 29");
  binBottomLine1.setAttribute("stroke", "white");
  binBottomLine1.setAttribute("stroke-width", "4");

  const binBottomLine2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  binBottomLine2.setAttribute("d", "M21 6V29");
  binBottomLine2.setAttribute("stroke", "white");
  binBottomLine2.setAttribute("stroke-width", "4");

  binBottomSvg.appendChild(mask);
  binBottomSvg.appendChild(mainPath);
  binBottomSvg.appendChild(binBottomLine1);
  binBottomSvg.appendChild(binBottomLine2);

  binButton.appendChild(binTopSvg);
  binButton.appendChild(binBottomSvg);

  binButton.addEventListener("click", () => {
    deleteTodo(item._id);
  });

  div2.append(edit);
  div2.appendChild(binButton);
  div2.style.gap = "5px";
  mainDiv.append(div2);
  mainDiv.classList.add("div");
  mainDiv.style.width = "100%";
  mainDiv.style.borderBottom = "1px solid lightgray";
  list.append(mainDiv);
};

const createList = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    data.map((item) => createListItem(item));
  } else {
    const img = document.getElementById("img");
    if (img) {
      img.classList.remove("invisible");
    }
  }
};

const getTodos = async () => {
  const accessToken = getAccessTokenFromCookies();

  if (!accessToken) {
    console.log("Access token not found in cookies");
    alert("Can not Access DataBase");
    return;
  }
  try {
    const response = await fetch("http://localhost:5001/todos/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) 
      throw new Error(`HTTP error! Status: ${response.status}`);
    

    const data = await response.json();

    createList(data);
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
};
const AddTodo = async (todo) => {
  const accessToken = getAccessTokenFromCookies();
  if (!accessToken) {
    console.log("Access token not found in cookies");
    alert("Cannot Access Database");
    return;
  }
  try {
    const response = await fetch("http://localhost:5001/todos/", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) 
      throw new Error(`HTTP error! Status: ${response.status}`);
    

    const data = await response.json();
    console.log(data);
    window.location.reload();
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
};

const Update = async () => {
  const accessToken = getAccessTokenFromCookies();
  if (!accessToken) {
    console.log("Access token not found in cookies");
    alert("Cannot Access Database");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:5001/todos/${currentItem._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: input.value,
        }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok)
      throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(data);
    window.location.reload();
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
};

const deleteTodo = async (id) => {
  const accessToken = getAccessTokenFromCookies();
  if (!accessToken) {
    console.log("Access token not found in cookies");
    alert("Cannot Access Database");
    return;
  }

  try {
    const response = await fetch(`http://localhost:5001/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) 
      throw new Error(`HTTP error! Status: ${response.status}`);

    window.location.reload();
  } catch (error) {
    console.log("Error deleting todo:", error);
  }
};

getTodos();
