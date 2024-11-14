const signUp = document.getElementById("signUp");
signUp.classList.add("invisible");
const signIn = document.getElementById("signIn");
const email1 = document.getElementById("email1");
const password1 = document.getElementById("password1");
const username2 = document.getElementById("name2");
const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");

const signInBtn = document.getElementById("singInBtn");
signInBtn.addEventListener("click", () => {
  login(email1.value, password1.value);
  refreshInputs()
});

const signUpBtn = document.getElementById("singUpBtn");
signUpBtn.addEventListener("click", () => {
  register(username2.value, email2.value, password2.value);
  singInLink.click();
  refreshInputs()
});

const singUpLink = document.getElementById("singUpLink");
singUpLink.addEventListener("click", () => {
  signIn.classList.add("invisible");
  signUp.classList.remove("invisible");
  refreshInputs()
});




const singInLink = document.getElementById("singInLink");
singInLink.addEventListener("click", () => {
  signIn.classList.remove("invisible");
  signUp.classList.add("invisible");
  refreshInputs()
});

const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const accessToken = data.token;
      document.cookie = `access_token=${accessToken}; `;
      window.location.href = "todo.html";
    } else {
      alert("Login failed");
      throw response.status;
    }
  } catch (error) {
    console.log(error);
  }
};

const register = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/register", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};


const refreshInputs=()=>{
  email2.value = "";
  password2.value = "";
  username2.value = "";
  email1.value = "";
  password1.value = "";
}